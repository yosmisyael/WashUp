// src/app/(pages)/owners/services/page.tsx
import React from 'react';
import { ServicesHeader } from '@/components/molecules/owners/services/ServicesHeader';
import { ServicesStats } from '@/components/organisms/owners/services/ServicesStats';
import { ServicesTable } from '@/components/organisms/owners/services/ServicesTable'; 

export default function ServicesPage() {
  return (
    <>
      {/* 1. Header Halaman */}
      <ServicesHeader />

      {/* 2. Grid Statistik */}
      <div className="mb-8"> {/* Memberi jarak antara Stats dan Table */}
        <ServicesStats />
      </div>

      {/* 3. Tabel Layanan (Sudah jadi!) */}
      <ServicesTable /> {/* <-- 2. PANGGIL KOMPONEN */}
    </>
  );
}