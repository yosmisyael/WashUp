import React from 'react';

import { MyDatePicker } from '@/components/molecules/owners/dashboard/MyDatePicker';
import { StatisticsGrid } from '@/components/organisms/owners/dashboard/StatisticGrid';
import { RevenueChart } from '@/components/organisms/owners/dashboard/RevenueChart';
import { TopServicesChart } from '@/components/organisms/owners/dashboard/TopServicesChart';
import { NewVsRepeatingChart } from '@/components/organisms/owners/dashboard/NewVsRepeatingChart';
import { ActiveOrderFunnel } from '@/components/organisms/owners/dashboard/ActiveOrderFunnel';

export default function OwnerDashboardPage() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 text-black">
        <div>
          <h1 className="text-3xl font-bold">Executive Dashboard</h1>
          <p className="text-gray-600">Monitor your business performance and key metrics</p>
        </div>
        <div>
          <MyDatePicker /> 
        </div>
      </div>

      <StatisticsGrid />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
        <RevenueChart />
        <TopServicesChart />
        <NewVsRepeatingChart />
        <ActiveOrderFunnel />
      </div>
    </>
  );
}