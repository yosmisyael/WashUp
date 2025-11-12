// src/components/atoms/Input.tsx
'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Label dibuat opsional untuk filter pencarian
  id: string;
  helperText?: string;
  icon?: LucideIcon;
  onIconClick?: () => void;
}

// Pastikan Anda menggunakan 'export const Input'
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type = 'text', helperText, icon: Icon, onIconClick, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && ( // Hanya tampilkan label jika ada
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            id={id}
            name={id}
            ref={ref}
            // Menambahkan 'pl-10' jika ada ikon, agar ikon tidak menimpa teks
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${Icon ? 'pl-10 pr-4' : 'px-4 py-2'}`}
            {...props}
          />
          {Icon && (
            // Mengubah posisi ikon ke kiri (sesuai gambar Search)
            <div className="absolute inset-y-0 left-0 flex cursor-pointer items-center pl-3" onClick={onIconClick}>
              <Icon className="h-5 w-5 text-gray-400" />
            </div>
          )}
        </div>
        {helperText && <p className="mt-2 text-xs text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';