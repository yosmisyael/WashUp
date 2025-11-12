"use client";

import { Edit2, Trash, Home } from "lucide-react";
import Badge from "@/components/atoms/customers/locations/Badge";
import IconButton from "@/components/atoms/customers/locations/IconButton";

export type LocationItem = {
    id: string;
    title: string;
    address: string;
    note?: string;
    isDefault?: boolean;
    addedAgo?: string;
    icon?: React.ReactNode;
};

export default function LocationCard({
                                         item,
                                         onEdit,
                                         onDelete,
                                     }: {
    item: LocationItem;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) {
    return (
        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            {/* icon box */}
            <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-50 grid place-items-center">
                {/* simple icon placeholder */}
                <div className="text-blue-600 text-xl">
                    <Home size={30} />
                </div>
            </div>

            <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.address}</p>
                        {item.note && <p className="text-xs text-gray-400 mt-1">{item.note}</p>}
                        <div className="mt-2 flex items-center gap-3">
                            {item.isDefault && <Badge color="green">Default</Badge>}
                            {item.addedAgo && <p className="text-xs text-gray-400">{item.addedAgo}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <IconButton ariaLabel="edit" onClick={() => onEdit?.(item.id)}>
                            <Edit2 size={16} className="text-blue-600" />
                        </IconButton>
                        <IconButton ariaLabel="delete" onClick={() => onDelete?.(item.id)}>
                            <Trash size={16} className="text-red-500" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}