'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export type EmployeeFormState = {
    message?: string;
    errors?: string[];
};
const CreateEmployeeSchema = z.object({
    name: z.string().min(3, 'Full name must be at least 3 characters'),
    email: z.email('Invalid email address'),
    role: z.enum(['employee'], 'Please select a role.'),
    startDate: z.coerce.date('Please enter a start date.'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
})
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });


export async function createEmployee(
    prevState: EmployeeFormState,
    formData: FormData,
): Promise<EmployeeFormState> {

    const data = Object.fromEntries(formData);

    const validatedFields = CreateEmployeeSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { name, email, role, startDate, password } = validatedFields.data;

    const hashedPassword = await Bun.password.hash(password, {
        algorithm: 'bcrypt',
        cost: 10,
    });

    try {
        await prisma.employee.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role,
                startDate: startDate,
            }
        });

    } catch (error: unknown) {
        console.error('Failed to create employee:', error);
        return { message: 'Failed to create employee. Please try again.' };
    }
    console.log('success')
    revalidatePath('/owners/employees');
    redirect('/owners/employees');
}