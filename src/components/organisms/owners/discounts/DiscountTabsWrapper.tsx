// src/components/organisms/owners/discounts/DiscountTabsWrapper.tsx
"use client"; // <-- 1. JADIKAN INI CLIENT COMPONENT

import React, { useState } from 'react';
import Tabs from '@/components/molecules/Tabs';
import { DiscountsTable } from '@/components/organisms/owners/discounts/DiscountsTable';
// Nanti kita juga akan import <AssignVouchersTable /> di sini

const tabNames = ["Discount Templates", "Assign Vouchers"];

export function DiscountTabsWrapper() {
  // 2. PINDAHKAN LOGIKA 'useState' KE SINI
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <div>
      {/* 3. PINDAHKAN TABS KE SINI */}
      <div className="mb-6">
        <Tabs 
          tabNames={tabNames}
          onTabChange={(tab) => {
            setActiveTab(tab);
            console.log("Selected tab:", tab);
          }}
        />
      </div>

      {/* 4. PINDAHKAN LOGIKA TAMPILAN KE SINI */}
      <div>
        {activeTab === "Discount Templates" && (
          <DiscountsTable />
        )}
        {activeTab === "Assign Vouchers" && (
          // Nanti kita tampilkan komponen <AssignVouchersTable /> di sini
          <div className="bg-white p-6 shadow rounded-lg text-black">
            <p>Assign Vouchers content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}