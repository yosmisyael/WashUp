// src/components/molecules/owners/StatCard.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode; 
  // 1. PERUBAHAN: Jadikan props ini opsional dengan '?'
  change?: string; 
  changeType?: 'positive' | 'negative';
}

const changeTypeClasses = {
  positive: "text-green-500",
  negative: "text-red-500",
};

export function StatCard({ title, value, icon, change, changeType }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        <p className="text-3xl font-bold mt-2 text-black">{value}</p>

        {/* 2. PERUBAHAN: Hanya render bagian ini JIKA 'change' & 'changeType' ada */}
        {change && changeType && (
          <span className={`text-sm ${changeTypeClasses[changeType]}`}>
            {change}
          </span>
        )}
      </div>
      {icon}
    </div>
  );
}