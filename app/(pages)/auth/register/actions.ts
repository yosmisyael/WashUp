'use server';

import { query } from '@/app/lib/db';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import {DatabaseError} from "pg-protocol";

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
    redirect('/dashboard');

    // const data = Object.fromEntries(formData);
    //
    // const validatedFields = RegisterSchema.safeParse(data);
    // if (!validatedFields.success) {
    //     validatedFields.error.issues.map(e => console.log(e.message));
    //     return {
    //         errors: validatedFields.error.issues.map(e => e.message),
    //     };
    // }
    //
    // const { name, email, password, phone } = validatedFields.data;
    //
    // const hashedPassword: string = await Bun.password.hash(password, {
    //     algorithm: 'bcrypt',
    //     cost: 4,
    // });
    //
    // try {
    //     const { rows } = await query('SELECT create_new_customer($1, $2, $3, $4)', [
    //         name,
    //         email,
    //         phone,
    //         hashedPassword,
    //     ]);
    //
    //     const result: boolean = rows[0].create_new_customer.success;
    //
    //     if (!result) {
    //         return { message: 'Registration failed, please try again' };
    //     }
    // } catch (error: unknown) {
    //     if (error instanceof DatabaseError && error.code === '23505') {
    //         return { message: 'An account with this email already exists.' };
    //     }
    //     console.error('Database error:', error);
    //     return { message: 'Something went wrong. Please try again.' };
    // }

    // redirect('/auth/login?message=Account+created+successfully.+Please+log+in.');
}
