import prisma from "@/lib/prisma";

export async function getAllDiscounts() {
    return prisma.discount.findMany({
        select: {
            id: true,
            name: true,
            type: true,
            value: true,
            startDate: true,
            endDate: true,
        }
    });
}