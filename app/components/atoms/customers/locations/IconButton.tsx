"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export default function IconButton({
  children,
  onClick,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx("p-4 rounded-md hover:bg-gray-100 transition", className)}
    >
      {children}
    </button>
  );
}
