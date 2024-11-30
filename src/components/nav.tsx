import React from "react";
import { cn } from "../utils/cn";

const Left = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("text-sm/6 font-semibold text-gray-900", className)}
      {...props}
    >
      <span aria-hidden="true">&larr;</span> &nbsp; {children}
    </span>
  );
});

Left.displayName = "Left"; // Adding a display name for better debugging in React DevTools

const Right = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("text-sm/6 font-semibold text-gray-900", className)}
      {...props}
    >
      {children} &nbsp; <span aria-hidden="true">&rarr;</span>
    </span>
  );
});

Right.displayName = "Right"; // Adding a display name for better debugging in React DevTools

export { Left, Right };
