"use client";

import { Info } from "lucide-react";

export default function ProTipsBox() {
  return (
    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
      <div className="flex items-start gap-3">
        <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-md font-semibold text-blue-800">Pro Tips</h4>
          <ul className="list-disc list-inside text-sm text-blue-700 mt-2 space-y-1">
            <li>{`Claimed vouchers will appear in your "Available Vouchers" tab.`}</li>
            <li>Check back regularly for new promotional offers.</li>
            <li>Some vouchers may have usage limits or specific terms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
