// src/components/organisms/owners/services/ServiceForm.tsx
"use client"; 

import React, { useState } from 'react';

// 1. IMPORT ATOM (Gunakan named import)
import { Input } from '@/components/atoms/Input'; 
import Textarea from '@/components/atoms/TextArea';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
// 2. HAPUS 'HintCard' DARI SINI
// import HintCard from '@/components/molecules/owners/HintCard';

// (FormLabel dan FormHelperText tetap sama)
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
const FormHelperText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-1.5 text-xs text-gray-500">{children}</p>
);

export function ServiceForm() {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState(''); 
  const [completionTime, setCompletionTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ serviceName, description, price, unit, completionTime });
  };

  // 3. JADIKAN KOMPONEN INI SEBAGAI KARTU PUTIH
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 text-black">
          
          {/* Service Name */}
          <div>
            <FormLabel htmlFor="serviceName">Service Name*</FormLabel>
            <Input
              id="serviceName"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="e.g., Premium Wash & Fold"
              required
            />
            <FormHelperText>
              Enter a clear, descriptive name for this service
            </FormHelperText>
          </div>

          {/* Price */}
          <div>
            <FormLabel htmlFor="price">Price*</FormLabel>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="$ 0.00"
              required
            />
            <FormHelperText>
              Set the price per unit for this service
            </FormHelperText>
          </div>

          {/* Unit Type */}
          <div>
            <FormLabel htmlFor="unit">Unit Type*</FormLabel>
            <Select
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            >
              <option value="" disabled>Select unit type</option>
              <option value="kg">Kg</option>
              <option value="pcs">Pcs (Satuan)</option>
            </Select>
            <FormHelperText>
              Choose how this service will be measured and charged
            </FormHelperText>
          </div>

          {/* Estimated Completion Time */}
          <div>
            <FormLabel htmlFor="completionTime">Estimated Completion Time*</FormLabel>
            <Input
              id="completionTime"
              value={completionTime}
              onChange={(e) => setCompletionTime(e.target.value)}
              placeholder="24"
              required
            />
            <FormHelperText>
              How long does this service typically take to complete?
            </FormHelperText>
          </div>

          {/* Service Description */}
          <div>
            <FormLabel htmlFor="serviceDesc">Service Description</FormLabel>
            <Textarea
              id="serviceDesc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide a detailed description of this service, including what's included..."
              rows={5}
            />
            <FormHelperText>
              Optional: Add detailed information about this service
            </FormHelperText>
          </div>
        </div>

        {/* Tombol (Masih di dalam kartu) */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-3">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Service
          </Button>
        </div>
      </form>
    </div>
  );
}