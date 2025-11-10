// src/components/organisms/owners/services/ServicesStats.tsx
import { StatCard } from '@/components/molecules/owners/StatCard';
import { StatIcon } from '@/components/atoms/owners/dashboard/StatIcon';
// Anda mungkin perlu: bun add lucide-react
import { ListTree, Activity, DollarSign, Clock } from 'lucide-react';

export function ServicesStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Services"
        value="12"
        icon={ 
          <StatIcon color="blue">
            <ListTree className="w-5 h-5" />
          </StatIcon>
        }
        // Perhatikan: Kita tidak mengirim 'change' atau 'changeType'
      />
      
      <StatCard
        title="Active Services"
        value="10"
        icon={
          <StatIcon color="green">
            <Activity className="w-5 h-5" />
          </StatIcon>
        }
      />

      <StatCard
        title="Avg. Price"
        value="$8.50"
        icon={
          <StatIcon color="red"> {/* Desain menggunakan icon oranye, kita ganti ke 'red' atau 'purple' */}
            <DollarSign className="w-5 h-5" />
          </StatIcon>
        }
      />

      <StatCard
        title="Avg. Completion"
        value="2.5h"
        icon={
          <StatIcon color="purple">
            <Clock className="w-5 h-5" />
          </StatIcon>
        }
      />
    </div>
  );
}