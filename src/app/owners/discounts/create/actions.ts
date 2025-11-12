'use server';

import { z } from 'zod';
import prisma from '../../../../lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export type DiscountFormState = {
    message?: string;
    errors?: string[];
};

const CreateDiscountSchema = z.object({
    name: z.string().min(3, 'Template name must be at least 3 characters'),
    type: z.enum(['percentage', 'value'], 'Please select a discount type.'),
    value: z.coerce
        .number('Value must be a number.' )
        .int()
        .positive('Value must be a positive number.'),
    startDate: z.coerce.date('Please enter a start date.'),
    endDate: z.coerce.date('Please enter an end date.'),
})
    .refine(data => data.endDate > data.startDate, {
        message: 'End date must be after the start date.',
        path: ['endDate'],
    });

export async function createDiscount(
    prevState: DiscountFormState,
    formData: FormData,
): Promise<DiscountFormState> {

    const data = Object.fromEntries(formData);

    const validatedFields = CreateDiscountSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { name, type, value, startDate, endDate } = validatedFields.data;

    try {
        await prisma.discount.create({
            data: {
                name,
                type,
                value,
                startDate,
                endDate,
            }
        });

    } catch (error: unknown) {
        console.error('Failed to create discount:', error);
        return { message: 'Failed to create discount. Please try again.' };
    }

    revalidatePath('/owners/discounts');
    redirect('/owners/discounts');
}