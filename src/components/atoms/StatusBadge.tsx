// src/components/atoms/StatusBadge.tsx
import React from 'react';

// Tentukan 'props' yang akan diterima
interface BadgeProps {
  variant: 'active' | 'inactive';
}

// Buat map untuk Tailwind
const variantClasses = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-yellow-100 text-yellow-700",
};

export function StatusBadge({ variant }: BadgeProps) {
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