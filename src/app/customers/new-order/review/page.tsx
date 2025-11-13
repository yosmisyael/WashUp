"use client";

import React from 'react';
import {MapPin, List, MessageSquare, Check, ChevronDown, CreditCard} from 'lucide-react';
import {OrderNavigator} from "@/components/molecules/customers/new-orders/OrderNavigator";
import {useOrderContext} from "@/app/customers/new-order/order-context";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";

const TShirtIcon = ({className = "w-6 h-6"}: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className={`text-gray-500 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 13.5l3-3m0 0l3 3m-3-3v12.75M17.25 8.25H6.75a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25z"/>
    </svg>
);

const DryCleanIcon = ({className = "w-6 h-6"}: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className={`text-gray-500 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01.01-.01z"/>
    </svg>
);

const PressOnlyIcon = ({className = "w-6 h-6"}: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className={`text-gray-500 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
    </svg>
);

const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({
                                                                                 htmlFor,
                                                                                 children,
                                                                             }) => (
    <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-900 mb-2"
    >
        {children}
    </label>
);

const orderItems = [
    {
        name: "Wash & Fold",
        description: "Regular clothes",
        price: "Rp6.000",
        unit: "/pcs",
        icon: <TShirtIcon className="w-5 h-5"/>
    },
    {
        name: "Dry Cleaning",
        description: "Business shirts",
        price: "Rp5.000",
        unit: "/pcs",
        icon: <DryCleanIcon className="w-5 h-5"/>
    },
    {
        name: "Press Only",
        description: "Formal wear",
        price: "Rp2.000",
        unit: "/pcs",
        icon: <PressOnlyIcon className="w-5 h-5"/>
    }
];

export default function ReviewPage() {
    const { selectedServices } = useOrderContext();

    const totalPrice = selectedServices.reduce((total, service) => {
        return total + service.price;
    }, 0);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header dan Progress Bar */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
                        <p className="text-sm text-gray-600 mt-1">Step 3 of 3: Review & Confirm</p>
                    </div>

                    {/* Progress Steps */}
                    <OrderNavigator currentPosition={3} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 space-y-6">

                        {/* 1. Kartu Lokasi */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-5 h-5 text-gray-600"/>
                                <h2 className="text-lg font-semibold text-gray-900">Pickup & Delivery Locations</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Lokasi Pickup */}
                                <div>
                                    <FormLabel htmlFor="pickupLocation">Pickup Location*</FormLabel>
                                    <Select
                                        id="pickupLocation"
                                        name="pickupLocation"
                                        required
                                    >
                                        <option value="employee" disabled>Select pickup location</option>
                                    </Select>
                                </div>
                                {/* Lokasi Pengiriman */}
                                <div>
                                    <FormLabel htmlFor="deliveryLocation">Pickup Location*</FormLabel>
                                    <Select
                                        id="deliveryLocation"
                                        name="deliveryLocation"
                                        required
                                    >
                                        <option value="employee" disabled>Select delivery location</option>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* 2. Kartu Item Pesanan */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <List className="w-5 h-5 text-gray-600"/>
                                    <h2 className="text-lg font-semibold text-gray-900">Order Items</h2>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {selectedServices.map((item) => (
                                    <div key={item.name} className="flex items-center justify-between p-6">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                                                <TShirtIcon />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.descriptions}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-medium text-gray-900">Rp{item.price}/</span>
                                            <span className="text-sm text-gray-500">{item.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Kartu Instruksi Khusus */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="w-5 h-5 text-gray-600"/>
                                <h2 className="text-lg font-semibold text-gray-900">Special Instructions</h2>
                            </div>
                            <textarea
                                rows={4}
                                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Add any special instructions for your order (optional)..."
                            ></textarea>
                        </div>

                    </div>

                    {/* Kolom Kanan: Ringkasan Pesanan (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-8">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Apply Voucher */}
                                <div>
                                    <label htmlFor="voucher" className="block text-sm font-medium text-gray-700 mb-1">
                                        Apply Voucher
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="voucher"
                                            className="w-full appearance-none border border-gray-300 rounded-md p-2 pl-3 pr-8 text-sm bg-white focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option>Select a voucher</option>
                                            {/* Tambahkan opsi voucher di sini */}
                                        </select>
                                        <ChevronDown
                                            className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                    </div>
                                </div>

                                {/* Rincian Harga */}
                                <div className="space-y-2 text-sm">
                                    { selectedServices.length > 0 ? selectedServices.map((item) => (
                                        <div key={item.id} className="flex justify-between text-gray-600 font-medium">
                                            <span>{item.name}</span>
                                            <span>Rp{item.price}/{item.unit}</span>
                                        </div>
                                    )) : (
                                        <div className="flex justify-between text-gray-600 font-medium">
                                            <span>No service added yet</span>
                                            <span>0</span>
                                        </div>
                                    )}
                                </div>

                                {/* Total */}
                                <div className="border-t border-gray-200 pt-4 mt-4">
                                    <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>Rp{totalPrice}</span>
                                    </div>
                                </div>
                                {/* Tombol Konfirmasi */}
                                <Button>
                                    Confirm Order
                                </Button>

                                {/* Syarat & Ketentuan */}
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    By confirming, you agree to our <a href="#"
                                                                       className="font-medium text-blue-600 hover:underline">terms
                                    of service</a> and <a href="#"
                                                          className="font-medium text-blue-600 hover:underline">privacy
                                    policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}