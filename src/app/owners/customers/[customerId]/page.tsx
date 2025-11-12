// src/app/(pages)/owners/customers/[customerId]/page.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; 
import { CustomerDetailForm } from '@/components/organisms/owners/customers/CustomerDetailForm';

// --- INI FUNGSI YANG PERLU DIPERBAIKI ---
async function getCustomerData(id: string) {
  // 1. PASTIKAN OBJEK INI LENGKAP
  const allCustomers = {
    'C001': { 
      id: 'C001',
      name: 'Sarah Johnson',
      title: 'Premium Customer',
      avatar: '/avatars/sarah.png',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      regDate: 'Jan 15, 2024',
    },
    'C002': { // <-- PASTIKAN DATA INI ADA
      id: 'C002',
      name: 'Michael Chen',
      title: 'Regular Customer',
      avatar: '/avatars/mike.png',
      email: 'm.chen@email.com',
      phone: '(555) 234-5678',
      regDate: 'Jan 12, 2024',
    },
     'C003': { // <-- PASTIKAN DATA INI ADA
      id: 'C003',
      name: 'Emily Rodriguez',
      title: 'New Customer',
      avatar: '/avatars/emily.png',
      email: 'emily.r@email.com',
      phone: '(555) 345-6789',
      regDate: 'Jan 10, 2024',
    },
    'C004': { // <-- PASTIKAN DATA INI ADA
      id: 'C004',
      name: 'David Thompson',
      title: 'VIP Customer',
      avatar: '/avatars/david.png',
      email: 'd.thompson@email.com',
      phone: '(555) 456-7890',
      regDate: 'Jan 08, 2024',
    },
  };
  
  // 2. Logika ini sekarang akan berfungsi
  // @ts-ignore
  return allCustomers[id] || allCustomers['C001']; 
}
// --------------------------------------------------


export default async function CustomerDetailPage({ params }: { params: { customerId: string } }) {
  
  const customerId = params.customerId; // misal: "C002"
  const customerData = await getCustomerData(customerId);

  return (
    <div className="mx-auto max-w-4xl">
      
      {/* (Header Halaman: Link "Back" dan Judul) */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Link 
            href="/owners/customers" 
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-2"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Customer List
          </Link>
          
          <h1 className="text-3xl font-bold text-black">Details Customer</h1>
          <p className="text-gray-600 mt-1">
            Customer details on your customer list.
          </p>
        </div>
      </div>

      {/* Render Organisme Formulir */}
      <CustomerDetailForm customer={customerData} />
    </div>
  );
}