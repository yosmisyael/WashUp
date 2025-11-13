"use client";

import {OrderNavigator} from "@/components/molecules/customers/new-orders/OrderNavigator";
import {useRouter} from "next/navigation";
import Button from "@/components/atoms/Button";
import {useOrderContext} from "@/app/customers/new-order/order-context";
import {ORDER_TYPE} from "../../../../prisma/generated/enums";

const TruckIcon = ({className = "w-5 h-5"}: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`text-blue-600 ${className}`}
    >
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-1.5-1.5V10.5a1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5H8.25zm6-9a3 3 0 100-6 3 3 0 000 6z"/>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M18.75 9H7.5M18.75 9a3 3 0 013 3v7.5a3 3 0 01-3 3H7.5M18.75 9a3 3 0 003-3v-1.5a3 3 0 00-3-3H7.5M18.75 9a3 3 0 003-3v-1.5a3 3 0 00-3-3H7.5"/>
    </svg>
);

const CartIcon = ({className = "w-12 h-12"}: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`text-gray-400 ${className}`}
    >
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 3h19.5M2.25 3v18M2.25 3h19.5v18M2.25 3h19.5v18H2.25V3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 18.75h10.5V15.75h-10.5v3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12.75h10.5V9.75h-10.5v3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h10.5V3.75h-10.5v3z"/>
    </svg>
);

export default function NewOrderPage() {
    const { orderType, setOrderType } = useOrderContext();
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Create New Order</h1>
                        <p className="text-sm text-gray-600 mt-1">Step 1 of 3: Choose Order Type</p>
                    </div>

                    <OrderNavigator currentPosition={1}/>
                </div>

                {/* Main Content - Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Order Type & Locations */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-base font-medium text-gray-900">Order Type & Locations</h2>
                        </div>

                        <div className="p-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-3">Select Order Type</h3>

                            <div className="space-y-3">
                                {/* Delivery Service Option */}
                                <div
                                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                                        orderType === "delivery"
                                            ? "border-blue-500 bg-blue-50"
                                            : "border-gray-200 hover:border-gray-300"
                                    }`}
                                    onClick={() => setOrderType("delivery")}
                                >
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="radio"
                                                name="order-type"
                                                checked={orderType === "delivery"}
                                                onChange={() => setOrderType(ORDER_TYPE.delivery)}
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="ml-3 flex items-start">
                                            <div className="mr-3">
                                                <TruckIcon className="w-5 h-5"/>
                                            </div>
                                            <div>
                                                <label className="font-medium text-gray-900 block">Delivery
                                                    Service</label>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    We pick up and deliver
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Continue Button */}
                            <div className="mt-4 flex justify-center">
                                <Button onClick={() => {
                                    router.push('/customers/new-order/services');
                                }}>
                                    Choose services
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-base font-medium text-gray-900">Order Summary</h2>
                        </div>

                        <div className="p-4 text-center">
                            <CartIcon className="w-12 h-12 mx-auto mb-3"/>
                            <p className="text-gray-500 text-sm mb-1">No items added yet</p>
                            <p className="text-xs text-gray-400">
                                Add services to see your order summary
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}