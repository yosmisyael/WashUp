// src/components/atoms/Select.tsx
'use client';
import React from 'react';

// Tipe untuk setiap opsi di dalam select
interface Option {
  value: string;
  label: string;
}

// Tipe untuk props komponen Select
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: Option[];
  placeholder?: string;
  label?: string; // Opsional jika Anda membutuhkannya nanti
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, placeholder, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <select
          id={id}
          name={id}
          ref={ref}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          // Set nilai default ke string kosong jika placeholder ada
          defaultValue={placeholder ? "" : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';