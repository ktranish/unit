import React from "react";
import { cn } from "../../utils/cn";

const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("prose text-lg/8 text-gray-600", className)}
      {...props}
    >
      {children}
    </p>
  );
});

P.displayName = "P"; // Adding a display name for better debugging in React DevTools

export default P;
