// src/components/molecules/owners/OwnerSidebar.tsx
"use client"; 

import Link from 'next/link';
import Logo from '@/components/atoms/Logo';
import { LayoutDashboard, Users, ShoppingBag, Tag, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {deleteSession} from "@/lib/session";

const navItems = [
  { name: 'Dashboard', href: '/owners/dashboard', icon: LayoutDashboard },
  { name: 'Employees', href: '/owners/employees', icon: Users },
  { name: 'Services', href: '/owners/services', icon: ShoppingBag },
  { name: 'Discounts', href: '/owners/discounts', icon: Tag },
  { name: 'Customers', href: '/owners/customers', icon: Users },
];

export type ownerSidebarProp = {
    logoutAction: () => void;
}

export function OwnerSidebar() {
  const pathname = usePathname(); 

  return (
    <div className="hidden lg:flex h-screen w-64 flex-col bg-white border-r border-gray-200">
      
      {/* PERUBAHAN DI SINI:
        1. Menghapus 'justify-center'
        2. Menambahkan 'px-4' agar rata kiri (sejajar dengan navigasi)
      */}
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
          <p className="text-xs text-gray-300">Owner Portal</p>
        </div>
      </div>

      {/* Bagian Navigasi (Tetap sama) */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-4 py-2.5 rounded-lg transition-colors
                ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-600 hover:bg-gray-100' 
                }
              `}
            >
              <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-6 border-t border-gray-200">
        <button onClick={deleteSession} className="flex items-center w-full px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <LogOut className="w-5 h-5 mr-3 text-gray-500" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}