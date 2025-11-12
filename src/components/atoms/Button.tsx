// src/components/atoms/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// --- PERUBAHAN 1: Tambahkan 'export' di sini ---
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}: ButtonProps) => {

  const baseStyles: string =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer border border-transparent';

  const sizeStyles: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-sm',
  };

  const variantStyles: Record<
    'primary' | 'secondary' | 'outline' | 'ghost',
    string
  > = {
    primary:
      'bg-primary text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary:
      'bg-white text-cyan-700 border border-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
    outline:
      'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {icon && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

// --- PERUBAHAN 2: Hapus baris 'export default Button;' dari sini ---
// (Tidak ada apa-apa di akhir file)