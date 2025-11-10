"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/atoms/customers/locations/Button";

export default function LocationsHeader({}: {
  value: string;
  onChange: (v: string) => void;
  onAdd: () => void;
  total: number;
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Manage My Locations
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Add and manage your pickup and delivery addresses
        </p>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/customers/locations/add")}
            className="flex items-center gap-2"
          >
            <Plus size={16} />
            Add New Location
          </Button>
        </div>
      </div>
    </div>
  );
}
