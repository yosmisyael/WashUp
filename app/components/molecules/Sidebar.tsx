"use client";

import SidebarMenu from "@/app/components/molecules/customers/SidebarMenu";
import { LogOut } from "lucide-react";
import { useSidebar } from "@/app/context/SidebarContext";
import Logo from "@/app/components/atoms/Logo";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar utama */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r shadow-sm flex flex-col transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-6 py-[0.4rem] border-b primary-color">
          <div className="bg-white text-white font-bold text-xl p-1.5 rounded-md">
            <Logo size={1.5} />
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold text-xl text-white">WashUp</span>
            <span className="text-sm text-white">Customer Dashboard</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <SidebarMenu />
        </div>

        {/* Sign Out */}
        <div className="border-t p-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors text-sm w-full">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay untuk layar kecil */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
}
