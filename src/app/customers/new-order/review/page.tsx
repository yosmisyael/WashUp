"use client";

import React from 'react';
// Impor ikon-ikon baru yang diperlukan dari lucide-react
import { MapPin, List, MessageSquare, Check, ChevronDown, CreditCard } from 'lucide-react';

// --- Ikon-ikon dari file services/page.tsx Anda ---
// (Disalin ke sini agar komponen ini mandiri)

// SVG Icon untuk T-Shirt (Wash & Fold)
const TShirtIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  // Mengganti warna agar sesuai dengan gambar (abu-abu)
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-gray-500 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3-3m0 0l3 3m-3-3v12.75M17.25 8.25H6.75a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25z" />
  </svg>
);

// SVG Icon untuk Dry Cleaning (Ikon Hanger/Gantungan)
const DryCleanIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  // Mengganti warna agar sesuai dengan gambar (abu-abu)
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-gray-500 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01.01-.01z" />
  </svg>
);

// SVG Icon untuk Ironing (Press Only) - Menggunakan ikon ? sesuai gambar
const PressOnlyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-gray-500 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);
// --- Akhir dari Ikon ---


// Data tiruan untuk item pesanan
const orderItems = [
  {
    name: "Wash & Fold",
    description: "Regular clothes",
    price: "Rp6.000",
    unit: "/pcs",
    icon: <TShirtIcon className="w-5 h-5" />
  },
  {
    name: "Dry Cleaning",
    description: "Business shirts",
    price: "Rp5.000",
    unit: "/pcs",
    icon: <DryCleanIcon className="w-5 h-5" />
  },
  {
    name: "Press Only",
    description: "Formal wear",
    price: "Rp2.000",
    unit: "/pcs",
    icon: <PressOnlyIcon className="w-5 h-5" />
  }
];

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header dan Progress Bar */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
            <p className="text-sm text-gray-600 mt-1">Step 3 of 3: Review & Confirm</p>
          </div>

          {/* Progress Steps (Semua aktif) */}
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div className="w-6 h-px bg-blue-600"></div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div className="w-6 h-px bg-blue-600"></div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              3
            </div>
          </div>
        </div>

        {/* Konten Utama - Dua Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Kolom Kiri: Detail Pesanan */}
          <div className="lg:col-span-2 space-y-6">

            {/* 1. Kartu Lokasi */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Pickup & Delivery Locations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Lokasi Pickup */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Pickup Location</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    123 Main Street, Apt 4B<br />
                    Downtown, NY 10001
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Today, 2:00 PM - 4:00 PM</p>
                </div>
                {/* Lokasi Pengiriman */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Delivery Location</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    456 Oak Avenue<br />
                    Midtown, NY 10002
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Tomorrow, 6:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* 2. Kartu Item Pesanan */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <List className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Order Items</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {orderItems.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-900">{item.price}</span>
                      <span className="text-sm text-gray-500">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Kartu Instruksi Khusus */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Special Instructions</h2>
              </div>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add any special instructions for your order (optional)..."
              ></textarea>
            </div>

          </div>

          {/* Kolom Kanan: Ringkasan Pesanan (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
              </div>
              
              <div className="p-6 space-y-4">
                {/* Apply Voucher */}
                <div>
                  <label htmlFor="voucher" className="block text-sm font-medium text-gray-700 mb-1">
                    Apply Voucher
                  </label>
                  <div className="relative">
                    <select
                      id="voucher"
                      className="w-full appearance-none border border-gray-300 rounded-md p-2 pl-3 pr-8 text-sm bg-white focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>Select a voucher</option>
                      {/* Tambahkan opsi voucher di sini */}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Rincian Harga */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>$38.50</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Pickup & Delivery</span>
                    <span>$4.99</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span>$3.48</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Voucher Discount</span>
                    <span>-$7.70</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>$39.27</span>
                  </div>
                </div>

                {/* Metode Pembayaran */}
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
                  <h3 className="text-base font-medium text-gray-900">Payment Method</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-blue-700" /> {/* Ikon Kartu Kredit generik */}
                      <div>
                        <span className="text-sm font-medium text-gray-900">**** **** **** 4242</span>
                        <p className="text-xs text-gray-500">Expires 12/25</p>
                      </div>
                    </div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Change
                    </button>
                  </div>
                </div>

                {/* Tombol Konfirmasi */}
                <button className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <Check size={18} />
                  Confirm Order
                </button>

                {/* Syarat & Ketentuan */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By confirming, you agree to our <a href="#" className="font-medium text-blue-600 hover:underline">terms of service</a> and <a href="#" className="font-medium text-blue-600 hover:underline">privacy policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}