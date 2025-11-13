'use client';

import React, {useActionState} from "react";
import {assignPickup} from "@/app/employees/order-management/action";
import FormError from "@/components/molecules/FormError";
import {formatLocalDatetime} from "@/lib/utils";

export type PickupDetails = {
    driver: {
        id: number;
        name: string;
    };
    pickupTime: Date;
} | null | undefined;

export function UpdatePickupForm({ orderId, driverList, pickupDetails }: { orderId: number, driverList: { id: number, name: string }[], pickupDetails: PickupDetails }) {
    const [state, formAction, pending] = useActionState(assignPickup, {});

    const defaultPickupTime = formatLocalDatetime(pickupDetails?.pickupTime);

    return (
        <form action={formAction}>
            {/* order id */}
            <input type="hidden" name="orderId" value={orderId} />

            {/* driver */}
            <label className="text-xs text-gray-600 ">Assign Driver</label>
            <select
                name="driverId"
                defaultValue={pickupDetails?.driver.id || ""}
                className="w-full border border-gray-400 text-gray-600 rounded-lg py-2 px-3 mt-1 text-sm">
                <option disabled>Select driver...</option>
                { driverList.map(driver => (
                    <option key={driver.id} value={driver.id}>{driver.name}</option>
                )) }
            </select>

            {/* time pickup */}
            <label className="text-xs text-gray-600  mt-2 block">Pickup Time</label>
            <div className="relative mt-1">
                <input type="datetime-local" name="pickupTime" placeholder="mm/dd/yyyy --:-- --"
                       defaultValue={defaultPickupTime}
                       className="w-full border border-gray-400 text-gray-600 rounded-lg py-2 px-3 text-sm pr-10"/>
            </div>
            <FormError errors={state.errors} />
            <button
                disabled={pending}
                type="submit"
                className="w-full bg-blue-600 text-white mt-4 py-2.5 rounded-lg font-medium hover:bg-blue-700">
                Schedule pickup
            </button>
        </form>
    )
}