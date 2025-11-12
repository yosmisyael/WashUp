'use client';

import React from 'react';
import { Search, Plus, Edit, UserMinus, Trash2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';

// Data dummy employees
const employees = [
  {
    id: '#001',
    name: 'John Smith',
    role: 'Owner',
    startDate: 'Jan 15, 2023',
    status: 'Active',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  {
    id: '#002',
    name: 'Sarah Johnson',
    role: 'Employee',
    startDate: 'Mar 22, 2023',
    status: 'Active',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  {
    id: '#003',
    name: 'Mike Chen',
    role: 'Employee',
    startDate: 'May 08, 2023',
    status: 'Active',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
  {
    id: '#004',
    name: 'Emily Davis',
    role: 'Employee',
    startDate: 'Jul 12, 2023',
    status: 'Inactive',
    avatar: 'https://i.pinimg.com/736x/ed/6b/a2/ed6ba283b6e0e65cfa751382d4f344fc.jpg'
  },
];

// Fallback avatar URL
const fallbackAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face';

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      {/* Header: Judul + Tombol Add New Employee satu baris */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your team members and their access</p>
        </div>
        <Link href="/owners/employees/create">
          <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium whitespace-nowrap cursor-pointer">
            <Plus size={16} />
            <span>Add New Employee</span>
          </div>
        </Link>
      </div>

      {/* Team Members Section */}
      <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
        {/* Header inside card */}
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input 
                className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-md text-black" 
                placeholder="Search employees..." 
              />
            </div>
            
            {/* Filter Dropdown: All Roles */}
            <div className="relative">
              <select className="border border-gray-300 text-black rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Roles</option>
                <option>Owner</option>
                <option>Employee</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Employee ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Role</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Start Date</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 text-xs uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500 text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{employee.id}</td>
                  
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={employee.avatar}
                          alt={employee.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = fallbackAvatar;
                          }}
                        />
                      </div>
                      <span className="font-medium text-gray-900">{employee.name}</span>
                    </div>
                  </td>
                  
                  <td className="px-4 py-3">
                    <Badge 
                      className={
                        employee.role === 'Owner' 
                          ? 'bg-purple-100 text-purple-800 border-purple-200 px-2 py-1 text-xs rounded-full' 
                          : 'bg-blue-100 text-blue-800 border-blue-200 px-2 py-1 text-xs rounded-full'
                      }
                    >
                      {employee.role}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{employee.startDate}</td>
                  
                  <td className="px-4 py-3">
                    <Badge 
                      className={
                        employee.status === 'Active' 
                          ? 'bg-green-100 text-green-800 border-green-200 px-2 py-1 text-xs rounded-full' 
                          : 'bg-yellow-100 text-yellow-800 border-yellow-200 px-2 py-1 text-xs rounded-full'
                      }
                    >
                      {employee.status}
                    </Badge>
                  </td>
                  
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800 rounded transition-colors">
                        <Edit size={16} />
                      </button>
                      {employee.status === 'Active' ? (
                        <button className="p-1 text-gray-500 hover:text-orange-600 rounded transition-colors">
                          <UserMinus size={16} />
                        </button>
                      ) : (
                        <button className="p-1 text-green-600 hover:text-green-800 rounded transition-colors">
                          <CheckCircle size={16} />
                        </button>
                      )}
                      <button className="p-1 text-red-600 hover:text-red-800 rounded transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-white px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-sm text-gray-700">
              Showing {employees.length} of {employees.length} employees
            </span>
            
            {/* Pagination */}
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded transition-colors hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded transition-colors">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded transition-colors hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}