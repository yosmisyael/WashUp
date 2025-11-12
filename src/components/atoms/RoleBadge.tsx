// src/components/atoms/RoleBadge.tsx
import React from 'react';

// Tentukan 'props' yang akan diterima
interface BadgeProps {
  variant: 'owner' | 'employee';
}

// Buat map untuk Tailwind (sesuai desain)
const variantClasses = {
  owner: "bg-purple-100 text-purple-700",
  employee: "bg-blue-100 text-blue-700",
};

export function RoleBadge({ variant }: BadgeProps) {
  const text = variant.charAt(0).toUpperCase() + variant.slice(1);
  
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

// Jika Anda menggunakan 'export default', ubah di atas dan tambahkan:
// export default RoleBadge;