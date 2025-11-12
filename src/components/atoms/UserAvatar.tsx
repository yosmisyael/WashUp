// src/components/atoms/UserAvatar.tsx
import React from 'react';
import Image from 'next/image'; // Menggunakan komponen Image dari Next.js

interface AvatarProps {
  src: string; // URL gambar
  alt: string; // Teks alternatif
  size?: number; // Ukuran dalam pixel (opsional)
}

export const UserAvatar: React.FC<AvatarProps> = ({ src, alt, size = 32 }) => {
  // Default size adalah 32px (h-8 w-8) jika tidak ditentukan
  
  return (
    <div 
      className="relative rounded-full overflow-hidden"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill" // Mengisi 'div' pembungkus
        objectFit="cover" // Memastikan gambar menutupi, tidak gepeng
      />
    </div>
  );
};

// Jika Anda lebih suka export default:
// export default UserAvatar;