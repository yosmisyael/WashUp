"use client";

import { useState } from "react";
import { Check, LocationEditIcon, LocateFixed, ArrowLeft } from "lucide-react";
import LocationInput from "@/app/components/atoms/customers/locations/LocationInput";
import LocationTypeButton from "@/app/components/atoms/customers/locations/LocationTypeButton";
import ActionButton from "@/app/components/atoms/customers/locations/ActionButton";

export default function LocationFormCard() {
  const [type, setType] = useState("Home");

  return (
    <div className="space-y-4">
      <button className="flex items-center gap-5 text-xl font-normal text-gray-900">
        <span>
          <ArrowLeft
            className="text-gray-900"
            size={25}
          />
        </span>
        Back
      </button>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div>
          <h1 className="flex items-center gap-5 text-3xl font-semibold text-gray-900">
            <span>
              <LocationEditIcon
                className="border p-2 text-2xl rounded-2xl bg-blue-300/50 text-gray-900 border-blue-300/50"
                size={45}
              />
            </span>
            Add New Location
          </h1>
          <p className="text-gray-500 mt-1">
            Enter your location details below to make deliveries faster.
          </p>
        </div>
        <div className="space-y-4">
          <LocationInput
            label="Full Address *"
            placeholder="e.g., Jl. Jend. Sudirman No.Kav 21, Jakarta Selatan..."
            variant="textarea"
            rows={5}
            actionIcon={
              <button
                type="button"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                onClick={() => console.log("Gunakan lokasi saat ini...")}
              >
                <span className="flex items-center justify-center gap-2 text-primary-color">
                  <LocateFixed size={18} />
                  Use current location
                </span>
              </button>
            }
          />

          <LocationInput
            label="Delivery Information"
            placeholder="Apartment, floor, or notes..."
            variant="input"
            optional
          />
        </div>

        {/* Location Type */}
        <div className="flex flex-col gap-2 pt-2">
          <h1 className="text-md font-semibold text-gray-900">Location Type</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["Home", "Office", "Other"].map((item) => (
              <LocationTypeButton
                key={item}
                label={item}
                active={type === item}
                onClick={() => setType(item)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between gap-3 pt-4">
        <ActionButton label="Cancel" variant="secondary" />
        <ActionButton label="Save Address" icon={<Check size={24} />} />
      </div>
    </div>
  );
}
