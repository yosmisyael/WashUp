import 'server-only';
import {JwtPayloadCustomer, signToken} from '@/lib/jwt';
import {cookies} from 'next/headers';
import prisma from '@/lib/prisma';

// import { query } from '@/app/lib/db';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
//
// // Session payload type
// export type SessionPayload = {
//     customerId: number;
// };
//
//
// // --- Reads, verifies, and decodes the session cookie ---
// export async function getSession(): Promise<SessionPayload | null> {
//     // 1. Get the session token from the cookie
//     const sessionToken = cookies().get('session_token')?.value;
//     if (!sessionToken) {
//         return null;
//     }
//
//     try {
//         // 2. Look up the token in the database
//         const { rows } = await query(
//             'SELECT customer_id FROM customer_sessions WHERE token = $1',
//             [sessionToken]
//         );
//
//         if (rows.length === 0) {
//             return null; // Token not found or invalid
//         }
//
//         const customerId = rows[0].customer_id;
//         return { customerId };
//     } catch (error) {
//         console.error('Failed to get session:', error);
//         return null;
//     }
// }
//
// // --- Destroys the session cookie ---
// export async function deleteSession() {
//     // 1. Get the session token from the cookie
//     const sessionToken = cookies().get('session_token')?.value;
//     if (!sessionToken) {
//         return redirect('/login'); // No session, just redirect
//     }
//
//     try {
//         // 2. Delete the session from the database
//         await query('DELETE FROM customer_sessions WHERE token = $1', [
//             sessionToken,
//         ]);
//     } catch (error) {
//         console.error('Failed to delete session:', error);
//         // Continue to log out the user even if DB delete fails
//     }
//
//     // 3. Delete the cookie
//     cookies().delete('session_token');
//
//     redirect('/login');
// }
//
// export async function verifySession() {
//     const session = await getSession();
//     if (!session) {
//         redirect('/login');
//     }
//     return session;
// }
//

export async function createSession(jwtPayload: JwtPayloadCustomer) {
    const token = signToken(jwtPayload);
    
    await prisma.customerSession.create({
        data: {
            token,
            customerId: jwtPayload.sub,
        }
    })

    const cookie = await cookies();

    const exp = Bun.env.JWT_AGE!;

    cookie.set('session', token, {
        httpOnly: true,
        secure: Bun.env.APP_ENV === 'production',
        expires: parseInt(exp),
        sameSite: 'lax',
        path: '/',
    });
}