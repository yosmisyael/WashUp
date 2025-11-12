"use client";

import React, { useState } from 'react';

import { Input } from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import {InitialsAvatar} from "@/components/atoms/InitialsAvatar";
import {formatDate} from "@/lib/utils";
import {router} from "next/client";
import {useRouter} from "next/navigation";

export type CustomerDetailFormProp = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
};

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

export function CustomerDetailForm({ customer }: { customer: CustomerDetailFormProp }) {
  const [fullName, setFullName] = useState(customer.name);
  const [phone, setPhone] = useState(customer.phone);
  const email = customer.email;
  const createdAt = customer.createdAt;
  const router = useRouter();

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <form>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          
          <div className="flex flex-col items-center md:items-start">
            <InitialsAvatar name={fullName} size={240} />
          </div>

          <div className="md:col-span-2 space-y-5">
            <div>
              <FormLabel htmlFor="fullName">Fullname*</FormLabel>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled
                readOnly
              />
            </div>
            
            <div>
              <FormLabel htmlFor="phone">Phone Number*</FormLabel>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled
                readOnly
              />
            </div>

            <div>
              <FormLabel htmlFor="email">Email*</FormLabel>
              <Input
                id="email"
                value={email}
                disabled
                readOnly
              />
            </div>

            <div>
              <FormLabel htmlFor="regDate">Registration Date*</FormLabel>
              <Input
                id="regDate"
                value={formatDate(createdAt)}
                disabled 
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center gap-3">
          <Button variant="secondary" type="button" onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}