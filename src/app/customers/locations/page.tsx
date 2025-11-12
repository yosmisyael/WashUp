"use client";

import { useMemo, useState } from "react";
import LocationsHeader from "@/components/molecules/customers/locations/LocationHeader";
import LocationsList from "@/components/molecules/customers/locations/LocationList";

const locations = [
    {
        id: "1",
        title: "Home",
        address: "1247 Maple Street, Apartment 3B, Springfield, IL 62701",
        note: "Ring doorbell twice, leave with neighbor if not home",
        isDefault: true,
        addedAgo: "Added 3 months ago",
    },
    {
        id: "2",
        title: "Office",
        address: "456 Business Plaza, Suite 201, Downtown Springfield, IL 62702",
        note: "Deliver to front desk receptionist, available 9 AM - 5 PM",
        addedAgo: "Added 2 months ago",
    },
    {
        id: "3",
        title: "Mom's House",
        address: "789 Oak Avenue, Springfield, IL 62703",
        note: "Side entrance, knock loudly",
        addedAgo: "Added 1 month ago",
    },
    {
        id: "4",
        title: "Gym",
        address: "321 Fitness Center, Main Street, Springfield, IL 62704",
        note: "Leave with front desk staff, open 24/7",
        addedAgo: "Added 2 weeks ago",
    },
];

export default function MyLocationsPage() {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState(locations);

    // total diambil langsung dari source data
    const total = locations.length;

    // filter search
    const filteredItems = useMemo(() => {
        const lowerQuery = query.toLowerCase();
        return items.filter((item) =>
            `${item.title} ${item.address} ${item.note || ""}`
                .toLowerCase()
                .includes(lowerQuery)
        );
    }, [items, query]);

    // add new location
    const handleAdd = () => {
        const newItem = {
            id: String(Date.now()),
            title: "New Location",
            address: "New Address",
            note: "",
            addedAgo: "Added just now",
        };
        setItems((prev) => [newItem, ...prev]);
    };

    // edit placeholder
    const handleEdit = (id: string) => {
        console.log("Edit location:", id);
        // TODO: open modal edit form
    };

    // delete location
    const handleDelete = (id: string) => {
        if (!confirm("Delete this location?")) return;
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="max-w-screen-2xl mx-auto space-y-5">
            {/* Header */}
            <div className="mb-6">
                <LocationsHeader
                    value={query}
                    onChange={setQuery}
                    onAdd={handleAdd}
                    total={total}
                />
            </div>

            {/* List Section */}
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-900">
                        Your Saved Locations
                    </h3>

                    <div className="flex items-center">
                        <input
                            className="w-full sm:w-auto rounded-md border border-gray-200 px-4 py-2 mr-3 text-sm placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Search locations..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                            {filteredItems.length} of {total} locations
                        </p>
                    </div>
                </div>
                <LocationsList
                    items={filteredItems}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
}