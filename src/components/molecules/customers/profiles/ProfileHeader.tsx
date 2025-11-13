import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
      <Image
        src="https://i.pinimg.com/736x/11/96/65/119665a86119c172fd7b34551a332b9a.jpg"
        alt="Sarah Johnson"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Sarah Johnson</h2>
        <p className="text-sm text-gray-500">Customer since March 2023</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
            <CheckCircle size={14} />
            Active Account
          </span>
          <span className="text-sm text-gray-600">
            Total Orders: <span className="font-medium text-gray-900">47</span>
          </span>
        </div>
      </div>
    </div>
  );
}
