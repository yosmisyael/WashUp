import React from 'react';
import Link from 'next/link';

import { SearchBar } from '@/components/molecules/SearchBar';
import { FilterDropdown } from '@/components/molecules/FilterDropdown';
import Button from '@/components/atoms/Button';
import { PaginationControl } from '@/components/molecules/PaginationControl';

import { Plus, Edit, Trash2 } from 'lucide-react';
import {DISCOUNT_TYPE} from "../../../../../prisma/generated/enums";
import {formatDate} from "@/lib/utils";

export type DiscountDateProp = {
    name: string,
    type: DISCOUNT_TYPE,
    value: number,
    startDate: Date,
    endDate: Date,
}

const filterOptions = ["All Status", "Active", "Scheduled", "Expired"];

export function DiscountsTable({ data }: { data: DiscountDateProp[] }) {
  return (
    <div className="bg-white p-6 shadow rounded-lg text-black">
      
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <SearchBar placeholder="Search templates..." />
          <FilterDropdown
            label="Filter by status"
            options={filterOptions}
            defaultValue="All Status"
          />
        </div>

        <Link href="/owners/discounts/create">
          <Button
            className="py-2.5 px-4 text-sm whitespace-nowrap"
            icon={<Plus className="w-4 h-4" />}
          >
            Create New Discount Template
          </Button>
        </Link>
      </div>

      <table className="w-full table-auto">
        <thead className="text-left text-sm text-gray-500">
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4">Template Name</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Value</th>
            <th className="py-3 px-4">Start Date</th>
            <th className="py-3 px-4">End Date</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((discount) => (
            <tr key={discount.name} className="hover:bg-gray-50">
              <td className="p-4 font-medium">{discount.name}</td>
              <td className="p-4">{discount.type}</td>
              <td className="p-4">{discount.value}</td>
              <td className="p-4">{formatDate(discount.startDate)}</td>
              <td className="p-4">{formatDate(discount.endDate)}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <PaginationControl />
      </div>
    </div>
  );
}