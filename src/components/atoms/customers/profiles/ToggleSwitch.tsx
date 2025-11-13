"use client";
import React from "react";

export default function ToggleSwitch({
  enabled,
  setEnabled,
}: {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`
        relative inline-flex items-center h-6 w-11 rounded-full transition-colors
        ${enabled ? "bg-blue-600" : "bg-gray-300"}
      `}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className={`
          inline-block w-4 h-4 transform bg-white rounded-full transition-transform
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}
