interface LocationTypeButtonProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export default function LocationTypeButton({
                                               label,
                                               active,
                                               onClick,
                                           }: LocationTypeButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`py-5 rounded-lg border text-sm font-semibold transition-all
        ${active
                ? "primary-color text-white"
                : "bg-gray-300/50 text-gray-900 border-gray-200 hover:bg-gray-50"
            }`}
        >
            {label}
        </button>
    );
}