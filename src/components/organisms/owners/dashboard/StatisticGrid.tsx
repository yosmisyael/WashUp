import {StatCard} from '@/components/molecules/owners/StatCard';
import {StatIcon} from '@/components/atoms/owners/dashboard/StatIcon';
import {DollarSign, ShoppingCart, Users, TrendingUp} from 'lucide-react';
import {getDashboardStats} from "@/lib/owner-dashboard-repository";

export async function StatisticsGrid() {
    const data = await getDashboardStats();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
            <StatCard
                title="Total Revenue"
                value={data.totalRevenue ? `${data.totalRevenue.value}` : '0'}
                change="+12.5%"
                changeType="positive"
                icon={
                    <StatIcon color="green">
                        <DollarSign className="w-5 h-5"/>
                    </StatIcon>
                }
            />

            <StatCard
                title="Total Orders"
                value={data.totalOrders ? `${data.totalOrders.value}` : '0'}
                change="+8.2%"
                changeType="positive"
                icon={
                    <StatIcon color="blue">
                        <ShoppingCart className="w-5 h-5"/>
                    </StatIcon>
                }
            />

            <StatCard
                title="New Customers"
                value={data.newCustomers ? `${data.newCustomers.value}` : '0'}
                change="-3.1%"
                changeType="negative"
                icon={
                    <StatIcon color="red">
                        <Users className="w-5 h-5"/>
                    </StatIcon>
                }
            />
            <StatCard
                title="Avg. Order Value"
                value={data.avgOrderValue ? `${data.avgOrderValue.value}` : '0'}
                change="+4.8%"
                changeType="positive"
                icon={
                    <StatIcon color="purple">
                        <TrendingUp className="w-5 h-5"/>
                    </StatIcon>
                }
            />
        </div>
    );
}