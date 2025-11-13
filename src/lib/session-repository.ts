'use server';

import {JwtPayloadSession, signToken} from '@/lib/jwt';
import {cookies} from 'next/headers';
import prisma from '@/lib/prisma';
import {redirect} from "next/navigation";
import jwt from "jsonwebtoken";

export async function createSession(jwtPayload: JwtPayloadSession) {
    const token = signToken(jwtPayload);

    if (jwtPayload.role) {
        await prisma.employeeSession.upsert({
            where: {
                employeeId: parseInt(jwtPayload.sub!),
            },
            update: {
                token
            },
            create: {
                token,
                employeeId: parseInt(jwtPayload.sub!),
            }
        })
    } else {
        await prisma.customerSession.upsert({
            where: {
                customerId: parseInt(jwtPayload.sub!),
            },
            update: {
                token
            },
            create: {
                token,
                customerId: parseInt(jwtPayload.sub!),
            }
        })
    }

    const cookie = await cookies();

    const expiresAt = new Date(Date.now() + parseInt(Bun.env.JWT_AGE!) * 1000);

    cookie.set('session', token, {
        httpOnly: true,
        secure: Bun.env.APP_ENV === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

export async function deleteSession() {
    const cookie = await cookies();
    const token = cookie.get('session')?.value;
    if (!token) {
        return redirect('/employees/login');
    }

    try {
        const verified = jwt.verify(token, Bun.env.JWT_SECRET_KEY!) as JwtPayloadSession;
        if (verified.role == 'owner' || verified.role == 'employee') {
            await prisma.employeeSession.delete({
                where: {
                    employeeId: parseInt(verified.sub!),
                }
            });
        } else {
            await prisma.customerSession.delete({
                where: {
                    customerId: parseInt(verified.sub!),
                }
            });
        }

    } catch (error) {
        console.error('Failed to delete session:', error);
    }

    cookie.delete('session');
    redirect('/employees/login');
}

function verifySession(session: string): JwtPayloadSession {
    return jwt.verify(session, Bun.env.JWT_SECRET_KEY!) as JwtPayloadSession;
}

export async function getCurrentSession() {
    try {
        const cookie = await cookies();
        const token = cookie.get('session')?.value;

        if (!token) {
            return null;
        }
        return verifySession(token);
    } catch (error) {
        console.error('Failed to verify session:', error);
        return null;
    }
}