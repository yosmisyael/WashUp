// src/components/organisms/owners/customers/CustomerDetailForm.tsx
"use client"; 

import React, { useState } from 'react';

// 1. PASTIKAN SEMUA IMPORT ATOM BENAR
import { Input } from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import { UserAvatar } from '@/components/atoms/UserAvatar';

// 2. TENTUKAN TIPE DATA CUSTOMER (untuk props)
type CustomerData = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  regDate: string;
};

// Helper component untuk Label
const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({
  htmlFor,
  children,
}) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-medium text-gray-900 mb-2"
  >
    {children}
  </label>
);

// --- KOMPONEN ORGANISME UTAMA ---
export function CustomerDetailForm({ customer }: { customer: CustomerData }) {
  // 3. State formulir
  const [fullName, setFullName] = useState(customer.name);
  const [phone, setPhone] = useState(customer.phone);
  const [customerType, setCustomerType] = useState(customer.title);
  const email = customer.email;
  const regDate = customer.regDate;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving data:", { fullName, phone, customerType });
  };

  return (
    // Kartu putih pembungkus
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        
        {/* 4. TATA LETAK 2 KOLOM (GRID) - INI BAGIAN PENTING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          
          {/* KOLOM KIRI: AVATAR */}
          <div className="flex flex-col items-center md:items-start">
            <UserAvatar 
              src={customer.avatar} 
              alt={customer.name} 
              size={160} 
            />
            {/* Avatar Anda 'rusak' karena path '/avatars/sarah.png' tidak ada.
              Ini normal, nanti bisa diperbaiki dengan gambar sungguhan 
              atau mengizinkan domain ui-avatars.com.
            */}
          </div>

          {/* KOLOM KANAN: FORM FIELDS */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <FormLabel htmlFor="fullName">Fullname*</FormLabel>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <FormLabel htmlFor="phone">Phone Number*</FormLabel>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            
            <div>
              <FormLabel htmlFor="customerType">Customer Type*</FormLabel>
              <Select
                id="customerType"
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
                required
              >
                <option>Premium Customer</option>
                <option>Regular Customer</option>
                <option>New Customer</option>
                <option>VIP Customer</option>
              </Select>
            </div>

            <div>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <Input
                id="email"
                value={email}
                disabled 
                readOnly
              />
            </div>

            <div>
              <FormLabel htmlFor="regDate">Registration Date*</FormLabel>
              <Input
                id="regDate"
                value={regDate}
                disabled 
                readOnly
              />
            </div>
          </div>
        </div>

        {/* 5. TOMBOL AKSI (YANG HILANG) */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-3">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}