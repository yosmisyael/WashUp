// src/components/atoms/Textarea.tsx
import React, { TextareaHTMLAttributes } from 'react';

// Terima semua props standar <textarea> dan tambahkan 'className'
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  
  // Style dasar yang konsisten dengan input/button kita
  const baseStyles =
    'w-full rounded-lg shadow-sm border border-gray-300 py-2.5 px-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:bg-gray-50';

  // Gabungkan style dasar dengan style kustom (jika ada)
  const combinedStyles = `${baseStyles} ${className}`;

  return (
    <textarea 
      className={combinedStyles} 
      rows={4} // Default 4 baris, bisa di-override
      {...props} 
    />
  );
};

export default Textarea;