import { ReactNode } from "react";

interface ActionButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  icon?: ReactNode;
}

export default function ActionButton({
  label,
  variant = "primary",
  onClick,
  icon,
}: ActionButtonProps) {
  const base =
    "flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-all";

  const style =
    variant === "primary"
      ? "primary-color text-white"
      : "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200";

  return (
    <button type="button" onClick={onClick} className={`${base} ${style}`}>
      {icon} 
      <span>{label}</span>
    </button>
  );
}