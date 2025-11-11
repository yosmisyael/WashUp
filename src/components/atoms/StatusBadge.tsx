// src/components/atoms/StatusBadge.tsx
import React from 'react';

// 1. TAMBAHKAN 'scheduled' (terjadwal)
interface BadgeProps {
  variant: 'active' | 'inactive' | 'scheduled';
}

// 2. BUAT MAP UNTUK TAILWIND
const variantClasses = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-yellow-100 text-yellow-700", // 'inactive' Anda sudah kuning
  scheduled: "bg-yellow-100 text-yellow-700", // Kita bisa pakai style yang sama untuk 'scheduled'
  // Jika Anda ingin 'inactive' jadi abu-abu, ganti di atas:
  // inactive: "bg-gray-100 text-gray-700", 
};

export function StatusBadge({ variant }: BadgeProps) {
  // 3. Ubah 'Inactive' menjadi 'Scheduled' jika variannya 'scheduled'
  let text = variant.charAt(0).toUpperCase() + variant.slice(1);
  if (variant === 'inactive') text = 'Inactive';
  if (variant === 'scheduled') text = 'Scheduled';

  return (
    <span 
      className={`
        px-3 py-1 
        rounded-full 
        text-xs font-medium
        ${variantClasses[variant]}
      `}
    >
      {text}
    </span>
  );
}