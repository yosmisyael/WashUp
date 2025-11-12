// src/app/(pages)/owners/customers/page.tsx
import React from 'react';

// 1. IMPORT DUA ORGANISME KITA
import { CustomerFilterCard } from '@/components/organisms/owners/customers/CustomerFilterCard';
import { CustomerDirectory } from '@/components/organisms/owners/customers/CustomerDirectory';

export default function CustomersPage() {
  return (
    <>
      {/* 1. Header Halaman (sesuai desain) */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* Judul */}
        <div>
          <h1 className="text-3xl font-bold text-black">Customer List</h1>
          <p className="text-gray-600">Manage and view all customer information</p>
        </div>
        
        {/* Badge Total Customers */}
        <div className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg">
          Total Customers: 1,247
        </div>
      </div>

      {/* 2. Organisme Filter */}
      <CustomerFilterCard />

      {/* 3. Organisme Tabel Direktori */}
      <CustomerDirectory />
    </>
  );
}