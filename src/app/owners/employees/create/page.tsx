import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; 
import { EmployeeForm } from '@/components/organisms/owners/employees/EmployeeForm';

export default function CreateEmployeePage() {
  return (
    <div className="mx-auto max-w-4xl">
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="text-sm text-gray-500 mb-1">
            <Link href="/owners/employees" className="hover:underline">Employees</Link>
            <span className="mx-1">&gt;</span>
            <span>Create New Employee</span>
          </div>
          <h1 className="text-3xl font-bold text-black">Create New Employee</h1>
        </div>
        <Link 
          href="/owners/employees" 
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Employee List
        </Link>
      </div>

      <EmployeeForm />
    </div>
  );
}