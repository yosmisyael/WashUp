import {
  Package,
  Loader,
  CheckCircle,
  Truck,
  ArrowRight,
  MoveUpRight,
  MoveDownRight,
  CircleDot,
  Check,
} from "lucide-react";
import React from "react";

// --- Definisi Tipe ---
type StatCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "alert" | "info";
  icon: React.ReactNode;
  iconBg: string;
};

// --- TIPE INI DIUPDATE ---
type TaskCardProps = {
  type: string;
  orderId: string;
  address: string;
  time: string;
  icon: React.ReactNode;
  iconBg: string;
  cardBg: string; // <-- Menambahkan properti cardBg
};

// --- Data Mockup ---
const statsCards: StatCardProps[] = [
  {
    title: "New Orders",
    value: "24",
    change: "+12% from yesterday",
    changeType: "increase",
    icon: <Package size={20} className="text-blue-500" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "In Progress",
    value: "18",
    change: "3 urgent",
    changeType: "alert",
    icon: <Loader size={20} className="text-yellow-500" />,
    iconBg: "bg-yellow-100",
  },
  {
    title: "Ready for Invoicing",
    value: "7",
    change: "waiting processing",
    changeType: "info",
    icon: <CheckCircle size={20} className="text-green-500" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Pending Pickups",
    value: "12",
    change: "today's schedule",
    changeType: "alert",
    icon: <Truck size={20} className="text-red-500" />,
    iconBg: "bg-red-100",
  },
];

const incomingOrders = [
  { id: "#WU-2024-001", customer: "John Smith", type: "Dry Cleaning", typeBg: "bg-blue-100", typeText: "text-blue-700" },
  { id: "#WU-2024-002", customer: "Emily Davis", type: "Wash & Fold", typeBg: "bg-green-100", typeText: "text-green-700" },
  { id: "#WU-2024-003", customer: "Michael Chen", type: "Premium Care", typeBg: "bg-purple-100", typeText: "text-purple-700" },
  { id: "#WU-2024-004", customer: "Sarah Wilson", type: "Wash & Fold", typeBg: "bg-green-100", typeText: "text-green-700" },
  { id: "#WU-2024-005", customer: "David Brown", type: "Dry Cleaning", typeBg: "bg-blue-100", typeText: "text-blue-700" },
];

// --- DATA INI DIUPDATE ---
const myTasks: TaskCardProps[] = [
  { type: "Pickup", orderId: "#WU-2024-001", address: "123 Main St, Downtown", time: "2:00 PM - 3:00 PM", iconBg: "bg-blue-100", cardBg: "bg-blue-50", icon: <Package size={18} className="text-blue-600" /> },
  { type: "Delivery", orderId: "#WU-2024-012", address: "456 Oak Ave, Midtown", time: "4:00 PM - 5:00 PM", iconBg: "bg-green-100", cardBg: "bg-green-50", icon: <Check size={18} className="text-green-600" /> },
  { type: "Pickup", orderId: "#WU-2024-015", address: "789 Pine St, Uptown", time: "5:30 PM - 6:30 PM", iconBg: "bg-yellow-100", cardBg: "bg-yellow-50", icon: <Truck size={18} className="text-yellow-600" /> },
  { type: "Delivery", orderId: "#WU-2024-008", address: "321 Elm Dr, Westside", time: "7:00 PM - 8:00 PM", iconBg: "bg-purple-100", cardBg: "bg-purple-50", icon: <Check size={18} className="text-purple-600" /> },
];
// --- Akhir Data Mockup ---


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Bagian Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      {/* Bagian Konten Utama (Tabel & Tugas) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Incoming Orders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Incoming Orders</h2>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
              View All →
            </a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="py-3 px-4 font-medium">Order ID</th>
                <th className="py-3 px-4 font-medium">Customer</th>
                <th className="py-3 px-4 font-medium">Type</th>
                <th className="py-3 px-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {incomingOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-100">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{order.customer}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`
                        text-xs font-semibold px-3 py-1 rounded-full
                        ${order.typeBg} ${order.typeText}
                      `}
                    >
                      {order.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kolom Kanan: My Tasks */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My Tasks - Today</h2>
          </div>
          <div className="space-y-4">
            {myTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
            <button className="w-full text-center text-sm font-medium text-blue-600 hover:underline mt-4 flex items-center justify-center gap-1">
              View Full Schedule <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// --- Komponen Internal ---

function StatCard({ title, value, change, changeType, icon, iconBg }: StatCardProps) {
  const changeIcon =
    changeType === "increase" ? <MoveUpRight size={14} className="text-green-500" /> :
    changeType === "decrease" ? <MoveDownRight size={14} className="text-red-500" /> :
    changeType === "alert" ? <CircleDot size={14} className="text-red-500" /> :
    <CircleDot size={14} className="text-gray-400" />;

  const changeColor =
    changeType === "increase" ? "text-green-500" :
    changeType === "decrease" ? "text-red-500" :
    changeType === "alert" ? "text-red-500" :
    "text-gray-500";

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        <div className="flex items-center gap-1 mt-2">
          {changeIcon}
          <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
        </div>
      </div>
      <div className={`p-3 rounded-lg ${iconBg}`}>
        {icon}
      </div>
    </div>
  );
}

// --- KOMPONEN INI DIUPDATE ---
function TaskCard({ type, orderId, address, time, icon, iconBg, cardBg }: TaskCardProps) {
  return (
    // Latar belakang kartu sekarang menggunakan cardBg, bukan border
    <div className={`flex items-center gap-4 p-4 rounded-lg ${cardBg}`}>
      <div className={`p-3 rounded-lg ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">
          {type} - <span className="font-medium">{orderId}</span>
        </p>
        <p className="text-xs text-gray-600">{address}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <ArrowRight size={16} className="text-gray-400" />
    </div>
  );
}