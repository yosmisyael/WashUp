import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";

interface BaseInputProps {
  label: string;
  optional?: boolean;
  actionIcon?: ReactNode;
}

interface InputVariantProps
  extends BaseInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  variant?: "input";
}

interface TextareaVariantProps
  extends BaseInputProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: "textarea";
}

type LocationInputProps = InputVariantProps | TextareaVariantProps;

export default function LocationInput({
  label,
  optional,
  actionIcon,
  ...props
}: LocationInputProps) {
  
  const paddingClass = actionIcon ? "pr-10" : "";

  const baseClasses =
    `w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${paddingClass}`;

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {optional && <span className="text-gray-400 ml-1">(Optional)</span>}
      </label>

      <div className="relative w-full">
        {props.variant === "textarea" ? (
          <textarea
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={baseClasses}
            rows={4}
          />
        ) : (
          <input
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
            className={baseClasses}
          />
        )}

        {actionIcon && (
          <div className="absolute top-2 right-3">
            {actionIcon}
          </div>
        )}
      </div>
    </div>
  );
}