'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Search, Download, Eye, Filter, ChevronDown } from 'lucide-react';

import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

const customers = [
  {
    id: 'C001',
    name: 'Sarah Johnson',
    customerType: 'Premium Customer',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    registrationDate: 'Jan 15, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  {
    id: 'C002',
    name: 'Michael Chen',
    customerType: 'Regular Customer',
    email: 'm.chen@email.com',
    phone: '(555) 234-5678',
    registrationDate: 'Jan 12, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  {
    id: 'C003',
    name: 'Emily Rodriguez',
    customerType: 'New Customer',
    email: 'emily.r@email.com',
    phone: '(555) 345-6789',
    registrationDate: 'Jan 10, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  {
    id: 'C004',
    name: 'David Thompson',
    customerType: 'VIP Customer',
    email: 'd.thompson@email.com',
    phone: '(555) 456-7890',
    registrationDate: 'Jan 08, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
];

// Fallback avatar URL jika gambar tidak tersedia
const fallbackAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face';

export default function CustomersPage() {
  const router = useRouter();

  const handleViewDetails = (customerId: string) => {
    // Navigasi ke halaman detail customer dengan base path /owners/customers
    router.push(`/owners/customers/${customerId}`);
  };

  return (
    <div className="flex-1 space-y-6 bg-gray-50 p-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900">Customer List</h1>
        <p className="text-gray-500">Manage and view all customer information</p>
      </div>

      {/* Search & Filter Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Search & Filter</h2>
        
        {/* Search and Filter Row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search Input */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input 
                className="pl-10 pr-4 py-2 w-full" 
                placeholder="Search by name or email..." 
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4">
            {/* Registration Date Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                <option value="">Registration Date</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Order Status Dropdown */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                <option value="">Order Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="refunded">Refunded</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Total Customers and Clear Filters */}
        <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-700">
            <strong>Total Customers:</strong> 1,247
          </div>
          
          <button className="flex items-center gap-2 text-blue-600 text-sm hover:text-blue-700 transition-colors w-fit">
            <Filter size={16} />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Customer Directory */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Customer Directory</h2>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Customer ID</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Registration Date</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-500 text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">#{customer.id}</td>
                    
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <img
                            src={customer.avatar}
                            alt={customer.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = fallbackAvatar;
                            }}
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-medium text-gray-900 truncate">{customer.name}</span>
                          <span className="text-xs text-gray-500 truncate">{customer.customerType}</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-4 py-3 text-gray-600">{customer.email}</td>
                    <td className="px-4 py-3 text-gray-600">{customer.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{customer.registrationDate}</td>
                    
                    <td className="px-4 py-3 text-right">
                      <button 
                        onClick={() => handleViewDetails(customer.id)}
                        className="inline-flex items-center justify-center gap-1 text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium border border-blue-600 rounded-md px-3 py-1.5 transition-colors"
                      >
                        <Eye size={14} />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-4 py-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-700">
                <strong>Resulting:</strong> 1,247
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
                  <option>25</option>
                </select>
                
                <span className="text-sm text-gray-700 mx-2">
                  1-25 of 1,247
                </span>
                
                <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                    ‹
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}