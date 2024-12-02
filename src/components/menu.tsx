import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Item as NavItem } from "./nav";
import { Navigation } from "./tabs";

const X = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("-m-2.5 rounded-md p-2.5 text-gray-700", className)}
      {...props}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon aria-hidden="true" className="size-6" />
    </button>
  );
});

X.displayName = "X"; // Adding a display name for better debugging in React DevTools

const Bar = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
        className,
      )}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="size-6" />
    </button>
  );
});

Bar.displayName = "Bar"; // Adding a display name for better debugging in React DevTools

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    a?: React.ElementType<any>;
    brand?: React.ReactNode;
  }
>(({ className, children, a: A, brand, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {A ? (
        <A href="/" className="-m-1.5 p-1.5">
          <NavItem>{brand}</NavItem>
        </A>
      ) : (
        <a href="/" className="-m-1.5 p-1.5">
          <NavItem>{brand}</NavItem>
        </a>
      )}
      {children}
    </div>
  );
});

Header.displayName = "Header"; // Adding a display name for better debugging in React DevTools

const Container: React.FC<{
  children?: React.ReactNode;
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        {children}
      </DialogPanel>
    </Dialog>
  );
};

Container.displayName = "Container"; // Adding a display name for better debugging in React DevTools

const Item = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "-mx-3 block rounded-lg px-3 py-2.5 text-left text-base/7 font-semibold text-gray-900 hover:bg-gray-50",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Item.displayName = "Item"; // Adding a display name for better debugging in React DevTools

const Dropdown: React.FC<{
  a?: React.ElementType<any>;
  children?: React.ReactNode;
  navigation: Omit<Navigation, "current">[];
}> = ({ a: A, children, navigation }) => {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
        {children}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 flex-none group-data-[open]:rotate-180"
        />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as={A ? (A as "a") : "a"}
            href={item.href}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
};

Dropdown.displayName = "Dropdown"; // Adding a display name for better debugging in React DevTools

export { Bar, Container, Dropdown, Header, Item, X };
