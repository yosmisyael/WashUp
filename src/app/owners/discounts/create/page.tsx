// src/app/(pages)/owners/discounts/create/page.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; 
import { DiscountForm } from '@/components/organisms/owners/discounts/DiscountsForm';

export default function CreateDiscountPage() {
  return (
    // Kita batasi lebar halaman agar form tidak terlalu lebar
    <div className="mx-auto max-w-4xl">
      
      {/* 1. Header Halaman (Link "Back" dan Judul) */}
      <div className="mb-6">
        <Link 
          href="/owners/discounts" 
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-2"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Discount List
        </Link>
        
        <h1 className="text-3xl font-bold text-black">Create New Discount Template</h1>
        <p className="text-gray-600 mt-1">
          Fill in all required information below to create a new template.
        </p>
      </div>

      {/* 2. Render Organisme Formulir kita */}
      <DiscountForm />

      {/* Tidak ada HintCard di desain ini, jadi kita biarkan kosong */}
    </div>
  );
}