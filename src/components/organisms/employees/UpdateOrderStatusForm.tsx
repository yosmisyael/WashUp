'use client';

import {ORDER_STATUS} from "../../../../prisma/generated/enums";
import React, {useActionState} from "react";
import {updateOrderStatus, UpdateOrderStatusState} from "@/app/employees/order-management/action";
import FormError from "@/components/molecules/FormError";

export function UpdateOrderStatusForm({ orderId, isDone }: { orderId: number, isDone: boolean }) {
    console.log('action called', orderId);
    const [state, formAction, pending] = useActionState(updateOrderStatus, {});
    return (
        <form action={formAction}>
            <input type="hidden" value={orderId} name='orderId' />
            <label className="text-sm font-medium text-gray-700 block mb-2">
                Update Status To:
            </label>
            <select
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                disabled={isDone} name='status'>
                <option disabled>Select new status...</option>
                <option value={ORDER_STATUS.ACCEPTED}>Accepted</option>
                <option value={ORDER_STATUS.IN_PROGRESS}>In Progress</option>
                <option value={ORDER_STATUS.DONE}>Done</option>
                <option value={ORDER_STATUS.ON_THE_WAY_TO_PICK_UP}>Pickup Progress</option>
                <option value={ORDER_STATUS.ON_THE_WAY_TO_DELIVER}>Deliver Progress</option>
            </select>
            <FormError errors={state.errors} />
            <button
                disabled={pending}
                type="submit"
                className="w-full bg-blue-600 text-white mt-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 ">
                Update Status
            </button>
        </form>
    )
}