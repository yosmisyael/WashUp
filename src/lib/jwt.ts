import jwt, {JwtPayload} from "jsonwebtoken";
import {ROLE} from "../../prisma/generated/enums";

export interface JwtPayloadSession extends JwtPayload {
    name: string;
    email: string;
    role?: ROLE;
}

export function signToken(payload: JwtPayloadSession): string {
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