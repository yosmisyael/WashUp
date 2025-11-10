// src/components/molecules/PaginationControl.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationControl() {
  // TODO: Logika paginasi (props, onClick, dll) akan ditambahkan nanti
  return (
    <div className="flex justify-between items-center text-sm">
      {/* Kiri: Menampilkan info */}
      <p className="text-gray-600">
        Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> services
      </p>

      {/* Kanan: Tombol Navigasi (PERBAIKAN DI SINI) */}
      <nav className="flex items-center gap-2">
        {/* Tombol Previous */}
        <button 
          className="
            flex items-center gap-2 
            px-4 py-2 
            rounded-lg 
            border border-gray-300 
            bg-white 
            text-gray-600 
            hover:bg-gray-50
            disabled:opacity-50
          "
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>
        
        {/* Nomor Halaman */}
        <div className="flex items-center gap-1">
          {/* Halaman Aktif */}
          <button 
            className="
              w-9 h-9 
              rounded-lg 
              bg-primary text-white {/* <-- Diubah ke biru tua (bg-primary) */}
              font-medium
            "
          >
            1
          </button>
          {/* Halaman Tidak Aktif */}
          <button 
            className="
              w-9 h-9 
              rounded-lg 
              border border-gray-300 {/* <-- Ditambahkan border */}
              bg-white 
              text-gray-600 
              hover:bg-gray-50
            "
          >
            2
          </button>
          <button 
            className="
              w-9 h-9 
              rounded-lg 
              border border-gray-300 {/* <-- Ditambahkan border */}
              bg-white 
              text-gray-600 
              hover:bg-gray-50
            "
          >
            3
          </button>
        </div>

        {/* Tombol Next */}
        <button 
          className="
            flex items-center gap-2 
            px-4 py-2 
            rounded-lg 
            border border-gray-300 
            bg-white 
            text-gray-600 
            hover:bg-gray-50
            disabled:opacity-50
          "
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}