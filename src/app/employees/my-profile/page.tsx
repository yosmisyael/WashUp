"use client"; // PENTING: File ini harus client component untuk useState

import React, { useState } from 'react';
import { Save, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function MyProfilePage() {
  // State untuk visibility password
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-sm text-gray-500">Manage your profile information and security settings</p>
      </div>

      {/* Card 1: My Profile */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">My Profile</h3>
        <p className="text-sm text-gray-500 mb-6">Update your personal information and contact details</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                defaultValue="Sarah Johnson"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900           
                placeholder:text-gray-400" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                defaultValue="john.smith@washup.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900           
                placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                defaultValue="+1 (555) 123-4567"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900           
                placeholder:text-gray-400" 
              />
            </div>
          </div>
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm"
            >
              <Save size={16} />
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>

      {/* Card 2: Update Password */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">Update Password</h3>
        <p className="text-sm text-gray-500 mb-6">Change your password to keep your account secure</p>
        
        <form className="space-y-6">
          {/* Current Password */}
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1 ">
              Current Password*
            </label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                id="currentPassword"
                placeholder="Enter your current password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-gray-900           
                placeholder:text-gray-400"
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

          {/* New Password Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password*
              </label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
                  id="newPassword"
                  placeholder="Enter new password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-gray-900           
                placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                >
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters required.</p>
            </div>

            {/* Confirm New Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password*
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-gray-900           
                placeholder:text-gray-400"
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

          {/* Password Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password Requirements:</label>
            <ul className="space-y-1 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                At least 8 characters long
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Contains uppercase and lowercase letters
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Contains at least one number
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Contains at least one special character
              </li>
            </ul>
          </div>

          {/* Tombol Update */}
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
    </div>
  );
}