import * as React from "react";
import { IconProps } from "./types";

export const WidthFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 11L2 8L5 5L5 8L11 8L11 5L14 8L11 11L11 8L5 8L5 11Z"
          fill={color}
        />
        <path
          d="M2 8L5 11L5 5L2 8ZM2 8L14 8M14 8L11 11L11 5L14 8Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default WidthFilled;