"use client";

import React, {useActionState, useState} from 'react';

import {Input, PasswordInput} from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import {createEmployee, EmployeeFormState} from "@/app/owners/employees/create/action";

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

const FormHelperText: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <p className="mt-1.5 text-xs text-gray-500">{children}</p>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <h3 className="text-lg font-semibold text-black">{children}</h3>
);


const FormErrors: React.FC<{ errors: EmployeeFormState['errors'] }> = ({errors}) => {
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

export function EmployeeForm() {
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('');
    const [startDate, setStartDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [state, formAction, pending] = useActionState(createEmployee, {});

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <form action={formAction}>
                <div className="space-y-6 text-black">

                    <div className="space-y-4">
                        <SectionTitle>Employee Information</SectionTitle>

                        {/* Full Name */}
                        <div>
                            <FormLabel htmlFor="fullName">Full Name*</FormLabel>
                            <Input
                                id="fullName"
                                value={fullName}
                                name="name"
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter employee's full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <FormLabel htmlFor="email">Email*</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Create employee email"
                                required
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <FormLabel htmlFor="role">Role*</FormLabel>
                            <Select
                                id="role"
                                value={role}
                                name="role"
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="employee" disabled>Select a role</option>
                                <option value="employee">Employee</option>
                            </Select>
                        </div>

                        {/* Start Date */}
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
                    </div>

                    {/* Bagian Account Setup */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                        <SectionTitle>Account Setup</SectionTitle>

                        {/* Password */}
                        <div>
                            <FormLabel htmlFor="password">Set Initial Password*</FormLabel>
                            <PasswordInput
                                id="password"
                                name="password"
                                icon={<></>}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a secure password"
                                required
                            />
                            <FormHelperText>
                                Password must be at least 8 characters long
                            </FormHelperText>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <FormLabel htmlFor="confirmPassword">Confirm Password*</FormLabel>
                            <PasswordInput
                                id="confirmPassword"
                                name="confirmPassword"
                                icon={<></>}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm the password"
                                required
                            />
                        </div>
                    </div>
                </div>

                <FormErrors errors={state.errors} />

                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-3">
                    <Button variant="secondary" type="button">
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" disabled={pending}>
                        Save Employee
                    </Button>
                </div>
            </form>
        </div>
    );
}