import React from "react";
import { cn } from "../../utils/cn";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn(
        "text-pretty text-2xl font-medium text-gray-900 sm:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
});

H4.displayName = "H4"; // Adding a display name for better debugging in React DevTools

export default H4;
