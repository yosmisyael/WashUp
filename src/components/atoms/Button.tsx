import React, {ButtonHTMLAttributes, ReactNode} from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = 'primary',
                                           icon,
                                           className = '',
                                           ...props
                                       }: ButtonProps) => {
    const baseStyles: string =
        'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 font-semibold text-sm shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer';

    const variantStyles: Record<'primary' | 'secondary', string> = {
        primary:
            'bg-primary text-white hover:bg-indigo-700 focus:ring-indigo-500',
        secondary:
            'bg-white text-cyan-700 border border-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    return (
        <button className={combinedStyles} {...props}>
            {/* Render the icon if it's provided */}
            {icon && <span className="inline-block">{icon}</span>}

            {/* Button text */}
            <span>{children}</span>
        </button>
    );
};

export default Button;