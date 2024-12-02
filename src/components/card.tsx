import React, { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import Avatar from "./avatar";
import { H3, P, Small } from "./typography";

const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Grid.displayName = "Grid"; // Adding a display name for better debugging in React DevTools

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
  ImgHTMLAttributes<HTMLImageElement> & {
    a?: React.ElementType<any>;
    link?: string;
  }
>(({ className, link, a: A, ...props }, ref) => {
  return (
    <>
      {A ? (
        <A className="relative w-full" href={link ?? ""}>
          <img
            ref={ref}
            className={cn(
              "aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]",
              className,
            )}
            {...props}
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </A>
      ) : (
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
      )}
    </>
  );
});

Image.displayName = "Image"; // Adding a display name for better debugging in React DevTools

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    a?: React.ElementType<any>;
    link?: string;
  }
>(({ className, children, link, a: A, ...props }, ref) => {
  return (
    <H3 ref={ref} className={cn("hover:text-gray-600", className)} {...props}>
      {A ? (
        <A href={link ?? ""}>{children}</A>
      ) : (
        <a href={link ?? ""}>{children}</a>
      )}
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
    a?: React.ElementType<any>;
    alt?: string;
    src?: string;
    link?: string;
  }
>(({ className, children, alt, src, link, a: A, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex items-center gap-x-4", className)}
      {...props}
    >
      <Avatar alt={alt ?? ""} src={src ?? ""} />
      {A ? (
        <A href={link ?? ""}>
          <span className="absolute inset-0" />
          <P className="font-semibold">{children}</P>
        </A>
      ) : (
        <a href={link ?? ""}>
          <span className="absolute inset-0" />
          <P className="font-semibold">{children}</P>
        </a>
      )}
    </div>
  );
});

Author.displayName = "Author"; // Adding a display name for better debugging in React DevTools

const Header = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-wrap items-center gap-x-4", className)}
      {...props}
    >
      {children}
    </div>
  );
});

Header.displayName = "Header"; // Adding a display name for better debugging in React DevTools

const Time = React.forwardRef<
  HTMLTimeElement,
  Omit<React.HTMLAttributes<HTMLTimeElement>, "children"> & { date: string }
>(({ className, date, ...props }, ref) => {
  return (
    <time ref={ref} className={cn(className)} dateTime={date} {...props}>
      <Small>{date}</Small>
    </time>
  );
});

Time.displayName = "Time"; // Adding a display name for better debugging in React DevTools

export { Author, Container, Description, Grid, Header, Image, Time, Title };
