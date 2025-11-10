// src/components/molecules/owners/dashboard/StatCard.tsx
import React from 'react';

// Tentukan 'props' yang akan diterima
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  // UBAH INI: 'children' menjadi 'icon'
  icon: React.ReactNode; 
}

// Tentukan warna berdasarkan 'changeType'
const changeTypeClasses = {
  positive: "text-green-500",
  negative: "text-red-500",
};

export function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <span className={`text-sm ${changeTypeClasses[changeType]}`}>
          {change}
        </span>
      </div>
      {/* 'icon' sekarang adalah Atom StatIcon yang kita kirim */}
      {icon}
    </div>
  );
}