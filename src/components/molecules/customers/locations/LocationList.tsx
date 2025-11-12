"use client";

import LocationCard, { LocationItem } from "./LocationCard";

export default function LocationsList({
                                          items,
                                          onEdit,
                                          onDelete,
                                      }: {
    items: LocationItem[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) {
    if (items.length === 0)
        return <p className="text-sm text-gray-500">No saved locations yet. Add your first location.</p>;

    return (
        <div className="space-y-4">
            {items.map((it) => (
                <LocationCard key={it.id} item={it} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
}