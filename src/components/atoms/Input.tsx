// src/components/atoms/Input.tsx
import React, {ReactNode, useState} from "react";
import {Eye, EyeOff} from "lucide-react";

// ----------------------------------------------------------------------
// 1. KOMPONEN 'INPUT' GENERIK (BARU)
// Ini adalah atom input sederhana yang kita butuhkan untuk formulir.
// ----------------------------------------------------------------------
type GenericInputProps = {
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<GenericInputProps> = ({
    className = '',
    ...props
}) => {
    return (
        <input
            className={`w-full rounded-lg border border-gray-200 bg-gray-100 p-3 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 ${className}`}
            {...props}
        />
    );
};

// ----------------------------------------------------------------------
// 2. KODE LAMA ANDA (InputWithIcon) - Tetap dipertahankan
// ----------------------------------------------------------------------
type InputWithIconProps = {
    icon: ReactNode;
    id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputWithIcon: React.FC<InputWithIconProps> = ({
                                                             icon,
                                                             id,
                                                             className = '',
                                                             ...props
                                                           }) => {
    return (
        <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </span>
            <input
                id={id}
                className={`w-full rounded-lg border border-gray-200 bg-gray-100 p-3 pl-10 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 ${className}`}
                {...props}
            />
        </div>
    );
};

// ----------------------------------------------------------------------
// 3. KODE LAMA ANDA (PasswordInput) - Tetap dipertahankan
// ----------------------------------------------------------------------
export const PasswordInput: React.FC<InputWithIconProps> = ({ // Menggunakan InputWithIconProps
                                                             icon,
                                                             id,
                                                             className = '',
                                                             ...props
                                                           }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </span>
            <input
                id={id}
                type={showPassword ? 'text' : 'password'}
                className={`w-full rounded-lg border border-gray-200 bg-gray-100 p-3 pl-10 pr-10 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 ${className}`}
                {...props}
            />
            <button
                type="button" // Prevent form submission
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    );
};