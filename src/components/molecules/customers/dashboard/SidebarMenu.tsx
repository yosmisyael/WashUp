"use client";

import { Home, PlusCircle, ShoppingBag, MapPin, Ticket, User } from "lucide-react";
import NavItem from "@/components/atoms/customers/dashboard/NavItem";

export default function SidebarMenu() {
  return (
    <nav className="mt-6 flex flex-col gap-2">
      <NavItem href="/customers/dashboard" icon={<Home size={18} />} label="Dashboard" />
      <NavItem href="/customers/new-order" icon={<PlusCircle size={18} />} label="New Order" />
      <NavItem href="/customers/my-order" icon={<ShoppingBag size={18} />} label="My Order" />
      <NavItem href="/customers/locations" icon={<MapPin size={18} />} label="My Locations" />
      <NavItem href="/customers/vouchers" icon={<Ticket size={18} />} label="Vouchers" />
      <NavItem href="/customers/profile" icon={<User size={18} />} label="Profile" />
    </nav>
  );
}
