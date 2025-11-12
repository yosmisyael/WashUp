'use server';

import {z} from 'zod';
import {createSession} from '@/lib/session';
import prisma from '@/lib/prisma';
import {redirect} from 'next/navigation';
import {cookies} from "next/headers";
import {LoginFormState} from "@/lib/types";

const LoginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function clearFlashMessages() {
    try {
        const cookie = await cookies();
        cookie.delete('flash_messages');
    } catch (error) {
        console.error(`[ERROR] failed to clear flash messages: ${error}`);
    }
}

export async function loginEmployee(
    prevState: LoginFormState,
    formData: FormData,
) {
    const data = Object.fromEntries(formData);

    let employee;

    const validatedFields = LoginSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues.map(e => e.message),
        };
    }

    const { email, password } = validatedFields.data;

    try {
        employee = await prisma.employee.findUniqueOrThrow({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                role: true,
            }
        });

        if (!employee) {
            return { message: 'Invalid email or password.' };
        }

        const isPasswordValid: boolean = await Bun.password.verify(
            password,
            employee.password
        );

        if (!isPasswordValid) {
            return { message: 'Invalid email or password.' };
        }

        await createSession({
            sub: employee.id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
        });
    } catch (e: unknown) {
        console.error(e);
        return { message: 'Login failed, please try again later.' };
    }

    if (employee && employee.role == "owner") {
        redirect('/owners/dashboard');
    } else {
        redirect('/employees/dashboard');
    }
}