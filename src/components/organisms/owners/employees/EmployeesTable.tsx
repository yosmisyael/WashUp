import React from 'react';
import { SearchBar } from '@/components/molecules/SearchBar';
import { FilterDropdown } from '@/components/molecules/FilterDropdown';
import { RoleBadge } from '@/components/atoms/RoleBadge';
import { PaginationControl } from '@/components/molecules/PaginationControl';
import { Edit, Trash2, RotateCcw } from 'lucide-react';
import {ROLE} from "../../../../../prisma/generated/enums";
import {formatDate} from "@/lib/utils";
import {InitialsAvatar} from "@/components/atoms/InitialsAvatar";

export type employeesTableProps = {
    id: number;
    name: string;
    role: ROLE,
    startDate: Date,
}

const filterOptions = ["All Roles", "Owner", "Employee"];

export function EmployeesTable({ data }: { data: employeesTableProps[] }): React.ReactNode {
  return (
    <div className="bg-white p-6 shadow rounded-lg text-black">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Team Members</h2>
        <div className="flex items-center gap-4">
          <SearchBar placeholder="Search employees..." />
          <FilterDropdown
            label="Filter by role"
            options={filterOptions}
            defaultValue="All Roles"
          />
        </div>
      </div>

      <table className="w-full table-auto">
        <thead className="text-left text-sm text-gray-500">
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4">Employee ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Start Date</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-50">
              <td className="p-4 font-medium">{emp.id}</td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <InitialsAvatar name={emp.name} />
                  <span className="font-medium">{emp.name}</span>
                </div>
              </td>
              <td className="p-4">
                <RoleBadge variant={emp.role as 'owner' | 'employee'} />
              </td>
              <td className="p-4">{formatDate(emp.startDate)}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800" title="Reset Password">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800" title="Delete">
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