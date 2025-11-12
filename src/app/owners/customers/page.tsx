import React from 'react';

import {CustomerFilterCard} from '@/components/organisms/owners/customers/CustomerFilterCard';
import {CustomerDirectory, CustomerDirectoryProps} from '@/components/organisms/owners/customers/CustomerDirectory';
import {getAllCustomers} from "@/lib/customer-repository";

export default async function CustomersPage() {
    const customerData = await getAllCustomers() as CustomerDirectoryProps[];

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-black">Customer List</h1>
                    <p className="text-gray-600">Manage and view all customer information</p>
                </div>

                <div className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg">
                    Total Customers: 1,247
                </div>
            </div>

            <CustomerFilterCard/>

            <CustomerDirectory data={customerData}/>
        </>
    );
}