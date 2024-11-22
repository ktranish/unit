import React from "react";
import { cn } from "../../utils/cn";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

H3.displayName = "H3"; // Adding a display name for better debugging in React DevTools

export default H3;
