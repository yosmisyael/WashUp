"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function NavItem({ href, icon, label }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
        active
          ? "primary-color text-white"
          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      )}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
