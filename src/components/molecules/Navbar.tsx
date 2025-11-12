"use client";

import {Bell, Menu} from "lucide-react";
import Image from "next/image";
import {useSidebar} from "@/context/SidebarContext";

interface NavbarProps {
    userName: string;
    userRole: string;
    userAvatar: string;
}

export default function Navbar({
                                   userName,
                                   userRole,
                                   userAvatar,
                               }: NavbarProps) {
    const {toggleSidebar} = useSidebar();

    return (
        <header className="flex items-center justify-between bg-white shadow-sm px-6 h-20 z-50 relative">
            {/* Left Section */}
            <div className="flex items-center gap-3">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
                >
                    <Menu className="w-5 h-5"/>
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-5">
                <button className="relative p-2 rounded-md hover:bg-gray-100 transition">
                    <Bell className="w-5 h-5 text-gray-600"/>
                    <span className="absolute -top-0.5 -right-0.5 bg-blue-500 text-white text-[10px] rounded-full px-1">
            2
          </span>
                </button>

                <div className="flex items-center gap-3">
                    <Image
                        width={36}
                        height={36}
                        src={userAvatar}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-gray-800 leading-tight">
                            {userName}
                        </p>
                        <p className="text-xs text-gray-500">
                            {userRole}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}