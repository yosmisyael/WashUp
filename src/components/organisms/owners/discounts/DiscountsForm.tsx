"use client";

import React, {useActionState, useState} from 'react';

import {Input} from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import {createDiscount, DiscountFormState} from "@/app/owners/discounts/create/actions";
import {useRouter} from "next/navigation";

const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({
                                                                                 htmlFor,
                                                                                 children,
                                                                             }) => (
    <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-900 mb-2"
    >
        {children}
    </label>
);

const FormErrors: React.FC<{ errors: DiscountFormState['errors'] }> = ({errors}) => {
    if (!errors) return null;

    const allErrors = Object.values(errors).flat();
    if (allErrors.length === 0) return null;

    return (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-bold mb-2">Please fix the following errors:</p>
            <ul className="list-disc list-inside">
                {allErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
};

export function DiscountForm() {
    const [templateName, setTemplateName] = useState('');
    const [discountType, setDiscountType] = useState('percentage');
    const [value, setValue] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const router = useRouter();

    const [state, formAction, pending] = useActionState(createDiscount, {});

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <form action={formAction}>
                <div className="space-y-6 text-black">

                    {/* Template Name */}
                    <div>
                        <FormLabel htmlFor="templateName">Template Name*</FormLabel>
                        <Input
                            id="templateName"
                            name="name"
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            placeholder="e.g., Summer Special"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormLabel htmlFor="discountType">Discount Type*</FormLabel>
                            <Select
                                id="discountType"
                                name="type"
                                value={discountType}
                                onChange={(e) => setDiscountType(e.target.value)}
                                required
                            >
                                <option value="percentage">Percentage (%)</option>
                                <option value="value">Value ($)</option>
                            </Select>
                        </div>
                        <div>
                            <FormLabel htmlFor="value">Value*</FormLabel>
                            <Input
                                id="value"
                                type="number"
                                name="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder={discountType === 'percentage' ? '20' : '5.00'}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormLabel htmlFor="startDate">Start Date*</FormLabel>
                            <Input
                                id="startDate"
                                type="date"
                                name="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <FormLabel htmlFor="endDate">End Date*</FormLabel>
                            <Input
                                id="endDate"
                                type="date"
                                name="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>

                <FormErrors errors={state.errors} />

                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-3">
                    <Button variant="secondary" type="button" onClick={() => router.back()}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" disabled={pending}>
                        Create Discount
                    </Button>
                </div>
            </form>
        </div>
    );
}