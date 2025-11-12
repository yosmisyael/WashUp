// src/components/organisms/owners/customers/CustomerDirectory.tsx
import React from 'react';
import Link from 'next/link'; 

import Button from '@/components/atoms/Button';
import { UserAvatar } from '@/components/atoms/UserAvatar';
import Select from '@/components/atoms/Select';
import { PaginationControl } from '@/components/molecules/PaginationControl';
import { Upload, Eye } from 'lucide-react'; 

// --- PERBAIKAN 1: HAPUS '#' DARI DATA ID ---
const customersData = [
  {
    id: 'C001', // <-- DARI '#C001'
    name: 'Sarah Johnson',
    title: 'Premium Customer',
    avatar: '/avatars/sarah.png', 
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    regDate: 'Jan 15, 2024',
  },
  {
    id: 'C002', // <-- DARI '#C002'
    name: 'Michael Chen',
    title: 'Regular Customer',
    avatar: '/avatars/mike.png',
    email: 'm.chen@email.com',
    phone: '(555) 234-5678',
    regDate: 'Jan 12, 2024',
  },
  {
    id: 'C003', // <-- DARI '#C003'
    name: 'Emily Rodriguez',
    title: 'New Customer',
    avatar: '/avatars/emily.png',
    email: 'emily.r@email.com',
    phone: '(555) 345-6789',
    regDate: 'Jan 10, 2024',
  },
  {
    id: 'C004', // <-- DARI '#C004'
    name: 'David Thompson',
    title: 'VIP Customer',
    avatar: '/avatars/david.png',
    email: 'd.thompson@email.com',
    phone: '(555) 456-7890',
    regDate: 'Jan 08, 2024',
  },
];

export function CustomerDirectory() {
  return (
    <div className="bg-white p-6 shadow rounded-lg text-black">
      
      {/* (Header Tabel, Export, Per Page... tetap sama) */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Customer Directory</h2>
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="py-2.5 px-4 text-sm"
            icon={<Upload className="w-4 h-4" />}
          >
            Export
          </Button>
          <div className="w-32">
            <Select id="perPage" defaultValue="25">
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
            </Select>
          </div>
        </div>
      </div>

      <table className="w-full table-auto">
        <thead className="text-left text-sm text-gray-500">
          <tr className="border-b border-gray-200">
            {/* ... (th lainnya tetap sama) ... */}
            <th className="py-3 px-4">Customer ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Phone</th>
            <th className="py-3 px-4">Registration Date</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {customersData.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              
              {/* --- PERBAIKAN 2: TAMBAHKAN '#' UNTUK TAMPILAN --- */}
              <td className="p-4 font-medium">#{customer.id}</td>

              {/* (Data name, email, phone, regDate tetap sama) */}
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <UserAvatar src={customer.avatar} alt={customer.name} size={32} />
                  <div>
                    <span className="font-medium">{customer.name}</span>
                    <p className="text-sm text-gray-500">{customer.title}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">{customer.email}</td>
              <td className="p-4">{customer.phone}</td>
              <td className="p-4">{customer.regDate}</td>
              
              <td className="p-4">
                {/* Link ini sekarang akan membuat href="/owners/customers/C001" (BENAR) */}
                <Link href={`/owners/customers/${customer.id}`}>
                  <Button
                    className="py-2 px-3 text-sm" 
                    icon={<Eye className="w-4 h-4" />}
                  >
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginasi (Tetap sama) */}
      <div className="mt-6">
        <PaginationControl />
      </div>
    </div>
  );
}