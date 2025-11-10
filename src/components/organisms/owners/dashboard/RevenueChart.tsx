// src/components/organisms/owners/dashboard/RevenueChart.tsx
import { ChartCard } from '@/components/molecules/owners/dashboard/ChartCard';

export function RevenueChart() {
  return (
    // Gunakan molekul 'ChartCard' baru kita
    <ChartCard title="Revenue Over Time">
      <div className="flex items-center justify-center h-full text-gray-400">
        {/* Nanti komponen chart akan diletakkan di sini */}
        <p>Revenue Chart Placeholder</p>
      </div>
    </ChartCard>
  );
}