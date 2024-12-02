import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import { cn } from "../utils/cn";

const Form = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, children, ...props }, ref) => {
  return (
    <form ref={ref} className={cn("space-y-6", className)} {...props}>
      {children}
    </form>
  );
});

Form.displayName = "Form"; // Adding a display name for better debugging in React DevTools

const Label = React.forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ className, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("block text-sm/6 font-medium text-gray-900", className)}
      {...props}
    >
      {children}
    </label>
  );
});

Label.displayName = "Label"; // Adding a display name for better debugging in React DevTools

const Input = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input"; // Adding a display name for better debugging in React DevTools

const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-y-2", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Wrapper.displayName = "Wrapper"; // Adding a display name for better debugging in React DevTools

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button"; // Adding a display name for better debugging in React DevTools

const Info = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm/6 text-gray-500", className)}
      {...props}
    >
      {children}
    </p>
  );
});

Info.displayName = "Info"; // Adding a display name for better debugging in React DevTools

export { Button, Form, Info, Input, Label, Wrapper };
