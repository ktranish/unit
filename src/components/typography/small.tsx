import React from "react";
import { cn } from "../../utils/cn";

const Small = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <small
        ref={ref}
        className={cn("mt-1 text-xs/5 text-gray-500", className)}
        {...props}
      >
        {children}
      </small>
    );
  },
);

Small.displayName = "Small"; // Adding a display name for better debugging in React DevTools

export default Small;
