// src/components/molecules/owners/HintCard.tsx
import React, { ReactNode } from 'react';
import { Lightbulb } from 'lucide-react'; 

interface HintCardProps {
  title: string; // <-- 1. BUAT JUDUL JADI PROP
  children: ReactNode;
}

export const HintCard: React.FC<HintCardProps> = ({ title, children }) => {
  return (
    <div 
      className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg" 
      role="alert"
    >
      <div className="flex items-center">
        <Lightbulb className="w-5 h-5 text-blue-700 mr-3 flex-shrink-0" />
        {/* 2. GUNAKAN PROP JUDUL DI SINI */}
        <h3 className="font-semibold text-blue-800">
          {title}
        </h3>
      </div>
      
      <div className="mt-2 ml-8 text-sm text-blue-700">
        {children}
      </div>
    </div>
  );
};

export default HintCard;