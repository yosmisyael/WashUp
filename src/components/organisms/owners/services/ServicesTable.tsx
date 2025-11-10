// src/components/organisms/owners/services/ServicesTable.tsx
import React from 'react';
import { StatusBadge } from '@/components/atoms/StatusBadge';
import { PaginationControl } from '@/components/molecules/PaginationControl';
// 1. IMPORT IKON-IKON BARU
import { 
  Filter, Upload, Edit, Trash2, 
  Shirt, Zap, Sparkles, Wind, Package // <-- Ikon untuk layanan
} from 'lucide-react';

// 2. UPDATE MOCK DATA DENGAN INFORMASI IKON
const servicesData = [
  {
    name: 'Regular Wash & Dry',
    description: 'Standard laundry service',
    price: 6.50,
    unit: 'Kg',
    completionTime: '2 hours',
    status: 'active',
    Icon: Shirt, // <-- Tambahkan Ikon
    iconColor: 'text-blue-600 bg-blue-100', // <-- Tambahkan Warna
  },
  {
    name: 'Premium Wash & Press',
    description: 'Delicate care with pressing',
    price: 12.00,
    unit: 'Kg',
    completionTime: '4 hours',
    status: 'active',
    Icon: Sparkles,
    iconColor: 'text-purple-600 bg-purple-100',
  },
  {
    name: 'Eco-Friendly Wash',
    description: 'Environmentally conscious cleaning',
    price: 8.00,
    unit: 'Kg',
    completionTime: '3 hours',
    status: 'active',
    Icon: Wind,
    iconColor: 'text-green-600 bg-green-100',
  },
  {
    name: 'Express Service',
    description: 'Same-day turnaround',
    price: 15.00,
    unit: 'Kg',
    completionTime: '1 hour',
    status: 'active',
    Icon: Zap,
    iconColor: 'text-red-600 bg-red-100',
  },
  {
    name: 'Dry Clean Only',
    description: 'Professional dry cleaning',
    price: 18.00,
    unit: 'pcs',
    completionTime: '24 hours',
    status: 'inactive',
    Icon: Package,
    iconColor: 'text-yellow-600 bg-yellow-100',
  },
];

export function ServicesTable() {
  return (
    <div className="bg-white p-6 shadow rounded-lg text-black">
      {/* Header Tabel */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Services</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
            <Upload className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Tabel */}
      <table className="w-full table-auto">
        {/* 3. BUAT GARIS LEBIH TERANG */}
        <thead className="text-left text-sm text-gray-500">
          <tr className="border-b border-gray-200"> {/* <-- Diubah ke gray-200 */}
            <th className="py-3 px-4">Service Name</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Unit</th>
            <th className="py-3 px-4">Completion Time</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        {/* 4. BUAT GARIS LEBIH TERANG */}
        <tbody className="divide-y divide-gray-200"> {/* <-- Diubah ke gray-200 */}
          {servicesData.map((service) => (
            <tr key={service.name} className="hover:bg-gray-50">
              <td className="p-4">
                {/* 5. TAMBAHKAN IKON DI SINI */}
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${service.iconColor}`}>
                    <service.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-black">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.description}</div>
                  </div>
                </div>
              </td>
              <td className="p-4">${service.price.toFixed(2)}</td>
              <td className="p-4">{service.unit}</td>
              <td className="p-4">{service.completionTime}</td>
              <td className="p-4">
                <StatusBadge variant={service.status as 'active' | 'inactive'} />
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

      {/* Paginasi */}
      <div className="mt-6">
        <PaginationControl />
      </div>
    </div>
  );
}