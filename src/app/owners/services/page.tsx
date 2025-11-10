// src/app/(pages)/owners/services/page.tsx
import React from 'react';
import { ServicesHeader } from '@/components/molecules/owners/services/ServicesHeader';
import { ServicesStats } from '@/components/organisms/owners/services/ServicesStats';
import { ServicesTable } from '@/components/organisms/owners/services/ServicesTable'; 

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />

      <div className="mb-8">
        <ServicesStats />
      </div>

      <ServicesTable />
    </>
  );
}