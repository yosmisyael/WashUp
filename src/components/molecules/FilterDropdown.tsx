// src/components/molecules/FilterDropdown.tsx
"use client"; 

import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onFilterChange?: (selectedOption: string) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  defaultValue,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0] || '');

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onFilterChange) {
      onFilterChange(option);
    }
  };

  return (
    <div className="relative inline-block text-left">
      
      {/* Tombol yang terlihat */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 
          p-3 /* Padding yang sudah kita perbaiki */
          pr-8 
          rounded-lg 
          border border-gray-300 
          bg-white 
          text-sm font-medium text-gray-700 
          hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-blue-500
          
          whitespace-nowrap /* <-- PERUBAHAN DI SINI: Mencegah teks terbungkus */
        "
      >
        <Filter className="w-4 h-4 text-gray-500" />
        <span>{selected}</span>
        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3" />
      </button>

      {/* Menu Dropdown (Tetap sama) */}
      {isOpen && (
        <div 
          className="absolute z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;