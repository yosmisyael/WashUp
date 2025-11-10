// src/components/molecules/SearchBar.tsx
"use client";
import { Search } from 'lucide-react';

export function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-lg 
          bg-white 
          shadow-sm 
          border border-gray-300 
          py-2.5 pl-10 pr-4 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          text-sm text-gray-900
        "
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <Search className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}