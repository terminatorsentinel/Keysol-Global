"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", showArrow = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#0052CC] text-white hover:bg-[#0043A7] focus:ring-[#0052CC] rounded-full",
      secondary: "bg-[#E8F4F8] text-[#454648] hover:bg-[#D1E8F0] focus:ring-[#0052CC] rounded-lg",
      outline: "border-2 border-[#454648] text-[#454648] hover:bg-[#454648] hover:text-white focus:ring-[#454648] rounded-lg",
      ghost: "text-[#454648] hover:bg-[#F5F5F5] focus:ring-[#454648] rounded-lg",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {showArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
