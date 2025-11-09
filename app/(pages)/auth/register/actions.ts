'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import prisma from "@/app/lib/prisma";

const RegisterSchema = z.object({
    name: z.string().min(3, 'Full name must be at least 3 characters'),
    email: z.email('Invalid email address'),
    phone: z.string(),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type RegisterFormState = {
    message?: string;
    errors?: string[];
};

export async function customerRegister (
    initialState: RegisterFormState,
    formData: FormData
) {
    const data = Object.fromEntries(formData);

    const validatedFields = RegisterSchema.safeParse(data);

    if (!validatedFields.success) {
        validatedFields.error.issues.map(e => console.log(e.message));
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { name, email, password, phone } = validatedFields.data;

    const hashedPassword: string = await Bun.password.hash(password, {
        algorithm: 'bcrypt',
        cost: 10,
    });

    try {
        await prisma.customer.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
            }
        });
    } catch (error: unknown) {
        console.error('[ERROR] Register Failed: ', error);
        return { message: 'Something went wrong. Please try again.' };
    }

    redirect('/auth/login?message=Account+created+successfully.+Please+log+in.');
}
