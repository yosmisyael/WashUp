"use client";

import { Bell } from "lucide-react";
import IconButton from "@/components/atoms/customers/dashboard/IconButton";

export default function NotificationBell() {
  return (
    <IconButton
      icon={<Bell size={20} />}
      badge={2}
      onClick={() => console.log("Open notifications")}
    />
  );
}
