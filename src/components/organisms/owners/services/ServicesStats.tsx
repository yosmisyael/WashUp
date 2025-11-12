import {StatCard} from '@/components/molecules/owners/StatCard';
import {StatIcon} from '@/components/atoms/owners/dashboard/StatIcon';
import {ListTree, DollarSign, Clock} from 'lucide-react';

export type ServicesStatsProps = {
    totalServices: number
    averagePrice: number,
    averageCompletionTime: number,
}

export function ServicesStats({serviceStats}: { serviceStats: ServicesStatsProps }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
                title="Total Services"
                value={serviceStats.totalServices.toString() ?? '0'}
                icon={
                    <StatIcon color="blue">
                        <ListTree className="w-5 h-5"/>
                    </StatIcon>
                }
            />

            <StatCard
                title="Avg. Price"
                value={serviceStats.averagePrice ? `Rp${serviceStats.averagePrice.toString()}` : '0'}
                icon={
                    <StatIcon color="red">
                        <DollarSign className="w-5 h-5"/>
                    </StatIcon>
                }
            />

            <StatCard
                title="Avg. Completion"
                value={serviceStats.averageCompletionTime ? serviceStats.averageCompletionTime.toString() : '0'}
                icon={
                    <StatIcon color="purple">
                        <Clock className="w-5 h-5"/>
                    </StatIcon>
                }
            />
        </div>
    );
}