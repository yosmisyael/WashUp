"use client";

import { Clock, CreditCard, StarIcon } from "lucide-react";

export default function QuickActionCard() {
  const actions = [
    {
      icon: <Clock size={18} />,
      label: "Track Status",
      description: "Set a convenient time",
      color: "#2957A0",
    },
    {
      icon: <CreditCard size={18} />,
      label: "Payment Methods",
      description: "Manage your cards",
    },
    {
      icon: <StarIcon size={18} />,
      label: "Rate Services",
      description: "Sent Your Feedback",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h3>
      <div className="flex flex-col space-y-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full flex flex-row items-center gap-4 bg-white shadow-sm rounded-xl p-4 hover:bg-gray-50 transition-all text-left"
          >
            <span className="text-gray-900 p-3 bg-gray-200/50 rounded-2xl">{action.icon}</span>
            <span className="flex flex-col">
              <span className="text-base font-semibold text-gray-900">
                {action.label}
              </span>
              <span className="text-sm text-gray-500">
                {action.description}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
