"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Truck,
  Users,
  CircleUser,
  LogOut,
  Bell,
  Package, // Untuk logo
} from "lucide-react";
import React from "react";
import Logo from "@/components/atoms/Logo";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

// Data untuk link navigasi
const navLinks: NavLink[] = [
  { href: "/employee/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { href: "/employee/order-management", label: "Order Management", icon: <ClipboardList size={18} /> },
  { href: "/employee/logistic-schedule", label: "Logistic Schedule", icon: <Truck size={18} /> },
  { href: "/employee/customers-list", label: "Customers List", icon: <Users size={18} /> },
  { href: "/employee/my-profile", label: "My Profile", icon: <CircleUser size={18} /> },
];

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const pathname = usePathname();
  

  return (
    <div className="flex h-screen w-full bg-gray-50">
      
      {/* Sidebar (Latar Putih) */}
      <aside className="w-64 shrink-0 bg-white text-gray-800 flex flex-col border-r border-gray-200">
        
        {/* === INI BAGIAN YANG DIUBAH === */}
        {/* Logo Area (Latar Biru - SESUAI PERMINTAAN) */}
       <div className="flex items-center h-20 bg-[#2957A0] text-white px-4">
              
              {/* PERUBAHAN DI SINI:
                1. Menambahkan 'div' baru sebagai wrapper
                2. Memberi wrapper itu 'bg-white', 'rounded-md', dan 'p-1' (padding)
              */}
              <div className="bg-white p-1 rounded-md">
                <Logo size={2.5} /> {/* Ukuran logo disesuaikan sedikit */}
              </div>
      
              <div className="ml-3">
                <span className="text-xl font-bold">WashUp</span>
                <p className="text-xs text-gray-300">Employee Portal</p>
              </div>
            </div>
        {/* === AKHIR BAGIAN YANG DIUBAH === */}

        
        {/* Navigasi (Latar Putih) */}
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-blue-600 text-white font-semibold shadow-md" // Aktif: Latar biru, Teks putih
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" // Tidak aktif: Teks abu-abu
                  }
                `}
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        
        {/* Sign Out (Latar Putih) */}
        <div className="px-4 py-6 border-t border-gray-200">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 w-full">
            <LogOut size={18} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Employee Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Sarah Johnson</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-gray-900 relative">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <Image
                src="https://via.placeholder.com/40"
                alt="Sarah Johnson"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
            </div>
          </div>
        </header>

        {/* Konten Halaman */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}