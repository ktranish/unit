import React from "react";
import { cn } from "../../utils/cn";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
});

H2.displayName = "H2"; // Adding a display name for better debugging in React DevTools

export default H2;
