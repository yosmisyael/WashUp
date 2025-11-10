// src/components/molecules/owners/dashboard/ChartCard.tsx
import React from 'react';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    // Ini adalah 'cangkang' putih yang bisa dipakai ulang
    <div className="bg-white p-6 rounded-lg shadow-md h-96">
      <h3 className="font-semibold mb-4">{title}</h3>
      {/* 'children' di sini adalah chart itu sendiri */}
      <div className="h-[calc(100%-2rem)]"> {/* Memberi ruang sisa untuk chart */}
        {children}
      </div>
    </div>
  );
}