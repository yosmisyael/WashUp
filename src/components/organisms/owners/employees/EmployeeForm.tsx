// src/components/organisms/owners/employees/EmployeeForm.tsx
"use client"; // Wajib karena ini adalah formulir interaktif

import React, { useState } from 'react';

// 1. IMPORT SEMUA ATOM KITA
// 'Input' & 'PasswordInput' adalah named export
import { Input, PasswordInput } from '@/components/atoms/Input'; 
// 'Select' & 'Button' adalah default export
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';

// 2. Helper component (bisa Anda pindah ke atom jika mau)
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

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-black">{children}</h3>
);

// --- KOMPONEN ORGANISME UTAMA ---
export function EmployeeForm() {
  // State untuk formulir
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ fullName, role, startDate, password });
  };

  return (
    // Kartu putih pembungkus
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 text-black">
          
          {/* Bagian Employee Information */}
          <div className="space-y-4">
            <SectionTitle>Employee Information</SectionTitle>
            
            {/* Full Name */}
            <div>
              <FormLabel htmlFor="fullName">Full Name*</FormLabel>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter employee's full name"
                required
              />
            </div>
            
            {/* Role */}
            <div>
              <FormLabel htmlFor="role">Role*</FormLabel>
              <Select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>Select a role</option>
                <option value="employee">Employee</option>
                <option value="owner">Owner</option>
              </Select>
            </div>

            {/* Start Date */}
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
          </div>

          {/* Bagian Account Setup */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <SectionTitle>Account Setup</SectionTitle>

            {/* Password */}
            <div>
              <FormLabel htmlFor="password">Set Initial Password*</FormLabel>
              {/* Kita gunakan PasswordInput (yang sudah punya ikon mata) */}
              <PasswordInput
                id="password"
                // 'icon' adalah prop wajib di PasswordInput, kita kirim placeholder kosong
                icon={<></>} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password"
                required
              />
              <FormHelperText>
                Password must be at least 8 characters long
              </FormHelperText>
            </div>
            
            {/* Confirm Password */}
            <div>
              <FormLabel htmlFor="confirmPassword">Confirm Password*</FormLabel>
              <PasswordInput
                id="confirmPassword"
                icon={<></>}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm the password"
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
            Save Employee
          </Button>
        </div>
      </form>
    </div>
  );
}