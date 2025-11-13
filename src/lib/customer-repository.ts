import prisma from "@/lib/prisma";

export async function getAllCustomers() {
    return prisma.customer.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            createdAt: true,
        }
    });
}

export async function getCustomerById(customerId: number) {
    return prisma.customer.findUnique({
        where: {
            id: customerId,
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            createdAt: true,
        }
    });
}

export async function getCustomerLocations(customerId: number) {
    return prisma.location.findMany({
        where: {
            customerId: customerId,
        },
        select: {
            id: true,
            address: true,
            information: true,
        }
    });
}