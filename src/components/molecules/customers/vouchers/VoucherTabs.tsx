"use client";

interface Props {
  activeTab: "available" | "claim";
  setActiveTab: (tab: "available" | "claim") => void;
}

export default function VoucherTabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px space-x-8">
        <button
          onClick={() => setActiveTab("available")}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === "available"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          My Available Vouchers
        </button>
        <button
          onClick={() => setActiveTab("claim")}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === "claim"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          Claim New Vouchers
        </button>
      </nav>
    </div>
  );
}
