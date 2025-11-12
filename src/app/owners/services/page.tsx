import React from 'react';
import {ServicesHeader} from '@/components/molecules/owners/services/ServicesHeader';
import {ServicesStats, ServicesStatsProps} from '@/components/organisms/owners/services/ServicesStats';
import {ServicesTable, ServicesTableProps} from '@/components/organisms/owners/services/ServicesTable';
import {getAllServices, getServiceStatistics} from "@/lib/services";

export default async function ServicesPage() {
    const serviceStats = await getServiceStatistics() as ServicesStatsProps;
    const serviceData = await getAllServices() as ServicesTableProps[];
    return (
        <>
            <ServicesHeader />

            <div className="mb-8">
                <ServicesStats serviceStats={serviceStats}/>
            </div>

            <ServicesTable serviceTableProp={serviceData}/>
        </>
    );
}