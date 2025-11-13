"use client";
import { useState } from "react";
import ToggleSwitch from "@/components/atoms/customers/profiles/ToggleSwitch";

export default function PreferencesCard() {
  const [newsletter, setNewsletter] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 space-y-5">
      <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
        Preferences
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Receive newsletter updates</span>
        <ToggleSwitch enabled={newsletter} setEnabled={setNewsletter} />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Push notifications</span>
        <ToggleSwitch enabled={notifications} setEnabled={setNotifications} />
      </div>
    </div>
  );
}
