import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plus,
  Bell, // Mengganti ikon merah di header
  Clock,
  Truck,
  PackageCheck,
  CheckCircle,
  Search,
  List,
  LayoutGrid,
  ArrowUpCircle,
  ArrowDownCircle,
  Eye,
  Check,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// --- Tipe Data Contoh ---
type Stat = {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
};

type Job = {
  id: string;
  date: string;
  customer: {
    name: string;
    avatar: string;
    phone: string;
  };
  type: 'Pickup' | 'Delivery';
  address: {
    street: string;
    distance: string;
  };
  status: 'Pending Pickup' | 'Ready for Delivery' | 'In Transit';
  priority: 'High' | 'Medium' | 'Low';
};

// --- Data Contoh (Mock Data) ---
const statsCards: Stat[] = [
  { title: 'Pending Pickups', value: '12', icon: <Clock size={20} />, iconBg: 'bg-orange-100', iconColor: 'text-orange-500' },
  { title: 'In Transit', value: '8', icon: <Truck size={20} />, iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
  { title: 'Ready for Delivery', value: '15', icon: <PackageCheck size={20} />, iconBg: 'bg-green-100', iconColor: 'text-green-500' },
  { title: 'Completed Today', value: '24', icon: <CheckCircle size={20} />, iconBg: 'bg-indigo-100', iconColor: 'text-indigo-500' },
];

const mockJobs: Job[] = [
  {
    id: '#WU-2024-001',
    date: 'Nov 5, 2024',
    customer: { name: 'Sarah Johnson', avatar: 'https://via.placeholder.com/40', phone: '+1 234 567 8901' },
    type: 'Pickup',
    address: { street: '123 Main St, Downtown', distance: '2.3 miles away' },
    status: 'Pending Pickup',
    priority: 'High',
  },
  {
    id: '#WU-2024-002',
    date: 'Nov 5, 2024',
    customer: { name: 'Michael Chen', avatar: 'https://via.placeholder.com/40', phone: '+1 234 567 8902' },
    type: 'Delivery',
    address: { street: '456 Oak Ave, Midtown', distance: '1.8 miles away' },
    status: 'Ready for Delivery',
    priority: 'Medium',
  },
  {
    id: '#WU-2024-003',
    date: 'Nov 5, 2024',
    customer: { name: 'Emily Davis', avatar: 'https://via.placeholder.com/40', phone: '+1 234 567 8903' },
    type: 'Pickup',
    address: { street: '789 Pine St, Midtown', distance: '3.1 miles away' },
    status: 'In Transit',
    priority: 'Low',
  },
];

// --- Komponen Internal ---

// Kartu Statistik
const StatCard = ({ title, value, icon, iconBg, iconColor }: Stat) => (
  <div className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
    <div className={`p-3 rounded-lg ${iconBg}`}>
      <span className={iconColor}>{icon}</span>
    </div>
  </div>
);

// Badge Tipe (Pickup/Delivery)
const TypeBadge = ({ type }: { type: Job['type'] }) => {
  const styles = {
    Pickup: {
      text: 'text-orange-700',
      icon: <ArrowUpCircle size={16} className="text-orange-500" />,
    },
    Delivery: {
      text: 'text-green-700',
      icon: <ArrowDownCircle size={16} className="text-green-500" />,
    },
  };
  const style = styles[type];
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${style.text}`}>
      {style.icon}
      {type}
    </span>
  );
};

// Badge Status
const StatusBadge = ({ status }: { status: Job['status'] }) => {
  const styles = {
    'Pending Pickup': 'bg-yellow-100 text-yellow-700',
    'Ready for Delivery': 'bg-green-100 text-green-700',
    'In Transit': 'bg-blue-100 text-blue-700',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

// Badge Prioritas
const PriorityBadge = ({ priority }: { priority: Job['priority'] }) => {
  const styles = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-blue-100 text-blue-700',
    Low: 'bg-gray-100 text-gray-700',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[priority]}`}>
      {priority}
    </span>
  );
};


// --- Komponen Halaman Utama ---
export default function LogisticSchedulePage() {
  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Delivery Jobs</h1>
          <p className="text-sm text-gray-500">Manage pickup and delivery assignments</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700">
            <Plus size={16} />
            New Route
          </button>
          <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 relative">
            <Bell size={18} />
            {/* Notif dot */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-red-100"></span>
          </button>
        </div>
      </div>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Filter dan Tabel */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Filter Bar */}
        <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200">
          <div className="flex items-center gap-4 grow">
            {/* Search Input */}
            <div className="relative grow min-w-[250px]">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="
                  w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  text-gray-900 placeholder:text-gray-400
                "
              />
            </div>
            {/* Dropdowns */}
            <select className="border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
            </select>
            <select className="border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Drivers</option>
            </select>
          </div>
          {/* View Toggles */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
            <button className="p-2 rounded-md bg-white text-blue-600 shadow-sm">
              <List size={18} />
            </button>
            <button className="p-2 rounded-md text-gray-500 hover:text-gray-900">
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        {/* Tabel */}
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockJobs.map((job) => (
              <tr key={job.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="font-medium text-blue-600 hover:underline">{job.id}</p>
                  <p className="text-sm text-gray-500">{job.date}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image src={job.customer.avatar} alt={job.customer.name} width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-medium text-gray-900">{job.customer.name}</p>
                      <p className="text-sm text-gray-500">{job.customer.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <TypeBadge type={job.type} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="font-medium text-gray-900">{job.address.street}</p>
                  <p className="text-sm text-gray-500">{job.address.distance}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={job.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <PriorityBadge priority={job.priority} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <button className="text-gray-500 hover:text-blue-600"><Eye size={18} /></button>
                    <button className="text-gray-500 hover:text-green-600"><Check size={18} /></button>
                    <button className="text-gray-500 hover:text-purple-600"><MapPin size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white px-6 py-3 border-t border-gray-200">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
            <span className="font-medium">35</span> jobs
          </p>
          <nav className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              Previous
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm">1</button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm">2</button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm">3</button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}