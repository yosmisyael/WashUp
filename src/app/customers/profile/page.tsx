"use client"; // PENTING: Untuk state & toggle

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Edit,
  Save,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Download,
  Shield,
  Trash2,
} from 'lucide-react';

// --- Komponen Toggle Switch ---
// Dibuat kustom agar persis seperti di Figma
const ToggleSwitch = ({ enabled, setEnabled }: { enabled: boolean; setEnabled: (enabled: boolean) => void }) => {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`
        relative inline-flex items-center h-6 w-11 rounded-full transition-colors
        ${enabled ? 'bg-blue-600' : 'bg-gray-300'}
      `}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className={`
          inline-block w-4 h-4 transform bg-white rounded-full transition-transform
          ${enabled ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  );
};


// --- Komponen Halaman Utama ---
export default function ProfilePage() {
  // State untuk visibility password
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // State untuk toggles
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsUpdates, setSmsUpdates] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-sm text-gray-500">Manage your profile information and security settings</p>
      </div>

      {/* Kartu Konten Utama (Putih) */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
        
        {/* Bagian Header Profil (Avatar, Nama, Status) */}
        <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
          <Image
            src="https://via.placeholder.com/80" // Ganti dengan foto profil user
            alt="Sarah Johnson"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sarah Johnson</h2>
            <p className="text-sm text-gray-500">Customer since March 2023</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <CheckCircle size={14} />
                Active Account
              </span>
              <span className="text-sm text-gray-600">
                Total Orders: <span className="font-medium text-gray-900">47</span>
              </span>
            </div>
          </div>
        </div>

        {/* Grid Utama (Form Kiri, Info Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          
          {/* === KOLOM KIRI (Form) === */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Form: Personal Information */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                <button className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <Edit size={14} /> Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Sarah"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Johnson"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="sarah.johnson@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-blue-500">
                    <CheckCircle size={16} /> {/* Ganti ikon jika perlu */}
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </form>

            {/* Form: Security Settings */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Security Settings</h3>
              
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    id="currentPassword"
                    placeholder="Enter current password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                  >
                    {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNew ? 'text' : 'password'}
                      id="newPassword"
                      placeholder="Enter new password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long.</p>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      id="confirmPassword"
                      placeholder="Confirm new password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm"
                >
                  <Lock size={16} />
                  Update Password
                </button>
              </div>
            </form>
          </div>

          {/* === KOLOM KANAN (Info) === */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Account Overview */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Overview</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Orders</span>
                  <span className="font-medium text-gray-900">47</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Orders</span>
                  <span className="font-medium text-gray-900">3</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Saved Locations</span>
                  <span className="font-medium text-gray-900">2</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Available Vouchers</span>
                  <span className="font-medium text-green-600">5</span>
                </li>
              </ul>
            </div>

            {/* Preferences */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <label htmlFor="emailToggle" className="text-sm font-medium text-gray-700">Email Notifications</label>
                  <ToggleSwitch enabled={emailNotifications} setEnabled={setEmailNotifications} />
                </li>
                <li className="flex justify-between items-center">
                  <label htmlFor="smsToggle" className="text-sm font-medium text-gray-700">SMS Updates</label>
                  <ToggleSwitch enabled={smsUpdates} setEnabled={setSmsUpdates} />
                </li>
                <li className="flex justify-between items-center">
                  <label htmlFor="marketingToggle" className="text-sm font-medium text-gray-700">Marketing Emails</label>
                  <ToggleSwitch enabled={marketingEmails} setEnabled={setMarketingEmails} />
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <ul className="space-y-3">
                <li>
                  <button className="flex items-center gap-2 text-sm text-blue-600 font-medium w-full text-left">
                    <Download size={16} /> Download Data
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-2 text-sm text-blue-600 font-medium w-full text-left">
                    <Shield size={16} /> Privacy Settings
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-2 text-sm text-red-600 font-medium w-full text-left mt-2 pt-3 border-t border-gray-200">
                    <Trash2 size={16} /> Delete Account
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}