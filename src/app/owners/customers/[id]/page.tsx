'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Select } from '@/components/atoms/Select';

// Data customer dummy
const customersData = {
  'C001': {
    id: 'C001',
    name: 'Sarah Johnson',
    customerType: 'Premium Customer',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    registrationDate: 'Jan 15, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  'C002': {
    id: 'C002',
    name: 'Michael Chen',
    customerType: 'Regular Customer',
    email: 'm.chen@email.com',
    phone: '(555) 234-5678',
    registrationDate: 'Jan 12, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  'C003': {
    id: 'C003',
    name: 'Emily Rodriguez',
    customerType: 'New Customer',
    email: 'emily.r@email.com',
    phone: '(555) 345-6789',
    registrationDate: 'Jan 10, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  'C004': {
    id: 'C004',
    name: 'David Thompson',
    customerType: 'VIP Customer',
    email: 'd.thompson@email.com',
    phone: '(555) 456-7890',
    registrationDate: 'Jan 08, 2024',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
};

// Fallback avatar URL jika gambar tidak tersedia
const fallbackAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';

// Options untuk customer type
const customerTypeOptions = [
  { value: '', label: 'Select customer type' },
  { value: 'premium', label: 'Premium Customer' },
  { value: 'regular', label: 'Regular Customer' },
  { value: 'new', label: 'New Customer' },
  { value: 'vip', label: 'VIP Customer' },
];

export default function CustomerDetailPage() {
  const router = useRouter();
  const params = useParams();
  const customerId = params.id as string;

  const customerData = customersData[customerId as keyof typeof customersData];

  // Jika customer tidak ditemukan
  if (!customerData) {
    return (
      <div className="flex-1 bg-gray-50 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Customer Not Found</h1>
          <p className="text-gray-600 mt-2">The customer you're looking for doesn't exist.</p>
          <Button 
            onClick={() => router.push('/owners/customers')}
            className="mt-4"
          >
            Back to Customer List
          </Button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    router.push('/owners/customers');
  };

  // Fungsi untuk mendapatkan value select dari customer type
  const getCustomerTypeValue = (type: string) => {
    const typeMap: { [key: string]: string } = {
      'Premium Customer': 'premium',
      'Regular Customer': 'regular', 
      'New Customer': 'new',
      'VIP Customer': 'vip'
    };
    return typeMap[type] || '';
  };

  return (
    <div className="flex-1 space-y-6 bg-gray-50 p-8">
      {/* Header dengan tombol back */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Customer List</span>
        </button>
      </div>

      {/* Detail Customer Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border">
        {/* Header Section dengan foto */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-start gap-6">
            {/* Foto Customer */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-sm">
                <img
                  src={customerData.avatar}
                  alt={customerData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallbackAvatar;
                  }}
                />
              </div>
            </div>
            
            {/* Info Customer */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Details Customer</h1>
              <p className="text-gray-600">
                Customer details on your customer list. If you want to change or upgrade the data, just replace it.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kolom Kiri */}
            <div className="space-y-6">
              {/* Fullname Section */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Fullname
                </label>
                <Input 
                  defaultValue={customerData.name}
                  placeholder="e.g., John Doe"
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Enter the customer's name if you want to change it.
                </p>
              </div>

              {/* Phone Number Section */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input 
                  defaultValue={customerData.phone}
                  placeholder="e.g., 3456787656"
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Enter the customer's phone if you want to change it.
                </p>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="space-y-6">
              {/* Customer Type Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Customer Type
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <Select 
                  options={customerTypeOptions}
                  defaultValue={getCustomerTypeValue(customerData.customerType)}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Select the type of customer you want.
                </p>
              </div>

              {/* Email Section */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input 
                  defaultValue={customerData.email}
                  placeholder="e.g., johndoe@gmail.com"
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Email the customer if they want to change it according to their request.
                </p>
              </div>

              {/* Registration Date Section */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Registration Date
                </label>
                <Input 
                  defaultValue={customerData.registrationDate}
                  placeholder="e.g., Jan 15 2025"
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  If you want to change customer registration according to what the customer wants.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-8 mt-8 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5"
              onClick={handleBack}
            >
              Cancel
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}