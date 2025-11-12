import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; 
import {CustomerDetailForm, CustomerDetailFormProp} from '@/components/organisms/owners/customers/CustomerDetailForm';
import {getCustomerById} from "@/lib/customer-repository";

export default async function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const customerData = await getCustomerById(parseInt(id)) as CustomerDetailFormProp;

  return (
    <div className="mx-auto max-w-4xl">
      
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

      <CustomerDetailForm customer={customerData} />
    </div>
  );
}