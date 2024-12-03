import React from "react";
import { cn } from "../utils/cn";
import { Small } from "./typography";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "rounded-full bg-gray-50 px-3 py-1 font-medium hover:bg-gray-100",
        className,
      )}
      {...props}
    >
      <Small>{children}</Small>
    </span>
  );
});

Badge.displayName = "Badge"; // Adding a display name for better debugging in React DevTools

export default Badge;
