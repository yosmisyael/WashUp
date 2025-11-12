import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; 
import { DiscountForm } from '@/components/organisms/owners/discounts/DiscountsForm';

export default function CreateDiscountPage() {
  return (
    <div className="mx-auto max-w-4xl">
      
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

      <DiscountForm />

    </div>
  );
}