import React from "react";
import { cn } from "../utils/cn";

const Avatar = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn("size-12 flex-none rounded-full bg-gray-50", className)}
      {...props}
    />
  );
});

Avatar.displayName = "Avatar"; // Adding a display name for better debugging in React DevTools

export default Avatar;
