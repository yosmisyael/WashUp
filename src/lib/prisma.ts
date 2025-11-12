import 'server-only';

import { PrismaClient } from '@/../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient | undefined;
};

let prisma: PrismaClient;

const pool = new Pool({ connectionString: Bun.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient({ adapter });
} else {
    if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = new PrismaClient({ adapter });
    }
    prisma = globalWithPrisma.prisma;
}

export default prisma;