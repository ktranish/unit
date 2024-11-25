import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { cn } from "../utils/cn";
import { Navigation } from "./tabs";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    breadcrumbs?: Omit<Navigation, "current">[];
  }
>(({ className, breadcrumbs, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn("flex", className)}
      {...props}
    >
      <ol role="list" className="flex items-center space-x-4">
        {breadcrumbs?.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <a
                href={item.href}
                className="mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {item.name}
              </a>
              {index != (breadcrumbs?.length ?? 0) - 1 && (
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-gray-400"
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = "Breadcrumb"; // Adding a display name for better debugging in React DevTools

export default Breadcrumb;
