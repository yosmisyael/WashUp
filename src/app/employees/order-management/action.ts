'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export type UpdateOrderStatusState = {
    message?: string;
    errors?: string[];
};

const ORDER_STATUS_VALUES = [
    'ACCEPTED',
    'IN_PROGRESS',
    'DONE',
    'ON_THE_WAY_TO_PICK_UP',
    'ON_THE_WAY_TO_DELIVER',
] as const;

const UpdateOrderStatusSchema = z.object({
    orderId: z.coerce
        .number('Order ID must be a number.')
        .int()
        .positive('Invalid Order ID.'),

    status: z.enum(ORDER_STATUS_VALUES, 'Please select a new status.'),
});

export async function updateOrderStatus(
    prevState: UpdateOrderStatusState,
    formData: FormData,
): Promise<UpdateOrderStatusState> {

    const data = Object.fromEntries(formData);
    const validatedFields = UpdateOrderStatusSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { orderId, status } = validatedFields.data;

    try {
        await prisma.order.update({
            where: {
                id: orderId,
            },
            data: {
                status: status,
            }
        });

    } catch (error: unknown) {
        console.error('Failed to update order status:', error);
        return { message: 'Failed to update order status. Please try again.' };
    }

    const orderDetailPagePath = `/employees/order-management/${orderId}`;

    revalidatePath(orderDetailPagePath);

    redirect(orderDetailPagePath);
}


export type AssignPickupState = {
    message?: string;
    errors?: string[];
};

const AssignPickupSchema = z.object({
    orderId: z.coerce
        .number('Order ID must be a number.')
        .int()
        .positive('Invalid Order ID.'),
    driverId: z.coerce
        .number('Please select a driver.')
        .int()
        .positive('Please select a driver.'),
    pickupTime: z.coerce.date('Please enter a pickup time.'),
});

export async function assignPickup(
    prevState: AssignPickupState,
    formData: FormData,
): Promise<AssignPickupState> {

    const data = Object.fromEntries(formData);
    const validatedFields = AssignPickupSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { orderId, driverId, pickupTime } = validatedFields.data;

    try {
        await prisma.orderPickup.upsert({
            where: {
                orderId: orderId,
            },
            update: {
                driverId: driverId,
                pickupTime: pickupTime,
            },
            create: {
                orderId: orderId,
                driverId: driverId,
                pickupTime: pickupTime,
            }
        });

    } catch (error: unknown) {
        console.error('Failed to assign pickup:', error);
        return { message: 'Failed to assign pickup. Please try again.' };
    }

    const orderDetailPagePath = `/employees/order-management/${orderId}`;
    revalidatePath(orderDetailPagePath);
    redirect(orderDetailPagePath);
}

export type AssignDeliveryState = {
    message?: string;
    errors?: string[];
};

const AssignDeliverySchema = z.object({
    orderId: z.coerce
        .number('Order ID must be a number.')
        .int()
        .positive('Invalid Order ID.'),
    driverId: z.coerce
        .number('Please select a driver.')
        .int()
        .positive('Please select a driver.'),
    arrivalTime: z.coerce.date('Please enter a pickup time.'),
});

export async function assignDelivery(
    prevState: AssignPickupState,
    formData: FormData,
): Promise<AssignDeliveryState> {

    const data = Object.fromEntries(formData);
    const validatedFields = AssignDeliverySchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { orderId, driverId, arrivalTime } = validatedFields.data;

    try {
        await prisma.orderDelivery.upsert({
            where: {
                orderId: orderId,
            },
            update: {
                driverId: driverId,
                arrivalTime: arrivalTime,
            },
            create: {
                orderId: orderId,
                driverId: driverId,
                arrivalTime: arrivalTime,
            }
        });

    } catch (error: unknown) {
        console.error('Failed to assign pickup:', error);
        return { message: 'Failed to assign pickup. Please try again.' };
    }

    const orderDetailPagePath = `/employees/order-management/${orderId}`;
    revalidatePath(orderDetailPagePath);
    redirect(orderDetailPagePath);
}