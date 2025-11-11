// src/components/molecules/Tabs.tsx
"use client"; // Wajib karena kita menggunakan 'useState'

import React, { useState } from 'react';

// Tentukan props yang akan diterima
interface TabsProps {
  // Array berisi nama-nama tab
  tabNames: string[];
  // Fungsi opsional untuk memberi tahu komponen induk tab mana yang diklik
  onTabChange?: (selectedTab: string) => void; 
}

export const Tabs: React.FC<TabsProps> = ({ tabNames, onTabChange }) => {
  // Gunakan 'useState' untuk melacak tab yang sedang aktif
  // Set 'default' aktif ke tab pertama di array
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

  return (
    // Container utama dengan garis 'border-b' abu-abu
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        {tabNames.map((tabName) => {
          const isActive = tabName === activeTab;
          
          return (
            <button
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              className={`
                py-3 px-1
                border-b-2
                font-medium text-sm
                transition-colors
                ${
                  isActive
                    ? 'border-primary text-primary' // Style jika AKTIF
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' // Style jika TIDAK AKTIF
                }
              `}
            >
              {tabName}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;