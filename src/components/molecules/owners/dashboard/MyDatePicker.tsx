// src/components/molecules/owners/dashboard/DateRangePicker.tsx
import React from 'react';

// PASTIKAN ADA KATA 'export' DI SINI
export function MyDatePicker() {
  return (
    <div className="flex items-center gap-2">
      {/* Label Teks */}
      <label 
        htmlFor="date-range" 
        className="text-sm font-medium text-gray-700 whitespace-nowrap"
      >
        Date Range:
      </label>

      {/* Komponen Dropdown Select */}
      <select 
        id="date-range" 
        defaultValue="7"
        className="
          py-2 pl-3 pr-8 /* Padding untuk teks & panah */
          rounded-lg 
          bg-white 
          shadow-sm 
          border border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          text-sm font-medium text-gray-800
        "
      >
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 90 Days</option>
        <option value="all">All Time</option>
      </select>
    </div>
  );
}