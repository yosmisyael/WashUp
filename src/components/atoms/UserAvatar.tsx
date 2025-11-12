import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export const UserAvatar: React.FC<AvatarProps> = ({ src, alt, size = 32 }) => {

  return (
    <div 
      className="relative rounded-full overflow-hidden"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};