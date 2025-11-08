"use client";

import { Bell } from "lucide-react";
import IconButton from "@/app/components/atoms/customers/IconButton";

export default function NotificationBell() {
  return (
    <IconButton
      icon={<Bell size={20} />}
      badge={2}
      onClick={() => console.log("Open notifications")}
    />
  );
}
