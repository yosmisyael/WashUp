// src/components/organisms/owners/customers/CustomerFilterCard.tsx
"use client"; // Wajib karena filter memiliki state

import React from 'react';
import { SearchBar } from '@/components/molecules/SearchBar';
import Select from '@/components/atoms/Select'; // Asumsi ini adalah default export
import { RefreshCcw } from 'lucide-react'; // Ikon untuk "Clear Filters"

export function CustomerFilterCard() {
  // Nanti kita bisa tambahkan state untuk filter di sini
  // const [searchTerm, setSearchTerm] = useState('');
  // const [dateFilter, setDateFilter] = useState('default');
  // const [statusFilter, setStatusFilter] = useState('default');

  return (
    // Kartu putih pembungkus
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      
      {/* Header Kartu */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">Search & Filter</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
          <RefreshCcw className="w-4 h-4" />
          <span>Clear Filters</span>
        </button>
      </div>
      
      {/* Konten Filter (Grid 3 kolom) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Search Bar (dibuat lebih besar di desain, tapi kita pakai standar dulu) */}
        <div>
          <SearchBar placeholder="Search by name or email..." />
        </div>
        
        {/* Filter Registration Date */}
        <div>
          <Select 
            id="regDate" 
            defaultValue="default"
            // onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="default" disabled>Registration Date</option>
            <option value="today">Today</option>
            <option value="last7">Last 7 Days</option>
            <option value="last30">Last 30 Days</option>
          </Select>
        </div>
        
        {/* Filter Order Status */}
        <div>
          <Select 
            id="orderStatus" 
            defaultValue="default"
            // onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="default" disabled>Order Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </Select>
        </div>
      </div>
    </div>
  );
}