"use client";

import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  badge?: number;
}

export default function IconButton({ icon, onClick, badge }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full hover:bg-gray-100 transition-all"
    >
      {icon}
      {badge && badge > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] bg-blue-600 text-white rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
