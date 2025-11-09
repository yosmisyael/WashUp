'use server';

import {z} from 'zod';
import {query} from '@/app/lib/db';
import {createSession} from '@/app/lib/actions/session';
import prisma from '@/app/lib/prisma';
import {redirect} from 'next/navigation';
import {cookies} from "next/headers";

const LoginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormState = {
    message?: string;
    errors?: string[];
};

export async function clearFlashMessages() {
    try {
        const cookie = await cookies();
        cookie.delete('flash_messages');
    } catch (error) {
        console.error(`[ERROR] failed to clear flash messages: ${error}`);
    }
}

export async function loginCustomer(
    prevState: LoginFormState,
    formData: FormData,
) {
    const data = Object.fromEntries(formData);

    const validatedFields = LoginSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { email, password } = validatedFields.data;

    try {
        const userQuery = await prisma.customer.findUniqueOrThrow({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
            }
        });

        if (!userQuery) {
            return { message: 'Invalid email or password.' };
        }

        const isPasswordValid: boolean = await Bun.password.verify(
            password,
            userQuery.password
        );

        if (!isPasswordValid) {
            return { message: 'Invalid email or password.' };
        }

        await createSession(userQuery.id);
    } catch (e: unknown) {
        console.error(e);
        return { message: 'Login failed, please try again later.' };
    }

    redirect('/customers/dashboard');
}