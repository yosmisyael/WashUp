"use client";

export default function RecentOrderCard() {
  const recents = [
    { id: 1, item: "Laundry #A102", status: "Delivered", date: "Nov 6, 2025" },
    { id: 2, item: "Laundry #A099", status: "In Progress", date: "Nov 5, 2025" },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-4 sm:p-6 overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
      <ul className="divide-y divide-gray-100">
        {recents.map((r) => (
          <li key={r.id} className="py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800">{r.item}</p>
              <p className="text-xs text-gray-500">{r.date}</p>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                r.status === "Delivered"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {r.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
