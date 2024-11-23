import React, { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";

const Container = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        "flex max-w-xl flex-col items-start justify-between",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
});

Container.displayName = "Container"; // Adding a display name for better debugging in React DevTools

const Image = React.forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn(
        "aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]",
        className,
      )}
      {...props}
    />
  );
});

Image.displayName = "Image"; // Adding a display name for better debugging in React DevTools

export { Container, Image };
