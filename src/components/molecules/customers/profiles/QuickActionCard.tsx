import { MessageCircle, MapPin, ShoppingCart } from "lucide-react";

export default function QuickActionsCard() {
  const actions = [
    {
      label: "Track Order",
      icon: <MapPin size={16} />,
      href: "#",
    },
    {
      label: "View Cart",
      icon: <ShoppingCart size={16} />,
      href: "#",
    },
    {
      label: "Contact Support",
      icon: <MessageCircle size={16} />,
      href: "#",
    },
  ];

  return (
    <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 space-y-4">
      <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
        Quick Actions
      </h3>

      <div className="space-y-2">
        {actions.map((action, idx) => (
          <a
            key={idx}
            href={action.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 text-sm font-medium transition-all"
          >
            {action.icon}
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}
