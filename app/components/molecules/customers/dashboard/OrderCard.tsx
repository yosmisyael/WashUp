"use client"

import {
  HelpCircle,
  Check,
  CircleDashed,
  Eye
} from "lucide-react";

export default function CurrentOrderStatusCard() {
  return (
    <div className="w-full max-w-full bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800 mb-5 sm:mb-12 border-b border-gray-300/50">Current Order Status</h3>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Order #WU-2024-0156
          </h3>
          <p className="text-sm text-gray-500">
            Placed on November 1, 2024
          </p>
        </div>
        <span className="bg-blue-100 text-primary-color text-xs font-medium px-3 py-1 rounded-full">
          In Progress
        </span>
      </div>

      <div className="mt-6 bg-gray-50 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <span className="shrink-0 flex items-center justify-center w-10 h-10 primary-color rounded-full text-white">
            <HelpCircle size={20} />
          </span>
          <div>
            <h4 className="font-semibold text-gray-900">Currently Washing</h4>
            <p className="text-sm text-gray-600">
              Your white laundry is being processed
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="primary-color h-1.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Estimated completion: 2 hours
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        <li className="flex items-center gap-3">
          <span className="shrink-0 flex items-center justify-center w-6 h-6 primary-color rounded-full text-white">
            <Check size={16} />
          </span>
          <span className="text-sm font-medium text-gray-800">
            Order received and confirmed
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="shrink-0 flex items-center justify-center w-6 h-6 primary-color rounded-full text-white">
            <Check size={16} />
          </span>
          <span className="text-sm font-medium text-gray-800">
            Items picked up
          </span>
        </li>
        
        <li className="flex items-center gap-3">
          <span className="shrink-0 flex items-center justify-center w-6 h-6 text-primary-color">
            <CircleDashed size={24} className="animate-spin" />
          </span>
          <span className="text-sm font-semibold text-primary-color">
            Washing in progress
          </span>
        </li>
        
        <li className="flex items-center gap-3">
          <span className="shrink-0 flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full text-gray-400 text-xs font-bold">
            4
          </span>
          <span className="text-sm font-medium text-gray-400">
            Ready for delivery
          </span>
        </li>
      </ul>

      <div className="mt-6 border-t border-gray-100 pt-4">
        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
          <Eye size={18} className="text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">
            View Order Details
          </span>
        </button>
      </div>
    </div>
  );
}