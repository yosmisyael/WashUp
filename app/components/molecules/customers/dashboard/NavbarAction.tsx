"use client";

import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <NotificationBell />
      <UserMenu />
    </div>
  );
}
