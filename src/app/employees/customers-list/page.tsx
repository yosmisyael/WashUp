import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    Filter,
    RefreshCw,
    ChevronLeft,
    ChevronRight,
    Upload,
    ChevronDown,
} from 'lucide-react';
import {PaginationControl} from "@/components/molecules/PaginationControl";

type Customer = {
    id: string;
    name: string;
    avatar: string;
    type: 'Premium Customer' | 'Regular Customer' | 'New Customer' | 'VIP Customer';
    email: string;
    phone: string;
    registrationDate: string;
};

const mockCustomers: Customer[] = [
    {
        id: '#C001',
        name: 'Sarah Johnson',
        avatar: 'https://via.placeholder.com/40',
        type: 'Premium Customer',
        email: 'sarah.johnson@email.com',
        phone: '(555) 123-4567',
        registrationDate: 'Jan 15, 2024',
    }
];

export default function CustomersListPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Customer List</h1>
                    <p className="text-sm text-gray-500">Manage and view all customer information</p>
                </div>
                <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm">
                    Total Customers: 1,247
                </button>
            </div>

            {/* Search & Filter Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">Search & Filter</h3>
                    <button className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:underline">
                        <RefreshCw size={14}/>
                        Clear Filters
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Search Input */}
                    <div className="relative md:col-span-1">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            className="
                w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                text-gray-900 placeholder:text-gray-400
              "
                        />
                    </div>
                    {/* Dropdown Registration Date */}
                    <select
                        className="border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                        <option>Registration Date</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                    </select>
                    {/* Dropdown Order Status */}
                    <select
                        className="border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                        <option>Order Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
            </div>

            {/* Customer Directory Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Directory Header */}
                <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Customer Directory</h3>
                    <div className="flex items-center gap-4">
                        <button
                            className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-blue-600">
                            <Upload size={16}/>
                            Export
                        </button>
                        <select className="border border-gray-200 rounded-lg py-2 px-4 text-sm text-gray-600">
                            <option>25 per page</option>
                            <option>50 per page</option>
                            <option>100 per page</option>
                        </select>
                    </div>
                </div>

                {/* Tabel */}
                <table className="w-full">
                    <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registration
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {mockCustomers.map((customer) => (
                        <tr key={customer.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="font-medium text-blue-600">{customer.id}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={customer.avatar}
                                        alt={customer.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">{customer.name}</p>
                                        <p className="text-sm text-gray-500">{customer.type}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.registrationDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {/* Link ini akan mengarah ke halaman detail customer */}
                                <Link
                                    href={`/employee/customers-list/${customer.id.replace("#", "")}`}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700"
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between bg-white px-6 py-3 border-t border-gray-200">
                    <PaginationControl/>
                </div>
            </div>
        </div>
    );
}