// src/components/organisms/owners/dashboard/ActiveOrderFunnel.tsx
import { ChartCard } from '@/components/molecules/owners/dashboard/ChartCard';

export function ActiveOrderFunnel() {
  return (
    // Gunakan molekul 'ChartCard' baru kita
    <ChartCard title="Active Order Funnel">
      <div className="flex items-center justify-center h-full text-gray-400">
        <p>Active Order Funnel Placeholder</p>
      </div>
    </ChartCard>
  );
}