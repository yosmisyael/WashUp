// src/app/(pages)/owners/services/create/page.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; 
import { ServiceForm } from '@/components/organisms/owners/services/ServiceForm';
// 1. IMPORT 'HintCard' DI SINI (di level halaman)
import HintCard from '@/components/molecules/owners/HintCard';

export default function CreateServicePage() {
  return (
    // Kita batasi lebar halaman agar form tidak terlalu lebar
    <div className="mx-auto max-w-4xl">
      
      {/* 1. Header Halaman (Link "Back" dan Judul) */}
      <div className="mb-6">
        <Link 
          href="/owners/services" 
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-2"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Services List
        </Link>
        
        <h1 className="text-3xl font-bold text-black">Create New Service</h1>
        <p className="text-gray-600 mt-1">
          Add a new laundry service to your offerings. Fill in all required information below.
        </p>
      </div>

      {/* 2. HAPUS 'div' KARTU PUTIH DARI SINI */}
      {/* Render Organisme Formulir (yang sekarang sudah menjadi kartu) */}
      <ServiceForm />

      {/* 3. Render 'HintCard' DI LUAR dan DI BAWAH 'ServiceForm' */}
      <div className="mt-10">
        <HintCard title="Service Setup Tips">
          <ul className="list-disc space-y-1 pl-5">
            <li>Use clear, customer-friendly names that describe the service benefit</li>
            <li>Price competitively based on your local market research</li>
            <li>Set realistic completion times to manage customer expectations</li>
            <li>Include detailed descriptions to reduce customer inquiries</li>
          </ul>
        </HintCard>
      </div>
    </div>
  );
}