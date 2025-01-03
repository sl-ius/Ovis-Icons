import * as React from "react";
import { IconProps } from "./types";

export const HeartRate = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.5 8.5H2.86667L4.26667 5.5L6.13333 10.5L8 3L9.4 12L11.7333 5.5L13.1333 8.5H15.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default HeartRate;
