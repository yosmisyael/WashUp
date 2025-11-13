"use client";

import { useState } from "react";
import Link from "next/link";

// ================== ICON COMPONENTS ==================
const TShirtIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-blue-600 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17L9 13.895V7.875C9 5.764 10.764 4 12.875 4H13.125C15.236 4 17 5.764 17 7.875V13.895l-.75 3.105A3 3 0 1113.5 15v2.25a3 3 0 11-6 0V15a3 3 0 11-2.646-2.875L9.75 17z"
    />
  </svg>
);

const DryCleanIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-purple-600 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.995c-.076-.394-.291-.719-.626-.924-.335-.206-.74-.294-1.15-.222s-.78.28-.998.624l-1.125 1.875a3.375 3.375 0 106.75 0zm-6.75 0a3.375 3.375 0 106.75 0c0 .533-.167 1.067-.5 1.594-.333.526-.847.95-1.458 1.184a3.375 3.375 0 10-6.75 0c-.533 0-1.067.167-1.594.5-.526.333-.95.847-1.184 1.458a3.375 3.375 0 106.75 0z"
    />
  </svg>
);

const IronIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-orange-600 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 14.746c0-1.127.913-2.04 2.04-2.04h1.02c1.127 0 2.04.913 2.04 2.04v1.02c0 1.127-.913 2.04-2.04 2.04h-1.02c-1.127 0-2.04-.913-2.04-2.04v-1.02zM12 10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 15.75c0 1.127-.913 2.04-2.04 2.04h-1.02c-1.127 0-2.04-.913-2.04-2.04v-1.02c0-1.127.913-2.04 2.04-2.04h1.02c1.127 0 2.04.913 2.04 2.04v1.02z"
    />
  </svg>
);

const ShoeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-green-600 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 13a4 4 0 00-4-4H7m0 0L9 7.5M7 7.5L9 6M7 7.5v6"
    />
  </svg>
);

const AlterationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-pink-600 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6m0 0v6m0-6h6m-6 6h6"
    />
  </svg>
);

const ExpressIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-red-600 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 9L19 3M19 3L13 9M19 3V9M9 15l-6 6M6 21h6M9 15v6"
    />
  </svg>
);

const CartIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`text-gray-400 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h19.5v18H2.25V3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 18.75h10.5V15.75h-10.5v3zM6.75 12.75h10.5V9.75h-10.5v3zM6.75 6.75h10.5V3.75h-10.5v3z"
    />
  </svg>
);

// ================== MAIN COMPONENT ==================
export default function AddServicePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    {
      id: "wash-fold",
      name: "Wash & Fold",
      description:
        "Professional washing and folding service for everyday clothes",
      price: "$8 per Kg",
      icon: <TShirtIcon />,
      tag: "Popular",
      tagColor: "bg-green-100 text-green-800",
    },
    {
      id: "dry-cleaning",
      name: "Dry Cleaning",
      description: "Premium dry cleaning for delicate fabrics and formal wear",
      price: "$15 per pcs",
      icon: <DryCleanIcon />,
      tag: "",
      tagColor: "",
    },
    {
      id: "ironing",
      name: "Ironing",
      description: "Professional ironing service for crisp, wrinkle-free clothes",
      price: "$3 per pcs",
      icon: <IronIcon />,
      tag: "",
      tagColor: "",
    },
    {
      id: "shoe-cleaning",
      name: "Shoe Cleaning",
      description: "Deep cleaning and restoration for all types of footwear",
      price: "$12 per pair",
      icon: <ShoeIcon />,
      tag: "",
      tagColor: "",
    },
    {
      id: "alterations",
      name: "Alterations",
      description: "Professional tailoring and alterations for perfect fit",
      price: "$25 per pcs",
      icon: <AlterationIcon />,
      tag: "",
      tagColor: "",
    },
    {
      id: "express",
      name: "Express Service",
      description: "Same-day or 24-hour express laundry service",
      price: "$12 per Kg",
      icon: <ExpressIcon />,
      tag: "24h",
      tagColor: "bg-red-100 text-red-800",
    },
  ];

  const handleAddService = (serviceId: string) => {
    if (!selectedServices.includes(serviceId)) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Create New Order</h1>
            <p className="text-sm text-gray-600 mt-1">
              Step 2 of 3: Add Service
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div className="w-6 h-px bg-blue-600" />
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div className="w-6 h-px bg-gray-300" />
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-semibold">
              3
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                >
                  <div className="flex items-start">
                    <div className="mr-3">{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">
                          {service.name}
                        </h3>
                        {service.tag && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${service.tagColor}`}
                          >
                            {service.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {service.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          {service.price}
                        </span>
                        <button
                          onClick={() => handleAddService(service.id)}
                          className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-base font-medium text-gray-900">
                Order Summary
              </h2>
            </div>

            <div className="p-4 text-center">
              <CartIcon className="w-12 h-12 mx-auto mb-3" />
              <p className="text-gray-500 text-sm mb-1">No items added yet</p>
              <p className="text-xs text-gray-400">
                Add services to see your order summary
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/customers/new-order/review"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium text-sm"
          >
            Confirm Order →
          </Link>
        </div>
      </div>
    </div>
  );
}
