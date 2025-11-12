import 'server-only';
import prisma from '@/lib/prisma';

async function _getOrdersForTable() {
    return prisma.order.findMany({
        select: {
            id: true,
            createdAt: true,
            type: true,
            status: true,
            customer: {
                select: {
                    name: true
                }
            },
            invoice: {
                select: {
                    isPaid: true,
                    payment: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export async function getOrdersListEmployee() {
    return _getOrdersForTable();
}