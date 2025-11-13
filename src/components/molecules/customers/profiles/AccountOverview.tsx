import { CreditCard, ShoppingBag, Star } from "lucide-react";

export default function AccountOverview() {
  return (
    <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 space-y-4">
      <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
        Account Overview
      </h3>

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <ShoppingBag size={16} className="text-blue-500" />
          <span>Orders Completed: 47</span>
        </div>

        <div className="flex items-center gap-3">
          <CreditCard size={16} className="text-green-500" />
          <span>Payment Method: Visa ending in 4829</span>
        </div>

        <div className="flex items-center gap-3">
          <Star size={16} className="text-yellow-500" />
          <span>Reward Points: 1,240</span>
        </div>
      </div>
    </div>
  );
}
