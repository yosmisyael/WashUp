// src/components/organisms/owners/discounts/DiscountForm.tsx
"use client"; // Wajib karena ini adalah formulir interaktif

import React, { useState } from 'react';

// Import semua atom kita yang bisa dipakai ulang
import { Input } from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';

// Helper component untuk Label (bisa Anda pindah ke atoms jika mau)
const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({
  htmlFor,
  children,
}) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-medium text-gray-900 mb-2"
  >
    {children}
  </label>
);

export function DiscountForm() {
  // State untuk formulir
  const [templateName, setTemplateName] = useState('');
  const [discountType, setDiscountType] = useState('percentage');
  const [value, setValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ templateName, discountType, value, startDate, endDate });
    // Logika untuk mengirim ke database akan ada di sini
  };

  return (
    // Kartu putih pembungkus
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 text-black">
          
          {/* Template Name */}
          <div>
            <FormLabel htmlFor="templateName">Template Name*</FormLabel>
            <Input
              id="templateName"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="e.g., Summer Special"
              required
            />
          </div>

          {/* Grid 2 kolom untuk Tipe dan Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel htmlFor="discountType">Discount Type*</FormLabel>
              <Select
                id="discountType"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                required
              >
                <option value="percentage">Percentage (%)</option>
                <option value="value">Value ($)</option>
              </Select>
            </div>
            <div>
              <FormLabel htmlFor="value">Value*</FormLabel>
              <Input
                id="value"
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={discountType === 'percentage' ? '20' : '5.00'}
                required
              />
            </div>
          </div>

          {/* Grid 2 kolom untuk Tanggal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel htmlFor="startDate">Start Date*</FormLabel>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div>
              <FormLabel htmlFor="endDate">End Date*</FormLabel>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-3">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Template
          </Button>
        </div>
      </form>
    </div>
  );
}