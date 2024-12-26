import * as React from "react";
import { IconProps } from "./types";

export const ArrowRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.00879 7.99632L13.0088 7.99632M13.0088 7.99632L9.06946 4.10722M13.0088 7.99632L9.09459 11.9105"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowRight;
