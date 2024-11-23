import React, { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { H3, P } from "./typography";

const Container = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        "flex max-w-xl flex-col items-start justify-between gap-y-4",
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

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { link?: string }
>(({ className, children, link, ...props }, ref) => {
  return (
    <H3 ref={ref} className={cn("hover:text-gray-600", className)} {...props}>
      <a href={link ?? ""}>{children}</a>
    </H3>
  );
});

Title.displayName = "Title"; // Adding a display name for better debugging in React DevTools

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <P ref={ref} className={cn("prose line-clamp-3", className)} {...props}>
      {children}
    </P>
  );
});

Description.displayName = "Description"; // Adding a display name for better debugging in React DevTools

export { Container, Description, Image, Title };
