
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed shadow-md";

  // Updated focus ring offset to use the new background color
  const focusRingOffsetStyle = "focus:ring-offset-[var(--color-brand-background)]";

  const variantStyles = {
    primary: "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-darker)] text-[var(--color-brand-text-dark)] focus:ring-[var(--color-brand-primary)]",
    secondary: "bg-[var(--color-brand-secondary)] hover:bg-[var(--color-brand-secondary-darker)] text-white focus:ring-[var(--color-brand-secondary)]",
    danger: "bg-[var(--color-danger)] hover:bg-[var(--color-danger-darker)] text-white focus:ring-[var(--color-danger)]",
    ghost: "bg-transparent hover:bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)] shadow-none",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${focusRingOffsetStyle} ${className || ''}`}
      {...props}
    >
      {icon && <span className="mr-2 -ml-1">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;