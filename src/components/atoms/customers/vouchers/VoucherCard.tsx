"use client";

import React from "react";
import { Voucher } from "@/lib/vouchers-customer";

const VoucherCard = ({ voucher }: { voucher: Voucher }) => {
  const Icon = voucher.icon; // ambil komponen icon dari data

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${voucher.iconBg}`}>
          <Icon size={20} className={voucher.iconColor} /> {/* ✅ render icon */}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{voucher.title}</h3>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded ${voucher.typeBg} ${voucher.typeColor}`}
          >
            {voucher.type}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div>
          <p className="text-xs text-gray-500">Uses Remaining</p>
          <p className="text-lg font-bold text-gray-900">{voucher.usesRemaining}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Valid Until</p>
          <p className="text-lg font-bold text-gray-900">{voucher.validUntil}</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-all">
          Use Voucher
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;
