'use server';

import {z} from "zod";
import {query} from "@/app/lib/db";
import {createSession} from "@/app/lib/actions/session";
import {redirect} from "next/navigation";

const LoginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormState = {
    message?: string;
    errors?: string[];
};

export async function loginCustomer(
    prevState: LoginFormState,
    formData: FormData,
) {
    redirect('/customers/dashboard');

    // const data = Object.fromEntries(formData);
    //
    // const validatedFields = LoginSchema.safeParse(data);
    //
    // if (!validatedFields.success) {
    //     return {
    //         errors: validatedFields.error.issues.map(e => e.message),
    //     };
    // }
    //
    // const { email, password } = validatedFields.data;
    //
    // try {
    //     const passwordQuery = await query(
    //         'SELECT password, id FROM customers WHERE email = $1',
    //         [email]
    //     );
    //     if (passwordQuery.rows.length === 0) {
    //         return { message: 'Invalid email or password.' };
    //     }
    //
    //     const customer = passwordQuery.rows[0];
    //
    //     const isPasswordValid: boolean = await Bun.password.verify(
    //         password,
    //         customer.password
    //     );
    //
    //     if (!isPasswordValid) {
    //         return { message: 'Invalid email or password.' };
    //     }
    //
    //     await createSession(customer.id);
    //
    // } catch (e: unknown) {
    //     console.error(e);
    //     return { message: 'Login failed, please try again later.' };
    // }

    // redirect('/customers/dashboard');
}