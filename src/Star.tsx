import * as React from "react";
import { IconProps } from "./types";

export const Star = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 11L12 14L10.5 9.5L14.5 6.5H10L8 1.5L6.5 6.5H1.5L5.5 9.5L4 14L8 11Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Star;
