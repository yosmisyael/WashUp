import { Pool } from 'pg';

let pool: Pool;

const getPool = () => {
    if (!pool) {
        console.log('Creating new PostgreSQL connection pool...');
        pool = new Pool({
            connectionString: process.env.POSTGRES_URL,
            max: 4,
        });
    }
    return pool;
};

export const getDbPool = getPool;

 export const query = async (text: string, params?: any[]) => {
    const db = getPool();
    return db.query(text, params);
};
