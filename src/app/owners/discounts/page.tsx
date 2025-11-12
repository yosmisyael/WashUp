import React from 'react';
import {DiscountTabsWrapper} from '@/components/organisms/owners/discounts/DiscountTabsWrapper';
import {getAllDiscounts} from "@/lib/discount-repository";
import {DiscountDateProp} from "@/components/organisms/owners/discounts/DiscountsTable";

export default async function DiscountsPage() {
    const discountData = await getAllDiscounts() as DiscountDateProp[];
    return (
        <>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-black">Discount & Voucher Management</h1>
                <p className="text-gray-600">Create discount templates and assign vouchers to customers</p>
            </div>

            <DiscountTabsWrapper discountData={discountData}/>
        </>
    );
}