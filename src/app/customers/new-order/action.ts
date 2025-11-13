'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {getCurrentSession} from "@/lib/session-repository";
import {ORDER_STATUS, ORDER_TYPE} from "../../../../prisma/generated/enums";

export type CreateOrderState = {
    message?: string;
    errors?: string[];
};

const ServiceItemSchema = z.object({
    serviceId: z.coerce.number().int().positive(),
});

const CreateOrderSchema = z.object({
    pickupLocationId: z.coerce.number().int().positive('Please select a pickup location.'),
    deliveryLocationId: z.coerce.number().int().positive('Please select a delivery location.'),
    notes: z.string().optional().nullable(),
    services: z.string('No services were provided.'),
});


/**
 * Creates a new order, including its details, items, and invoice.
 * This is a transactional operation.
 */
export async function createOrder(
    prevState: CreateOrderState,
    formData: FormData,
): Promise<CreateOrderState> {
    const session = await getCurrentSession();
    const customerId = session!.sub!;

    const data = Object.fromEntries(formData);
    const validatedFields = CreateOrderSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { pickupLocationId, deliveryLocationId, notes, services } = validatedFields.data;

    let parsedServices: z.infer<typeof ServiceItemSchema>[];
    try {
        const servicesData = JSON.parse(services);
        const servicesValidation = z.array(ServiceItemSchema).safeParse(servicesData);
        if (!servicesValidation.success) {
            return { errors: ['Invalid service item data.', ...servicesValidation.error.issues.map(e => e.message)] };
        }
        if (servicesValidation.data.length === 0) {
            return { errors: ['You cannot create an order with no items.'] };
        }
        parsedServices = servicesValidation.data;
    } catch (error) {
        return { errors: ['Failed to parse service data.'] };
    }


    try {
        await prisma.$transaction(async (tx) => {

            const serviceIds = parsedServices.map(s => s.serviceId);
            const servicesFromDb = await tx.service.findMany({
                where: { id: { in: serviceIds } },
                select: { id: true, price: true }
            });

            const itemsToCreate = [];

            for (const item of parsedServices) {
                const dbService = servicesFromDb.find(s => s.id === item.serviceId);
                if (!dbService) {
                    throw new Error(`Service with ID ${item.serviceId} not found.`);
                }

                itemsToCreate.push({
                    serviceId: item.serviceId,
                });
            }

            const order = await tx.order.create({
                data: {
                    customerId: parseInt(customerId),
                    notes: notes,
                    status: ORDER_STATUS.ACCEPTED,
                    type: ORDER_TYPE.delivery,
                }
            });

            const newOrderId = order.id;

            await tx.orderDetail.create({
                data: {
                    orderId: newOrderId,
                    pickupLocationId: pickupLocationId,
                    deliverLocationId: deliveryLocationId,
                }
            });

            await tx.item.createMany({
                data: itemsToCreate.map(item => ({
                    ...item,
                    orderId: newOrderId,
                }))
            });
            return order;
        });


    } catch (error: unknown) {
        console.error('Failed to create order:', error);
        return { message: 'Failed to create order. Please try again.' };
    }

    revalidatePath('/customers/new-order');
    revalidatePath('/customers/orders');
    redirect('/customers/orders');
}