import * as React from "react";
import { IconProps } from "./types";

export const Link = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        {...props}
        ref={forwardedRef}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 6.08927V9.51784C4.5 14.9464 11.5 14.875 11.5 9.44643V4.94643C11.5 1.01787 6.5 1.01785 6.5 4.94642V9.51784C6.5 11.9464 9.5 11.9464 9.5 9.44642V6.08927"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Link;
