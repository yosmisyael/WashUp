interface BadgeProps {
  children: React.ReactNode;
  color?: "green" | "gray" | "blue";
}

export default function Badge({ children, color = "green" }: BadgeProps) {
  const map = {
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-600",
    blue: "bg-blue-100 text-blue-700",
  } as const;

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${map[color]}`}>
      {children}
    </span>
  );
}
