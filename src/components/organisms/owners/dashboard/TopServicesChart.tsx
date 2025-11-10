// src/components/organisms/owners/dashboard/TopServicesChart.tsx
import { ChartCard } from '@/components/molecules/owners/dashboard/ChartCard';

export function TopServicesChart() {
  return (
    // Gunakan molekul 'ChartCard' baru kita
    <ChartCard title="Top Performing Services">
      <div className="flex items-center justify-center h-full text-gray-400">
        <p>Top Services Chart Placeholder</p>
      </div>
    </ChartCard>
  );
}