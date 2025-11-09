interface BadgeProps {
  text: string;
  color?: "blue" | "green" | "gray";
}

export default function Badge({ text, color = "blue" }: BadgeProps) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${colorMap[color]}`}
    >
      {text}
    </span>
  );
}
