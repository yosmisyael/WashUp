"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/molecules/customers/Sidebar";
import Navbar from "@/components/molecules/customers/Navbar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-layout overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Wrapper */}
        <div className="flex flex-col flex-1 min-h-screen transition-all duration-300 lg:ml-64">
          {/* Navbar */}
          <div className="fixed top-0 right-0 left-0 lg:left-64 z-30">
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto pt-24 px-6 pb-6">
            <div className="min-h-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
