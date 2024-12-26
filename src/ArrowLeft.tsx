import * as React from "react";
import { IconProps } from "./types";

export const ArrowLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.0088 7.99632L3.00879 7.99632M3.00879 7.99632L6.94812 4.10722M3.00879 7.99632L6.92299 11.9105"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowLeft;
