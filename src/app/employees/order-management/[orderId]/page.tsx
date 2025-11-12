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

export default function ManageOrderPage({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId;

  const orderDetails = {
    customer: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@email.com',
    },
    order: {
      type: 'Delivery',
      date: 'Nov 1, 2024',
      notes: 'Please handle delicate items with extra care. Stain on white shirt sleeve.',
    },
    location: {
      pickup: '123 Oak Street, Apartment 4B, Springfield, IL, 62701',
      delivery: '123 Oak Street, Apartment 4B, Springfield, IL, 62701',
    },
    items: [
      { service: 'Dry Cleaning', qty: 3, unit: 'pieces', notes: '2 suits, 1 dress', price: 45.00 },
      { service: 'Wash & Fold', qty: 8, unit: 'lbs', notes: 'Regular clothes', price: 24.00 },
      { service: 'Stain Removal', qty: 1, unit: 'item', notes: 'White shirt - coffee stain', price: 8.00 },
    ],
    status: 'In Progress',
  };
  const total = orderDetails.items.reduce((acc, item) => acc + item.price, 0);
  const isDone = orderDetails.status === 'Done';

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Manage Order #{orderId}
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
            <ArrowLeft size={16} />
            Back to Queue
          </Link>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700">
            <Printer size={16} />
            Print Order
          </button>
        </div>
      </div>

      {/* Konten Grid 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri (Detail Order) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Customer Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <User size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500">Name</label>
                <p className="text-sm font-medium text-gray-800">{orderDetails.customer.name}</p>
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
              <Info size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Order Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500">Order Type</label>
                <p className="text-sm font-medium text-gray-800">{orderDetails.order.type}</p>
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
              <MapPin size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Location Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ChevronUp size={16} className="text-green-500" />
                  <label className="text-sm font-medium text-gray-700">Pickup Address</label>
                </div>
                <p className="text-sm text-gray-800 p-3 bg-green-50 rounded-md">
                  {orderDetails.location.pickup}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ChevronDown size={16} className="text-blue-500" />
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
              <List size={20} className="text-blue-600" />
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
                      ${item.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 bg-gray-50 text-right">
              <span className="text-sm font-medium text-gray-600">Total: </span>
              <span className="text-xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan (Manajemen) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Status Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-900">Status Management</h3>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg mb-4">
              <p className="text-xs text-yellow-700">Current Status</p>
              <p className="text-sm font-bold text-yellow-800">{orderDetails.status}</p>
            </div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Update Status To:
            </label>
            <select className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400">
              <option>Select new status...</option>
              <option>Accepted</option>
              <option>In Progress</option>
              <option>Done</option>
              <option>Delivered</option>
            </select>
            <button className="w-full bg-blue-600 text-white mt-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 ">
              Update Status
            </button>
          </div>

          {/* Logistics Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Truck size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Logistics Management</h3>
            </div>
            <div className="space-y-4">
              {/* Pickup Assignment */}
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-700 mb-2">Pickup Assignment</p>
                <label className="text-xs text-gray-600 ">Assign Driver</label>
                <select className="w-full border border-gray-300 text-gray-400 rounded-lg py-2 px-3 mt-1 text-sm">
                  <option>Select driver...</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                </select>
                <label className="text-xs text-gray-600  mt-2 block">Pickup Time</label>
                <div className="relative mt-1">
                  <input type="text" placeholder="mm/dd/yyyy --:-- --" className="w-full border border-gray-300 text-gray-400 rounded-lg py-2 px-3 text-sm pr-10" />
                  <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              {/* Delivery Assignment */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-700 mb-2 ">Delivery Assignment</p>
                <label className="text-xs text-gray-600">Assign Driver</label>
                <select className="w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 text-sm text-gray-400">
                  <option>Select driver...</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                </select>
                <label className="text-xs text-gray-600 mt-2 block ">Delivery Time</label>
                <div className="relative mt-1">
                  <input type="text" placeholder="mm/dd/yyyy --:-- --" className="w-full border border-gray-300  rounded-lg py-2 px-3 text-sm pr-10 text-gray-400" />
                  <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white mt-4 py-2.5 rounded-lg font-medium hover:bg-blue-700">
              Save Logistics
            </button>
          </div>

          {/* Invoice Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Invoice Management</h3>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              Invoice will be available when order status is &ldquo;Done&ldquo;.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Current status: <span className="font-medium text-yellow-600">{orderDetails.status}</span>
            </p>
            <button 
              disabled={!isDone}
              className="w-full bg-gray-200 text-gray-500 py-2.5 rounded-lg font-medium cursor-not-allowed disabled:opacity-70"
            >
              Generate Invoice
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}