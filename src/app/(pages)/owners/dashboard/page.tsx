// src/app/(pages)/owners/dashboard/page.tsx
import React from 'react';

// IMPORT KOMPONEN
import { StatCard } from '@/components/molecules/owners/dashboard/StatCard';
import { StatIcon } from '@/components/atoms/owners/dashboard/StatIcon'; // <-- ATOM BARU KITA
import { RevenueChart } from '@/components/organisms/owners/dashboard/RevenueChart';
import { TopServicesChart } from '@/components/organisms/owners/dashboard/TopServicesChart';
import { NewVsRepeatingChart } from '@/components/organisms/owners/dashboard/NewVsRepeatingChart';
import { ActiveOrderFunnel } from '@/components/organisms/owners/dashboard/ActiveOrderFunnel';

// Import icons
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export default function OwnerDashboardPage() {
  return (
    <>
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6 text-black">
        <div>
          <h1 className="text-3xl font-bold">Executive Dashboard</h1>
          <p className="text-gray-600">Monitor your business performance and key metrics</p>
        </div>
        <div>
          <span className="text-gray-700">Date Range: Last 7 Days</span>
        </div>
      </div>

      {/* Grid Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
        <StatCard
          title="Total Revenue"
          value="$24,580"
          change="+12.5%"
          changeType="positive"
          icon={ // <-- Gunakan atom 'StatIcon' baru kita
            <StatIcon color="green">
              <DollarSign className="w-5 h-5" />
            </StatIcon>
          }
        />
        
        <StatCard
          title="Total Orders"
          value="1,247"
          change="+8.2%"
          changeType="positive"
          icon={
            <StatIcon color="blue">
              <ShoppingCart className="w-5 h-5" />
            </StatIcon>
          }
        />

        <StatCard
          title="New Customers"
          value="156"
          change="-3.1%"
          changeType="negative"
          icon={
            <StatIcon color="red">
              <Users className="w-5 h-5" />
            </StatIcon>
          }
        />

        <StatCard
          title="Avg. Order Value"
          value="$19.72"
          change="+4.8%"
          changeType="positive"
          icon={
            <StatIcon color="purple">
              <TrendingUp className="w-5 h-5" />
            </StatIcon>
          }
        />
      </div>

      {/* Grid Chart */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
        <RevenueChart />
        <TopServicesChart />
        <NewVsRepeatingChart />
        <ActiveOrderFunnel />
      </div>
    </>
  );
}