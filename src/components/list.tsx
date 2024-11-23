import React from "react";
import { cn } from "../utils/cn";

const UL = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn("prose divide-y divide-gray-100", className)}
      {...props}
    >
      {children}
    </ul>
  );
});

UL.displayName = "UL"; // Adding a display name for better debugging in React DevTools

const OL = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, children, ...props }, ref) => {
  return (
    <ol
      ref={ref}
      className={cn("prose divide-y divide-gray-100", className)}
      {...props}
    >
      {children}
    </ol>
  );
});

OL.displayName = "OL"; // Adding a display name for better debugging in React DevTools

const LI = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("flex justify-between gap-x-6 py-5", className)}
        {...props}
      >
        {children}
      </li>
    );
  },
);

LI.displayName = "LI"; // Adding a display name for better debugging in React DevTools

export { LI, OL, UL };
