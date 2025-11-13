"use client";
import { Lock, EyeOff, Key } from "lucide-react";

export default function SecuritySettingsForm() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">Security Settings</h3>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="currentPassword"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <EyeOff
              size={16}
              className="absolute right-3 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="newPassword"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <Key
              size={16}
              className="absolute right-3 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
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
          <Lock size={16} />
          Update Password
        </button>
      </div>
    </section>
  );
}
