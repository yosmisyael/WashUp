import React from 'react';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import Select from '@/components/atoms/Select';
import {PaginationControl} from '@/components/molecules/PaginationControl';
import {Upload, Eye} from 'lucide-react';
import {formatDate} from "@/lib/utils";
import {InitialsAvatar} from "@/components/atoms/InitialsAvatar";

export type CustomerDirectoryProps = {
    id: number;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
}

export function CustomerDirectory({data}: { data: CustomerDirectoryProps[] }) {
    return (
        <div className="bg-white p-6 shadow rounded-lg text-black">

            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold">Customer Directory</h2>
                <div className="flex items-center gap-4">
                    <Button
                        variant="secondary"
                        className="py-2.5 px-4 text-sm"
                        icon={<Upload className="w-4 h-4"/>}
                    >
                        Export
                    </Button>
                    <div className="w-32">
                        <Select id="perPage" defaultValue="25">
                            <option value="25">25 per page</option>
                            <option value="50">50 per page</option>
                            <option value="100">100 per page</option>
                        </Select>
                    </div>
                </div>
            </div>

            <table className="w-full table-auto">
                <thead className="text-left text-sm text-gray-500">
                <tr className="border-b border-gray-200">
                    {/* ... (th lainnya tetap sama) ... */}
                    <th className="py-3 px-4">Customer ID</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Registration Date</th>
                    <th className="py-3 px-4">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {data.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">

                        <td className="p-4 font-medium">#{customer.id}</td>

                        <td className="p-4">
                            <div className="flex items-center gap-3">
                                <InitialsAvatar name={customer.name}/>
                                <div>
                                    <span className="font-medium">{customer.name}</span>
                                </div>
                            </div>
                        </td>
                        <td className="p-4">{customer.email}</td>
                        <td className="p-4">{customer.phone}</td>
                        <td className="p-4">{formatDate(customer.createdAt)}</td>

                        <td className="p-4">
                            <Link href={`/owners/customers/${customer.id}`}>
                                <Button
                                    className="py-2 px-3 text-sm"
                                    icon={<Eye className="w-4 h-4"/>}
                                >
                                    View Details
                                </Button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="mt-6">
                <PaginationControl/>
            </div>
        </div>
    );
}