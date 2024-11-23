import React, { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";

/**
 * @see https://github.com/jsx-eslint/eslint-plugin-react/issues/3284#issuecomment-2021754931
 */
const Avatar = React.forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
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
