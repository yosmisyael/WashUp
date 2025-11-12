import prisma from '@/lib/prisma';

export async function getServiceStatistics() {
    const stats = await prisma.service.aggregate({
        _count: {
            _all: true,
        },
        _avg: {
            price: true,
            completionTimeInHours: true,
        },
    });

    return {
        totalServices: stats._count._all,
        averagePrice: stats._avg.price,
        averageCompletionTime: stats._avg.completionTimeInHours,
    };
}

export async function getAllServices() {
    return prisma.service.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            descriptions: true,
            completionTimeInHours: true,
            unit: true,
        }
    });
}