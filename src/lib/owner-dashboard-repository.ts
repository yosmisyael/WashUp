import 'server-only';
import prisma from '@/lib/prisma';

function calculatePercentageChange(current: number, previous: number): number {
    if (previous === 0) {
        return current > 0 ? 100 : 0;
    }
    const change = ((current - previous) / previous) * 100;
    return Number(change.toFixed(1)); // Return one decimal place
}

export async function getDashboardStats(days: number = 30) {
    const now = new Date();
    const currentPeriodEnd = new Date();
    const currentPeriodStart = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

    const previousPeriodEnd = currentPeriodStart;
    const previousPeriodStart = new Date(previousPeriodEnd.getTime() - days * 24 * 60 * 60 * 1000);

    const [currentInvoiceStats, previousInvoiceStats, currentNewCustomers, previousNewCustomers] = await Promise.all([

        prisma.invoice.aggregate({
            _sum: {
                grandTotal: true
            },
            _count: {
                id: true
            },
            where: {
                isPaid: true,
                paidAt: {
                    gte: currentPeriodStart,
                    lt: currentPeriodEnd,
                },
            },
        }),

        prisma.invoice.aggregate({
            _sum: {
                grandTotal: true
            },
            _count: {
                id: true
            },
            where: {
                isPaid: true,
                paidAt: {
                    gte: previousPeriodStart,
                    lt: previousPeriodEnd,
                },
            },
        }),

        prisma.customer.count({
            where: {
                createdAt: {
                    gte: currentPeriodStart,
                    lt: currentPeriodEnd,
                },
            },
        }),

        prisma.customer.count({
            where: {
                createdAt: {
                    gte: previousPeriodStart,
                    lt: previousPeriodEnd,
                },
            },
        }),
    ]);

    const currentRevenue = currentInvoiceStats._sum.grandTotal ?? 0;
    const currentOrders = currentInvoiceStats._count.id ?? 0;
    const currentAvgOrderValue = currentOrders > 0 ? currentRevenue / currentOrders : 0;

    const previousRevenue = previousInvoiceStats._sum.grandTotal ?? 0;
    const previousOrders = previousInvoiceStats._count.id ?? 0;
    const previousAvgOrderValue = previousOrders > 0 ? previousRevenue / previousOrders : 0;

    const revenueChange = calculatePercentageChange(currentRevenue, previousRevenue);
    const ordersChange = calculatePercentageChange(currentOrders, previousOrders);
    const newCustomersChange = calculatePercentageChange(currentNewCustomers, previousNewCustomers);
    const avgOrderValueChange = calculatePercentageChange(currentAvgOrderValue, previousAvgOrderValue);

    const formatChange = (change: number) => ({
        change: `${change > 0 ? '+' : ''}${change}%`,
        changeType: (change >= 0 ? 'positive' : 'negative') as 'positive' | 'negative',
    });

    return {
        totalRevenue: {
            value: `Rp${new Intl.NumberFormat('id-ID').format(currentRevenue)}`,
            ...formatChange(revenueChange),
        },
        totalOrders: {
            value: new Intl.NumberFormat().format(currentOrders),
            ...formatChange(ordersChange),
        },
        newCustomers: {
            value: new Intl.NumberFormat().format(currentNewCustomers),
            ...formatChange(newCustomersChange),
        },
        avgOrderValue: {
            value: `Rp${new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(currentAvgOrderValue)}`,
            ...formatChange(avgOrderValueChange),
        },
    };
}