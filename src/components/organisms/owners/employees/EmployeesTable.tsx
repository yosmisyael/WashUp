// src/components/organisms/owners/employees/EmployeesTable.tsx
import React from 'react';

// 1. IMPORT (Link, Button, dan Plus DIHAPUS)
import { SearchBar } from '@/components/molecules/SearchBar';
import { FilterDropdown } from '@/components/molecules/FilterDropdown';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { RoleBadge } from '@/components/atoms/RoleBadge';
import { UserAvatar } from '@/components/atoms/UserAvatar';
import { PaginationControl } from '@/components/molecules/PaginationControl';

// 2. IMPORT IKON (Plus DIHAPUS)
import { Edit, Trash2, RotateCcw } from 'lucide-react';

// 3. DATA MOCKUP (Avatar dikembalikan ke path lokal)
const employeesData = [
  {
    id: '#001',
    name: 'John Smith',
    avatar: '/avatars/john.png', // <-- DIKEMBALIKAN
    role: 'owner',
    startDate: 'Jan 15, 2023',
    status: 'active',
  },
  {
    id: '#002',
    name: 'Sarah Johnson',
    avatar: '/avatars/sarah.png', // <-- DIKEMBALIKAN
    role: 'employee',
    startDate: 'Mar 22, 2023',
    status: 'active',
  },
  {
    id: '#003',
    name: 'Mike Chen',
    avatar: '/avatars/mike.png', // <-- DIKEMBALIKAN
    role: 'employee',
    startDate: 'May 08, 2023',
    status: 'active',
  },
  {
    id: '#004',
    name: 'Emily Davis',
    avatar: '/avatars/emily.png', // <-- DIKEMBALIKAN
    role: 'employee',
    startDate: 'Jul 12, 2023',
    status: 'inactive',
  },
];

// Opsi untuk filter dropdown
const filterOptions = ["All Roles", "Owner", "Employee"];

export function EmployeesTable() {
  return (
    // 'div' ini adalah wrapper kartu putih
    <div className="bg-white p-6 shadow rounded-lg text-black">
      
      {/* 4. Bagian Kontrol (TOMBOL DIHAPUS DARI SINI) */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Team Members</h2>
        <div className="flex items-center gap-4">
          <SearchBar placeholder="Search employees..." />
          <FilterDropdown
            label="Filter by role"
            options={filterOptions}
            defaultValue="All Roles"
          />
        </div>
      </div>

      {/* 5. Tabel (Tetap sama) */}
      <table className="w-full table-auto">
        <thead className="text-left text-sm text-gray-500">
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4">Employee ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Start Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {employeesData.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-50">
              <td className="p-4 font-medium">{emp.id}</td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <UserAvatar src={emp.avatar} alt={emp.name} size={32} />
                  <span className="font-medium">{emp.name}</span>
                </div>
              </td>
              <td className="p-4">
                <RoleBadge variant={emp.role as 'owner' | 'employee'} />
              </td>
              <td className="p-4">{emp.startDate}</td>
              <td className="p-4">
                <StatusBadge variant={emp.status as 'active' | 'inactive'} />
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800" title="Reset Password">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 6. Paginasi (Tetap sama) */}
      <div className="mt-6">
        <PaginationControl />
      </div>
    </div>
  );
}