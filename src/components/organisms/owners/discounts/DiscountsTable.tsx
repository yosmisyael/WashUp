// src/components/organisms/owners/discounts/DiscountsTable.tsx
import React from 'react';

// 1. IMPORT SEMUA KOMPONEN GLOBAL KITA
import { SearchBar } from '@/components/molecules/SearchBar';
import { FilterDropdown } from '@/components/molecules/FilterDropdown';
import Button from '@/components/atoms/Button';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { PaginationControl } from '@/components/molecules/PaginationControl';

// 2. IMPORT IKON
import { Plus, Edit, Trash2 } from 'lucide-react';

// 3. DATA MOCKUP (PALSU) - Sesuai desain
const discountData = [
  {
    name: 'Summer Special',
    type: 'Percentage',
    value: '20%',
    startDate: 'Jun 1, 2024',
    endDate: 'Aug 31, 2024',
    status: 'active',
  },
  {
    name: 'New Customer',
    type: 'Value',
    value: '$5.00',
    startDate: 'Jan 1, 2024',
    endDate: 'Dec 31, 2024',
    status: 'active',
  },
  {
    name: 'Holiday Promo',
    type: 'Percentage',
    value: '15%',
    startDate: 'Dec 20, 2024',
    endDate: 'Jan 5, 2025',
    status: 'scheduled', // <-- Menggunakan variant baru kita
  },
];

// Opsi untuk filter dropdown
const filterOptions = ["All Status", "Active", "Scheduled", "Expired"];

export function DiscountsTable() {
  return (
    // 'div' ini adalah wrapper untuk semua kontrol tabel
    <div className="bg-white p-6 shadow rounded-lg text-black">
      
      {/* 4. Bagian Kontrol (Search, Filter, Button) */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <SearchBar placeholder="Search templates..." />
          <FilterDropdown
            label="Filter by status"
            options={filterOptions}
            defaultValue="All Status"
          />
        </div>
        <Button
          className="py-2.5 px-4 text-sm whitespace-nowrap"
          icon={<Plus className="w-4 h-4" />}
          // Nanti kita akan tambahkan Link di sini
        >
          Create New Discount Template
        </Button>
      </div>

      {/* 5. Tabel */}
      <table className="w-full table-auto">
        <thead className="text-left text-sm text-gray-500">
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4">Template Name</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Value</th>
            <th className="py-3 px-4">Start Date</th>
            <th className="py-3 px-4">End Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {discountData.map((discount) => (
            <tr key={discount.name} className="hover:bg-gray-50">
              <td className="p-4 font-medium">{discount.name}</td>
              <td className="p-4">{discount.type}</td>
              <td className="p-4">{discount.value}</td>
              <td className="p-4">{discount.startDate}</td>
              <td className="p-4">{discount.endDate}</td>
              <td className="p-4">
                <StatusBadge variant={discount.status as 'active' | 'scheduled'} />
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 6. Paginasi */}
      <div className="mt-6">
        <PaginationControl />
      </div>
    </div>
  );
}