"use client";

import React, { useState } from 'react';
import Tabs from '@/components/molecules/Tabs';
import {DiscountDateProp, DiscountsTable} from '@/components/organisms/owners/discounts/DiscountsTable';

const tabNames = ["Discount Templates", "Assign Vouchers"];

export function DiscountTabsWrapper({ discountData }: { discountData: DiscountDateProp[] }) {
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <div>
      <div className="mb-6">
        <Tabs 
          tabNames={tabNames}
          onTabChange={(tab) => {
            setActiveTab(tab);
            console.log("Selected tab:", tab);
          }}
        />
      </div>

      <div>
        {activeTab === "Discount Templates" && (
          <DiscountsTable data={discountData} />
        )}
        {activeTab === "Assign Vouchers" && (
          <div className="bg-white p-6 shadow rounded-lg text-black">
            <p>Assign Vouchers content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}