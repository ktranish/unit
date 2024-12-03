import React from "react";
import { cn } from "../utils/cn";

const Ping = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "size-10 rounded-full border-4 motion-safe:animate-ping",
        className,
      )}
      {...props}
    />
  );
});

Ping.displayName = "Ping"; // Adding a display name for better debugging in React DevTools

export default Ping;
