"use client";

import React from "react";
import Link from "next/link";
import { Eye, Plus, Search, Filter } from "lucide-react";

// Tipe data untuk Order
type Order = {
  id: string;
  date: string;
  items: string[];
  total: string;
  status: "Pending" | "Processing" | "Out for Delivery" | "Completed" | "Cancelled";
  paymentStatus: "Paid" | "Unpaid";
};

// Data Mock (Data dummy yang merepresentasikan hasil dari halaman New Order)
const orders: Order[] = [
  {
    id: "WU-2024-002",
    date: "16 Mar 2024",
    items: ["Wash & Fold (5kg)", "Dry Cleaning (2pcs)", "Press Only (1pcs)"],
    total: "$39.27",
    status: "Pending",
    paymentStatus: "Unpaid",
  },
  {
    id: "WU-2024-001",
    date: "15 Mar 2024",
    items: ["Wash & Fold", "Dry Cleaning (2 shirts)"],
    total: "$47.00",
    status: "Processing",
    paymentStatus: "Paid",
  },
  {
    id: "WU-2024-000",
    date: "10 Mar 2024",
    items: ["Shoe Cleaning (2 pairs)"],
    total: "$24.00",
    status: "Completed",
    paymentStatus: "Paid",
  },
];

export default function OrderListPage() {
  
  // Helper untuk warna badge status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Out for Delivery":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="min-h-screen w-full bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and track your laundry orders
            </p>
          </div>
          <Link 
            href="/customers/new-order"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm gap-2"
          >
            <Plus size={18} />
            Create New Order
          </Link>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by Order ID..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors">
            <Filter size={18} />
            Filter Status
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Items Summary</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{order.id}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex flex-col">
                        <span className="line-clamp-1">{order.items.join(", ")}</span>
                        {order.items.length > 2 && (
                          <span className="text-xs text-gray-400 mt-1">
                            +{order.items.length - 2} more items
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        order.paymentStatus === "Paid" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            order.status === "Completed" ? "bg-green-500" : 
                            order.status === "Processing" ? "bg-blue-500" :
                            order.status === "Pending" ? "bg-yellow-500" : "bg-gray-500"
                        }`}></span>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-50">
                        <Eye size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination / Empty State */}
          {orders.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No orders found. Start by creating a new order!
            </div>
          )}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between text-sm text-gray-600">
             <span>Showing {orders.length} orders</span>
             <div className="flex gap-2">
               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white disabled:opacity-50" disabled>Next</button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}