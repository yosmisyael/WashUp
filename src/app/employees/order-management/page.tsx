import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Truck,
  Tag,
  Loader,
  CheckCircle,
  Package,
  XCircle,
} from "lucide-react";

// --- Tipe Data Contoh ---
type Order = {
  id: string;
  customer: {
    name: string;
    avatar: string;
  };
  type: "Delivery" | "Regular";
  status: "In Progress" | "Done" | "Accepted" | "Delivered";
  payment: "Paid" | "Pending";
  created: string;
};

// --- Data Contoh (Mock Data) ---
const mockOrders: Order[] = [
  {
    id: "#WU-2024-001",
    customer: { name: "Sarah Johnson", avatar: "https://via.placeholder.com/40" },
    type: "Delivery",
    status: "In Progress",
    payment: "Paid",
    created: "Nov 15, 2024",
  },
  {
    id: "#WU-2024-002",
    customer: { name: "Michael Chen", avatar: "https://via.placeholder.com/40" },
    type: "Regular",
    status: "Done",
    payment: "Pending",
    created: "Nov 14, 2024",
  },
  {
    id: "#WU-2024-003",
    customer: { name: "Emma Davis", avatar: "https://via.placeholder.com/40" },
    type: "Delivery",
    status: "Accepted",
    payment: "Paid",
    created: "Nov 13, 2024",
  },
  {
    id: "#WU-2024-004",
    customer: { name: "David Wilson", avatar: "https://via.placeholder.com/40" },
    type: "Regular",
    status: "Delivered",
    payment: "Paid",
    created: "Nov 12, 2024",
  },
  {
    id: "#WU-2024-005",
    customer: { name: "Lisa Anderson", avatar: "https://via.placeholder.com/40" },
    type: "Delivery",
    status: "In Progress",
    payment: "Pending",
    created: "Nov 11, 2024",
  },
];

// --- Komponen Badge (untuk Status, Tipe, Pembayaran) ---

const TypeBadge = ({ type }: { type: Order["type"] }) => {
  const styles = {
    Delivery: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      icon: <Truck size={14} />,
    },
    Regular: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      icon: <Tag size={14} />,
    },
  };
  const style = styles[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
      {style.icon}
      {type}
    </span>
  );
};

const StatusBadge = ({ status }: { status: Order["status"] }) => {
  const styles = {
    "In Progress": {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      icon: <Loader size={14} className="animate-spin" />,
    },
    Done: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <CheckCircle size={14} />,
    },
    Accepted: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      icon: <CheckCircle size={14} />,
    },
    Delivered: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      icon: <Package size={14} />,
    },
  };
  const style = styles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
      {style.icon}
      {status}
    </span>
  );
};

const PaymentBadge = ({ payment }: { payment: Order["payment"] }) => {
  const styles = {
    Paid: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <CheckCircle size={14} />,
    },
    Pending: {
      bg: "bg-red-100",
      text: "text-red-700",
      icon: <XCircle size={14} />,
    },
  };
  const style = styles[payment];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
      {style.icon}
      {payment}
    </span>
  );
};

// --- Komponen Halaman Utama ---
export default function OrderManagementPage() {
  // Ambil `searchParams` untuk pagination, filter, dll.
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page') || '1';

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search Input */}
          <div className="relative grow min-w-[250px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by Order ID or Customer Name"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900           
                placeholder:text-gray-400"
            />
          </div>
          {/* Dropdowns */}
          <select className="border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400">
            <option>All Status</option>
            <option>In Progress</option>
            <option>Done</option>
            <option>Accepted</option>
          </select>
          <select className="border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400">
            <option>All Types</option>
            <option>Delivery</option>
            <option>Regular</option>
          </select>
          {/* Buttons */}
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700">
            <Filter size={16} />
            Apply Filters
          </button>
          <button className="flex items-center gap-2 text-gray-600 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-100">
            <RefreshCw size={16} />
            Reset
          </button>
        </div>
      </div>

      {/* Tabel Order */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-medium text-blue-600 hover:underline">{order.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={order.customer.avatar}
                      alt={order.customer.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-medium text-gray-900">{order.customer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <TypeBadge type={order.type} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <PaymentBadge payment={order.payment} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {order.created}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* Link ini akan mengarah ke halaman detail */}
                  <Link
                    href={`/employee/order-management/${order.id.replace("#", "")}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700"
                  >
                    Manage Order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white px-6 py-3 rounded-lg shadow-sm">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
          <span className="font-medium">47</span> orders
        </p>
        <nav className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <ChevronLeft size={18} />
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm">1</button>
          <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm">2</button>
          <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm">3</button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <ChevronRight size={18} />
          </button>
        </nav>
      </div>
    </div>
  );
}