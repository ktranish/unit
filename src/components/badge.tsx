import React from "react";
import { cn } from "utils/cn";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium hover:bg-gray-100",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge"; // Adding a display name for better debugging in React DevTools

export default Badge;
