// src/components/atoms/Select.tsx
import React, { SelectHTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react'; // Pastikan Anda punya 'lucide-react'

// Terima semua props <select> + 'children' (untuk <option>)
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  wrapperClassName?: string; // Untuk styling div pembungkus
  children: ReactNode; // Ini akan berisi <option>...</option>
};

const Select: React.FC<SelectProps> = ({ 
  className = '', 
  wrapperClassName = '',
  children, 
  ...props 
}) => {
  
  // Style untuk elemen <select>
  const selectStyles =
    'w-full appearance-none rounded-lg shadow-sm border border-gray-300 py-2.5 pl-4 pr-8 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:bg-gray-50';

  return (
    // 1. Kita butuh wrapper 'div' untuk memposisikan panah kustom
    <div className={`relative w-full ${wrapperClassName}`}>
      <select 
        className={`${selectStyles} ${className}`} 
        {...props}
      >
        {children}
      </select>
      
      {/* 2. Ini adalah panah kustom kita */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default Select;