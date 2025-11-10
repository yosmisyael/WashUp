"use client";

import LocationFormCard from "@/app/components/molecules/customers/locations/LocationFormCard";
import QuickTip from "@/app/components/atoms/customers/locations/QuickTip";

export default function AddLocationPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 py-6">
      {/* Form */}
      <LocationFormCard />

      {/* Quick Tip */}
      <QuickTip />
    </section>
  );
}
