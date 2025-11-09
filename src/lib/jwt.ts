import jwt from "jsonwebtoken";

export type JwtPayloadCustomer = {
    sub: number;
    name: string;
    email: string;
}

export function signToken(payload: JwtPayloadCustomer): string {
    const secret = Bun.env.JWT_SECRET_KEY;
    const exp = Bun.env.JWT_AGE;
    if (!secret || !exp) throw Error('[ERROR] JWT secret or age not set');

    return jwt.sign(
        payload,
        secret,
        {
            expiresIn: Number(exp),
        }
    )
}