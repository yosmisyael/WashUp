// src/app/(pages)/owners/employees/page.tsx
import React from 'react';
import Link from 'next/link'; // 1. Import Link
import Button from '@/components/atoms/Button'; // 2. Import Button
import { Plus } from 'lucide-react'; // 3. Import Ikon
import { EmployeesTable } from '@/components/organisms/owners/employees/EmployeesTable';

export default function EmployeesPage() {
  return (
    <>
      {/* 1. Header Halaman (SEKARANG DENGAN TOMBOL) */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* Judul */}
        <div>
          <h1 className="text-3xl font-bold text-black">Employee Management</h1>
          <p className="text-gray-600">Manage your team members and their access</p>
        </div>
        
        {/* Tombol (DIPINDAHKAN KE SINI) */}
        <Link href="/owners/employees/create">
          <Button
            className="py-2.5 px-4 text-sm whitespace-nowrap"
            icon={<Plus className="w-4 h-4" />}
          >
            Add New Employee
          </Button>
        </Link>
      </div>

      {/* 2. Organisme Tabel (SEKARANG HANYA TABEL) */}
      <EmployeesTable />
    </>
  );
}