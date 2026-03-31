"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", children, ...props }, ref) => {
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-4xl",
      lg: "max-w-5xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "blue" | "dark";
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, background = "white", children, ...props }, ref) => {
    const backgrounds = {
      white: "bg-white",
      light: "bg-[#F5F5F5]",
      blue: "bg-[#E8F4F8]",
      dark: "bg-[#3A3A3A] text-white",
    };

    return (
      <section
        ref={ref}
        className={cn("py-20 lg:py-24", backgrounds[background], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Container, Section };
