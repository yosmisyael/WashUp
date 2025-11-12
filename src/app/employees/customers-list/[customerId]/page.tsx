import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, RefreshCw, Lock, Upload } from 'lucide-react';

// --- Komponen Halaman Utama ---
export default function CustomerDetailPage({ params }: { params: { customerId: string } }) {
  const customerId = params.customerId;
  
  // Nanti, ganti data mockup ini dengan data asli dari Prisma
  const mockCustomer = {
    id: customerId,
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/160', // Placeholder untuk foto profil
    phone: '3456787656',
    email: 'johndone@gmail.com',
    type: 'Premium Customer',
    registrationDate: 'Jan 15 2025',
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <Link
            href="/employees/customers-list"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-2"
          >
            <ArrowLeft size={16} />
            Back to Customer List
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Details Customer</h1>
          <p className="text-sm text-gray-500">
            Customer details on your customer list. If you want to change or upgrade the data, just replace it.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 text-right">
          <RefreshCw size={14} />
          <span>
            Last updated <br /> 2 minutes ago
          </span>
        </div>
      </div>

      {/* Konten Form (Kartu Putih) */}
      <div className="bg-white p-8 rounded-lg shadow-sm mt-6">
        
        {/* === BAGIAN ATAS: FOTO & FORM SEJAJAR === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Foto Profil */}
          <div className="md:col-span-1 flex flex-col items-center">
            <Image
              src={mockCustomer.avatar}
              alt="Customer Avatar"
              width={160}
              height={160}
              className="rounded-full object-cover"
            />
          </div>

          {/* Kolom Kanan: Form Atas */}
          <div className="md:col-span-2 space-y-6">
            {/* Fullname */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                Fullname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                defaultValue={mockCustomer.name}
                placeholder="e.g., John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Enter the customer's name if you want to change it.</p>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                defaultValue={mockCustomer.phone}
                placeholder="e.g., 3456787656"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Enter the customer's phone if you want to change it.</p>
            </div>

            {/* Customer Type (Dropdown) */}
            <div>
              <label htmlFor="customerType" className="block text-sm font-medium text-gray-700 mb-1">
                Customer Type <span className="text-red-500">*</span>
              </label>
              <select
                id="customerType"
                defaultValue={mockCustomer.type}
                className="
                  w-full p-3 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  bg-white text-left
                "
              >
                {/* ^^^
                  |||
                  INI PERUBAHANNYA: Saya tambahkan "text-left" di atas
                */}
                <option>Select customer type</option>
                <option value="Premium Customer">Premium Customer</option>
                <option value="Regular Customer">Regular Customer</option>
                <option value="New Customer">New Customer</option>
                <option value="VIP Customer">VIP Customer</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Select the type of customer you want.</p>
            </div>
          </div>
        </div>

        {/* === BAGIAN BAWAH: FORM PANJANG (FULL-WIDTH) === */}
        <div className="space-y-6 mt-6">
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="email"
                id="email"
                defaultValue={mockCustomer.email}
                placeholder="e.g., johndone@gmail.com"
                className="grow w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-500">hours</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Email the customer if they want to change it according to their request.</p>
          </div>

          {/* Registration Date */}
          <div>
            <label htmlFor="regDate" className="block text-sm font-medium text-gray-700 mb-1">
              Registration Date <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="regDate"
                defaultValue={mockCustomer.registrationDate}
                placeholder="e.g., Jan 15 2025"
                className="grow w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-500">hours</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">If you want to change customer registration according to what the customer wants.</p>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 mt-8">
          <button className="px-6 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium">
            <Lock size={16} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}