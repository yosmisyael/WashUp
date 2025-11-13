"use client";

import { useState } from "react";
import VoucherHeader from "@/components/molecules/customers/vouchers/VoucherHeader";
import VoucherTabs from "@/components/molecules/customers/vouchers/VoucherTabs";
import ProTipsBox from "@/components/molecules/customers/vouchers/ProTipsBox";
import VoucherCard from "@/components/atoms/customers/vouchers/VoucherCard";
import {
  availableVouchers,
  claimableVouchers,
} from "@/lib/vouchers-customer";

export default function VouchersPage() {
  const [activeTab, setActiveTab] = useState<"available" | "claim">("available");

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <VoucherHeader />
      <VoucherTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6 space-y-4">
        {activeTab === "available" &&
          availableVouchers.map((voucher, index) => (
            <VoucherCard key={index} voucher={voucher} />
          ))}

        {activeTab === "claim" && (
          <>
            {claimableVouchers.map((voucher, index) => (
              <VoucherCard key={index} voucher={voucher} />
            ))}
            <ProTipsBox />
          </>
        )}
      </div>
    </div>
  );
}
