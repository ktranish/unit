import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { cn } from "../utils/cn";
import { Navigation } from "./tabs";

const Item = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("text-sm/6 font-semibold text-gray-900", className)}
      {...props}
    >
      {children}
    </span>
  );
});

Item.displayName = "Item"; // Adding a display name for better debugging in React DevTools

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

const Dropdown: React.FC<{
  children: React.ReactNode;
  navigation: Omit<Navigation, "current">[];
  wrapper: React.ReactElement;
}> = ({ children, navigation, wrapper }) => {
  return (
    <PopoverGroup className="hidden lg:block">
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
          {children}
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 flex-none text-gray-400"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {navigation.map((item) =>
            React.cloneElement(
              wrapper,
              { key: item.name, href: item.href },
              <Item>{item.name}</Item>,
            ),
          )}
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
};

Dropdown.displayName = "Dropdown"; // Adding a display name for better debugging in React DevTools

export { Dropdown, Left, Right };
