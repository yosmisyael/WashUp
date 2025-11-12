// src/components/organisms/owners/services/ServicesHeader.tsx
import { Button } from "@/components/atoms/Button";
import { SearchBar } from '@/components/molecules/SearchBar'; 
import { Plus } from 'lucide-react';

export function ServicesHeader() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
      {/* Bagian Kiri: Judul */}
      <div>
        <h1 className="text-3xl font-bold text-black">Laundry Service Management</h1>
        <p className="text-gray-600">Manage your available laundry services and pricing</p>
      </div>

      {/* Bagian Kanan: Search & Tombol */}
      <div className="flex items-center gap-4 h-11">
        <SearchBar placeholder="Search services..." />
        
        {/* --- PERBAIKAN DI SINI --- */}
        {/* 1. Ikon dipindahkan ke prop 'icon'.
          2. 'children' sekarang HANYA berisi teks.
        */}
        <Button
          className="
            h-full             
            px-4               
            text-sm            
            whitespace-nowrap  
          "
          icon={<Plus className="w-4 h-4" />} // <-- 1. IKON SEKARANG ADA DI PROP 'icon'
        >
          Add New Service {/* <-- 2. CHILDREN SEKARANG HANYA TEKS */}
        </Button>
      </div>
    </div>
  );
}