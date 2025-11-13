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

async function _getOrderDetailsQuery(orderId: number) {
    const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: {
            customer: {
                select: {
                    name: true,
                    phone: true,
                    email: true,
                },
            },
            orderDetail: {
                include: {
                    pickupLocation: {
                        select: { address: true, information: true },
                    },
                    deliverLocation: {
                        select: { address: true, information: true },
                    },
                },
            },
            items: {
                include: {
                    service: {
                        select: { name: true, unit: true, price: true },
                    },
                },
            },
            orderPickup: {
                select: {
                    pickupTime: true,
                    driver: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            },
            orderDelivery: {
                select: {
                    arrivalTime: true,
                    driver: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            },
            invoice: {
                select: { id: true, isPaid: true, payment: true },
            },

        },
    });

    if (!order) {
        throw new Error('Order not found');
    }

    return order;
}

function formatAddress(location: { address: string | null; information: string | null } | null | undefined): string {
    if (!location) return 'N/A';
    const parts: string[] = [];
    if (location.address) parts.push(location.address);
    if (location.information) parts.push(`(${location.information})`);
    return parts.join(' - ');
}

export async function getOrderDetails(orderId: number) {
    const order = await _getOrderDetailsQuery(orderId);

    const items = order.items.map(item => {
        const itemPrice = (item.quantity ?? 0) * (item.service.price ?? 0);
        return {
            service: item.service.name,
            qty: item.quantity ?? 0,
            unit: item.service.unit,
            notes: item.notes ?? '',
            price: itemPrice,
        };
    });

    const total = items.reduce((acc, item) => acc + item.price, 0);

    return {
        customer: {
            name: order.customer.name,
            phone: order.customer.phone ?? 'N/A',
            email: order.customer.email,
        },
        order: {
            type: order.type ?? 'N/A',
            date: order.createdAt.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            notes: order.notes ?? 'No notes.',
        },
        location: {
            pickup: formatAddress(order.orderDetail?.pickupLocation),
            delivery: formatAddress(order.orderDetail?.deliverLocation),
        },
        items: items,
        status: order.status ?? 'N/A',
        total: total,
        logistics: {
            pickup: order.orderPickup,
            delivery: order.orderDelivery,
        },
        invoice: order.invoice,
    };
}