// components/ui/Button.tsx
import clsx from "clsx";
import type { ReactNode } from "react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
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
      "bg-primary hover:bg-transparent transition-all ease-in-out duration-500 text-white hover:text-primary border border-primary",
    secondary:
      "bg-white hover:bg-transparent transition-all duration-500 ease-in-out hover:text-white border border-white",
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
