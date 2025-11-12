// src/components/atoms/Badge.tsx
import React from 'react';

const variants = {
  info: 'bg-blue-100 text-blue-800',
  // tambahkan varian lain jika perlu
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export const Badge = ({ children, variant = 'info' }: BadgeProps) => {
  return (
    <span className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
};