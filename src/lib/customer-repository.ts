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
    console.log("getting customer by id", customerId);
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