// src/components/atoms/owners/dashboard/StatIcon.tsx
import React from 'react';

// Tentukan props-nya
interface StatIconProps {
  children: React.ReactNode;
  // Kita buat agar bisa menerima warna
  color: 'green' | 'blue' | 'red' | 'purple'; 
}

// Buat map untuk Tailwind
const colorClasses = {
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
  red: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
};

export function StatIcon({ children, color }: StatIconProps) {
  return (
    // Atom ini bertanggung jawab atas styling background/padding/warna ikon
    <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
      {children}
    </div>
  );
}