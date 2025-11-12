"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "ghost";
    onClick?: () => void;
    className?: string;
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   onClick,
                                   className,
                               }: ButtonProps) {
    const base = "inline-flex items-center gap-2 rounded-md font-medium px-4 py-2 transition";
    const styles =
        variant === "primary"
            ? "primary-color text-white shadow-sm"
            : "bg-white text-gray-700 border border-gray-200";

    return (
        <button onClick={onClick} className={clsx(base, styles, className)}>
            {children}
        </button>
    );
}