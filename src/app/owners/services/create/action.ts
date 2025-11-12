'use server';

import { z } from 'zod';
import prisma from '../../../../lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import {ITEM_UNIT} from "../../../../../prisma/generated/enums";

export type ServiceFormState = {
    message?: string;
    errors?: string[];
};

const CreateServiceSchema = z.object({
    name: z.string().min(3, 'Service name must be at least 3 characters'),
    price: z.coerce
        .number('Price must be a number.')
        .int()
        .positive('Price must be a positive number.'),
    unit: z.enum(['Kg', 'pcs'], 'Please select a unit.'),
    completionTimeInHours: z.coerce
        .number('Completion time must be a number.')
        .int()
        .positive('Time must be a positive number.'),
    descriptions: z.string().optional(),
});

export async function createService(
    prevState: ServiceFormState,
    formData: FormData,
): Promise<ServiceFormState> {
    const data = Object.fromEntries(formData);

    const validatedFields = CreateServiceSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { name, price, unit, completionTimeInHours, descriptions } = validatedFields.data;

    try {
        await prisma.service.create({
            data: {
                name,
                price,
                unit: unit as ITEM_UNIT,
                completionTimeInHours,
                descriptions: descriptions || "",
            }
        });

    } catch (error: unknown) {
        console.error('Failed to create service:', error);
        return { message: 'Failed to create service. Please try again.' };
    }

    revalidatePath('/owners/services');
    redirect('/owners/services');
}