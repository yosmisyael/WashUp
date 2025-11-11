// src/app/(pages)/owners/discounts/page.tsx
import React from 'react';
// 1. HAPUS 'Tabs' dan 'DiscountsTable'
// 2. IMPORT KOMPONEN PEMBUNGKUS BARU KITA
import { DiscountTabsWrapper } from '@/components/organisms/owners/discounts/DiscountTabsWrapper';

export default function DiscountsPage() {
  return (
    <>
      {/* 1. Header Halaman (Tetap di Server Component) */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Discount & Voucher Management</h1>
        <p className="text-gray-600">Create discount templates and assign vouchers to customers</p>
      </div>

      {/* 2. PANGGIL SATU KOMPONEN CLIENT KITA */}
      {/* Komponen ini sekarang menangani semua logika tab dan tabel */}
      <DiscountTabsWrapper />
    </>
  );
}