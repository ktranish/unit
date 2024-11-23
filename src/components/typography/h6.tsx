import React from "react";
import { cn } from "../../utils/cn";

const H6 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h6
      ref={ref}
      className={cn("text-sm/6 text-gray-900", className)}
      {...props}
    >
      {children}
    </h6>
  );
});

H6.displayName = "H6"; // Adding a display name for better debugging in React DevTools

export default H6;
