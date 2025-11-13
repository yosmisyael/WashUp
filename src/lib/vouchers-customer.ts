import { Percent, DollarSign, Home } from "lucide-react";

export type Voucher = {
  icon: React.ElementType; // pakai tipe komponen, bukan ReactNode
  iconBg: string;
  iconColor: string;
  title: string;
  type: "Percentage" | "Value";
  typeBg: string;
  typeColor: string;
  usesRemaining: number;
  validUntil: string;
};

export const availableVouchers: Voucher[] = [
  {
    icon: Percent,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Grand Opening Discount",
    type: "Percentage",
    typeBg: "bg-blue-100",
    typeColor: "text-blue-700",
    usesRemaining: 3,
    validUntil: "Dec 31, 2024",
  },
  {
    icon: DollarSign,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "First Time Customer",
    type: "Value",
    typeBg: "bg-green-100",
    typeColor: "text-green-700",
    usesRemaining: 1,
    validUntil: "Jan 15, 2025",
  },
  {
    icon: Home,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Weekend Special",
    type: "Percentage",
    typeBg: "bg-orange-100",
    typeColor: "text-orange-700",
    usesRemaining: 2,
    validUntil: "Nov 30, 2024",
  },
];

export const claimableVouchers = availableVouchers;
