"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Avatar from "@/app/components/atoms/customers/dashboard/Avatar";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg transition-all"
      >
        <Avatar src="https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg" size={32} />
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-sm font-medium text-gray-800">Sarah Johnson</span>
          <span className="text-xs text-gray-500">Customer</span>
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl border shadow-lg overflow-hidden z-50">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </button>
          <hr className="my-1" />
          <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
