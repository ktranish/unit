import React, { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import Avatar from "./avatar";
import { H3, P, Small } from "./typography";

interface Category {
  name?: string | null;
  link?: string | null;
  id: string;
}

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
  ImgHTMLAttributes<HTMLImageElement> & { link?: string }
>(({ className, link, ...props }, ref) => {
  return (
    <a className="relative w-full" href={link ?? ""}>
      <img
        ref={ref}
        className={cn(
          "aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]",
          className,
        )}
        {...props}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </a>
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

const Author = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    alt?: string;
    src?: string;
    link?: string;
  }
>(({ className, children, alt, src, link, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex items-center gap-x-4", className)}
      {...props}
    >
      <Avatar alt={alt ?? ""} src={src ?? ""} />
      <a href={link ?? ""}>
        <span className="absolute inset-0" />
        <P className="font-semibold">{children}</P>
      </a>
    </div>
  );
});

Author.displayName = "Author"; // Adding a display name for better debugging in React DevTools

const Header = React.forwardRef<
  HTMLHeadingElement,
  Omit<
    React.HTMLAttributes<HTMLHeadingElement> & {
      date: string;
      categories?: Category[];
    },
    "children"
  >
>(({ className, date, categories, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-x-4", className)}
      {...props}
    >
      <time dateTime={date}>
        <Small>{date}</Small>
      </time>
      {categories?.map((category) => (
        <a
          key={category.id}
          href={category.link ?? ""}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1 font-medium hover:bg-gray-100"
        >
          <Small>{category.name}</Small>
        </a>
      ))}
    </div>
  );
});

Header.displayName = "Header"; // Adding a display name for better debugging in React DevTools

export { Author, Container, Description, Header, Image, Title };
