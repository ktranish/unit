import React from "react";
import { cn } from "../utils/cn";

const UL = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn("divide-y divide-gray-100", className)}
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
      className={cn("divide-y divide-gray-100", className)}
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

const ItemLeft = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex min-w-0 gap-x-4", className)} {...props}>
      {children}
    </div>
  );
});

ItemLeft.displayName = "ItemLeft"; // Adding a display name for better debugging in React DevTools

const ItemRight = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "hidden shrink-0 sm:flex sm:flex-col sm:items-end",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ItemRight.displayName = "ItemRight"; // Adding a display name for better debugging in React DevTools

export { ItemLeft, ItemRight, LI, OL, UL };
