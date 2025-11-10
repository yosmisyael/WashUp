// src/components/organisms/owners/dashboard/StatisticsGrid.tsx
import { StatCard } from '@/components/molecules/owners/StatCard';
import { StatIcon } from '@/components/atoms/owners/dashboard/StatIcon';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export function StatisticsGrid() {
  // Komponen ini bertanggung jawab untuk menyusun 4 kartu statistik.
  // Data ini masih statis, nanti bisa diambil dari database.
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
      <StatCard
        title="Total Revenue"
        value="$24,580"
        change="+12.5%"
        changeType="positive"
        icon={ 
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
  );
}