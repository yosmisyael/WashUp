"use client";

import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function Avatar({ src, alt = "User Avatar", size = 36 }: AvatarProps) {
  return (
    <div className="relative rounded-full overflow-hidden border border-gray-200">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
