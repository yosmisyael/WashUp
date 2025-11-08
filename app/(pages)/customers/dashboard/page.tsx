"use client";

import HeroBanner from "@/app/components/molecules/customers/dashboard/HeroBanner";
import OrderCard from "@/app/components/molecules/customers/dashboard/OrderCard";
import QuickActionCard from "@/app/components/molecules/customers/dashboard/QuickActionCard";
import RecentOrderCard from "@/app/components/molecules/customers/dashboard/RecentOrderCard";

export default function CustomerDashboardPage() {
  return (
    <section className="space-y-6">
      {/* Hero Section */}
      <HeroBanner />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <OrderCard />
        </div>

        {/* Right Section */}
        <aside className="space-y-4">
          <QuickActionCard />
          <RecentOrderCard />
        </aside>
      </div>
    </section>
  );
}
