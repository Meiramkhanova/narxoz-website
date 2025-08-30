// components/ui/Button.tsx
import clsx from "clsx";
import type { ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-xs tracking-wide cursor-pointer";

  const variants: Record<Variant, string> = {
    primary:
      "bg-primary hover:bg-primary/85 transition-all duration-300 text-white hover:bg-primary-700 focus:ring-blue-500",
    secondary: "bg-white hover:bg-white/90 transition-all duration-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-10 py-4 text-sm",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}>
      {children}
    </button>
  );
}
