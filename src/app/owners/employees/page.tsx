import React from 'react';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import {Plus} from 'lucide-react';
import {EmployeesTable} from '@/components/organisms/owners/employees/EmployeesTable';
import prisma from "@/lib/prisma";

export default async function EmployeesPage() {
    const employees = await prisma.employee.findMany({
        select: {
            id: true,
            name: true,
            role: true,
            startDate: true,
        },
        where: {
            role: 'employee'
        }
    });

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                {/* Judul */}
                <div>
                    <h1 className="text-3xl font-bold text-black">Employee Management</h1>
                    <p className="text-gray-600">Manage your team members and their access</p>
                </div>

                <Link href="/owners/employees/create">
                    <Button
                        className="py-2.5 px-4 text-sm whitespace-nowrap"
                        icon={<Plus className="w-4 h-4"/>}
                    >
                        Add New Employee
                    </Button>
                </Link>
            </div>
            <EmployeesTable data={employees}/>
        </>
    );
}