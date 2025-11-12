"use client"; // PENTING: Untuk state tab

import React, { useState } from 'react';
import { Percent, DollarSign, Home, Info } from 'lucide-react';

// --- Tipe Data Contoh ---
type Voucher = {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  type: 'Percentage' | 'Value';
  typeBg: string;
  typeColor: string;
  usesRemaining: number;
  validUntil: string;
};

// --- Data Contoh (Mock Data) ---
const availableVouchers: Voucher[] = [
  {
    icon: <Percent size={20} />,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Grand Opening Discount',
    type: 'Percentage',
    typeBg: 'bg-blue-100',
    typeColor: 'text-blue-700',
    usesRemaining: 3,
    validUntil: 'Dec 31, 2024',
  },
  {
    icon: <DollarSign size={20} />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'First Time Customer',
    type: 'Value',
    typeBg: 'bg-green-100',
    typeColor: 'text-green-700',
    usesRemaining: 1,
    validUntil: 'Jan 15, 2025',
  },
  {
    icon: <Home size={20} />,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Weekend Special',
    type: 'Percentage',
    typeBg: 'bg-orange-100',
    typeColor: 'text-orange-700',
    usesRemaining: 2,
    validUntil: 'Nov 30, 2024',
  },
];

// Nanti Anda bisa isi 'claimableVouchers' dengan data yang berbeda
const claimableVouchers: Voucher[] = availableVouchers; 


// --- Komponen Internal: Voucher Card ---
const VoucherCard = ({ voucher }: { voucher: Voucher }) => (
  <div className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${voucher.iconBg}`}>
        <span className={voucher.iconColor}>{voucher.icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{voucher.title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded ${voucher.typeBg} ${voucher.typeColor}`}>
          {voucher.type}
        </span>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div>
        <p className="text-xs text-gray-500">Uses Remaining</p>
        <p className="text-lg font-bold text-gray-900">{voucher.usesRemaining}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Valid Until</p>
        <p className="text-lg font-bold text-gray-900">{voucher.validUntil}</p>
      </div>
      <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700">
        Use Voucher
      </button>
    </div>
  </div>
);


// --- Komponen Halaman Utama ---
export default function VouchersPage() {
  const [activeTab, setActiveTab] = useState<'available' | 'claim'>('available');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Voucher Wallet</h1>
        <p className="text-sm text-gray-500">Manage your discount vouchers and claim new offers</p>
      </div>

      {/* Navigasi Tab */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab('available')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'available'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            My Available Vouchers
          </button>
          <button
            onClick={() => setActiveTab('claim')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'claim'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            Claim New Vouchers
          </button>
        </nav>
      </div>

      {/* Konten Tab */}
      <div className="mt-6">
        <div className="space-y-4">
          
          {/* Konten Tab "Available" */}
          {activeTab === 'available' && availableVouchers.map((voucher, index) => (
            <VoucherCard key={index} voucher={voucher} />
          ))}
          
          {/* Konten Tab "Claim" */}
          {activeTab === 'claim' && (
            <>
              {claimableVouchers.map((voucher, index) => (
                <VoucherCard key={index} voucher={voucher} />
              ))}
              
              {/* Pro Tips Box (hanya muncul di tab "Claim") */}
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-md font-semibold text-blue-800">Pro Tips</h4>
                    <ul className="list-disc list-inside text-sm text-blue-700 mt-2 space-y-1">
                      <li>Claimed vouchers will appear in your "Available Vouchers" tab.</li>
                      <li>Check back regularly for new promotional offers.</li>
                      <li>Some vouchers may have usage limits or specific terms.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}