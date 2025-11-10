// src/components/molecules/Navbar.tsx (Baru, setelah di-refactor)
"use client";

import { Bell, Menu } from "lucide-react";
import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext"; // Konteks ini bisa dipakai global

// 1. Definisikan props yang ingin kita terima
interface NavbarProps {
  userName: string;
  userRole: string;
  userAvatar: string;
  // notifCount?: number; // (Opsional, jika ingin dinamis)
}

// 2. Terima props tersebut di dalam fungsi
export default function Navbar({
  userName,
  userRole,
  userAvatar,
}: NavbarProps) {
  const { toggleSidebar } = useSidebar();

  return (
// BARU:
<header className="flex items-center justify-between bg-white shadow-sm px-6 h-20 z-50 relative">
          {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-md hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 bg-blue-500 text-white text-[10px] rounded-full px-1">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          {/* 4. Gunakan props 'userAvatar' */}
          <Image
            width={36}
            height={36}
            src={userAvatar} // <-- DIUBAH
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            {/* 5. Gunakan props 'userName' */}
            <p className="text-sm font-medium text-gray-800 leading-tight">
              {userName}
            </p>
            {/* 6. Gunakan props 'userRole' */}
            <p className="text-xs text-gray-500">
              {userRole}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}