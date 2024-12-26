import * as React from "react";
import { IconProps } from "./types";

export const WifiLow = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.00003 13.2311L6.11768 11.4076C6.32356 11.0939 6.98826 10.4605 8.00003 10.437C9.01179 10.4135 9.6765 11.0743 9.88238 11.4076L8.00003 13.2311Z"
          fill={color}
          stroke="black"
          stroke-width="0.0588235"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default WifiLow;
