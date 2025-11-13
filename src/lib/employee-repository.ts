import prisma from "@/lib/prisma";

export async function getAllEmployees() {
    return prisma.employee.findMany({
        where: {
            role: 'employee',
        }
    })
}