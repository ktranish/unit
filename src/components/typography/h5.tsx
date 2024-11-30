import React from "react";
import { cn } from "../../utils/cn";

const H5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn(
        "text-pretty text-xl font-medium text-gray-900 sm:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  );
});

H5.displayName = "H5"; // Adding a display name for better debugging in React DevTools

export default H5;
