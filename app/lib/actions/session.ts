// import 'server-only';
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

import 'server-only'
import { cookies } from 'next/headers'

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const algorithm = { name: "AES-GCM", iv: new Uint8Array(12) };
    const key = await crypto.subtle.generateKey(
        {
            name: 'AES-GCM',
            length: 256,
        },
        true,
        ['encrypt', 'decrypt']
    );
    const data: BufferSource = new TextEncoder().encode(JSON.stringify({ userId, expiresAt }));
    const sessionBuffer = await crypto.subtle.encrypt(algorithm, key, data);
    const session = Buffer.from(sessionBuffer).toString('base64');
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}