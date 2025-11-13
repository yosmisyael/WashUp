import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Printer,
    User,
    Info,
    MapPin,
    List,
    AlertTriangle,
    Truck,
    FileText,
    ChevronUp,
    ChevronDown,
    Calendar,
} from 'lucide-react';
import {getOrderDetails} from "@/lib/order-repository";
import {formatDate, toTitleCase} from "@/lib/utils";
import {UpdateOrderStatusForm} from "@/components/organisms/employees/UpdateOrderStatusForm";
import {UpdatePickupForm} from "@/components/organisms/employees/UpdatePickupForm";
import {getAllEmployees} from "@/lib/employee-repository";
import {UpdateDeliverForm} from "@/components/organisms/employees/UpdateDeliverForm";
import Button from "@/components/atoms/Button";

export default async function ManageOrderPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const orderDetails = await getOrderDetails(parseInt(id));
    const isDone = orderDetails.status == 'DONE';
    const driverData = await getAllEmployees();
    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Manage Order #{id}
                    </h1>
                    <p className="text-sm text-gray-500">
                        Order Details & Status Management
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/employees/order-management"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft size={16}/>
                        Back to Queue
                    </Link>
                    <button
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700">
                        <Printer size={16}/>
                        Print Order
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Order Details */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Customer Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <User size={20} className="text-blue-600"/>
                            <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-500">Name</label>
                                <p className="text-sm font-medium text-gray-800">{toTitleCase(orderDetails.customer.name)}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Phone</label>
                                <p className="text-sm font-medium text-gray-800">{orderDetails.customer.phone}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Email</label>
                                <p className="text-sm font-medium text-gray-800">{orderDetails.customer.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Order Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Info size={20} className="text-blue-600"/>
                            <h3 className="text-lg font-semibold text-gray-900">Order Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-500">Order Type</label>
                                <p className="text-sm font-medium text-gray-800">{toTitleCase(orderDetails.order.type)}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Order Date</label>
                                <p className="text-sm font-medium text-gray-800">{orderDetails.order.date}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-xs text-gray-500">Special Notes</label>
                            <p className="text-sm text-gray-800">{orderDetails.order.notes}</p>
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin size={20} className="text-blue-600"/>
                            <h3 className="text-lg font-semibold text-gray-900">Location Information</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <ChevronUp size={16} className="text-green-500"/>
                                    <label className="text-sm font-medium text-gray-700">Pickup Address</label>
                                </div>
                                <p className="text-sm text-gray-800 p-3 bg-green-50 rounded-md">
                                    {orderDetails.location.pickup}
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <ChevronDown size={16} className="text-blue-500"/>
                                    <label className="text-sm font-medium text-gray-700">Delivery Address</label>
                                </div>
                                <p className="text-sm text-gray-800 p-3 bg-blue-50 rounded-md">
                                    {orderDetails.location.delivery}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="flex items-center gap-3 p-6">
                            <List size={20} className="text-blue-600"/>
                            <h3 className="text-lg font-semibold text-gray-900">Order Items</h3>
                        </div>
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {orderDetails.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.service}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.qty}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.unit}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.notes}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium text-right">
                                        Rp{item.price.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="p-6 bg-gray-50 text-right">
                            <span className="text-sm font-medium text-gray-600">Total: </span>
                            <span className="text-xl font-bold text-gray-900">
                Rp{orderDetails.total.toFixed(2)}
                </span>
                        </div>
                    </div>
                </div>

                {/* Management Order */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Status Management */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle size={20} className="text-yellow-500"/>
                            <h3 className="text-lg font-semibold text-gray-900">Status Management</h3>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg mb-4">
                            <p className="text-xs text-yellow-700">Current Status</p>
                            <p className="text-sm font-bold text-yellow-800">{orderDetails.status}</p>
                        </div>
                        {!isDone && (
                            <UpdateOrderStatusForm isDone={isDone} orderId={parseInt(id)} />
                        )
                        }
                    </div>

                    {/* Logistics Management */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Truck size={20} className="text-blue-600"/>
                            <h3 className="text-lg font-semibold text-gray-900">Logistics Management</h3>
                        </div>
                        <div className="space-y-4">
                            {/* Pickup Assignment */}
                            <div className="p-4 bg-green-50 rounded-lg">
                                <p className="text-sm font-medium text-green-700 mb-2">Pickup Assignment</p>
                                {!isDone ? (
                                    <UpdatePickupForm
                                        orderId={parseInt(id)}
                                        driverList={driverData}
                                        pickupDetails={orderDetails.logistics.pickup}
                                    />
                                ) : (
                                    <>
                                        <label className="text-xs text-gray-600 ">Assigned Driver</label>
                                        <p
                                            className="w-full border border-gray-300 text-black rounded-lg py-2 px-3 mt-1 text-sm">
                                            <span>{orderDetails.logistics.pickup?.driver.name}</span>
                                        </p>
                                        <label className="text-xs text-gray-600  mt-2 block">Pickup Time</label>
                                        <div className="relative mt-1">
                                            <p
                                                className="w-full border border-gray-300 text-black rounded-lg py-2 px-3 text-sm pr-10">
                                                {orderDetails.logistics.pickup ? formatDate(orderDetails.logistics.pickup?.pickupTime, true) : 'Not yet'}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Delivery Assignment */}
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm font-medium text-blue-700 mb-2 ">Delivery Assignment</p>
                                {!isDone ? (
                                    <UpdateDeliverForm
                                        orderId={parseInt(id)}
                                        driverList={driverData}
                                        deliveryDetails={orderDetails.logistics.delivery}
                                    />
                                ) : (
                                    <>
                                        <label className="text-xs text-gray-600 ">Assigned Driver</label>
                                        <p
                                            className="w-full border border-gray-300 text-black rounded-lg py-2 px-3 mt-1 text-sm">
                                            <span>{orderDetails.logistics.delivery?.driver.name}</span>
                                        </p>
                                        <label className="text-xs text-gray-600  mt-2 block">Pickup Time</label>
                                        <div className="relative mt-1">
                                            <p
                                                className="w-full border border-gray-300 text-black rounded-lg py-2 px-3 text-sm pr-10">
                                                {orderDetails.logistics.delivery ? formatDate(orderDetails.logistics.delivery?.arrivalTime, true) : 'Not yet'}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Invoice Management */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText size={20} className="text-blue-600"/>
                            <h3 className="text-lg font-semibold text-gray-900">Invoice Management</h3>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">
                            Generate invoice for this order.
                        </p>
                        <p className="text-xs text-gray-500 mb-4">
                            Current status: <span className="font-medium text-yellow-600">{orderDetails.status}</span>
                        </p>
                        <Button disabled={isDone} type="submit" variant="primary" >
                            Generate Invoice
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}