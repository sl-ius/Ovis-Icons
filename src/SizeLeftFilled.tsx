import * as React from "react";
import { IconProps } from "./types";

export const SizeLeftFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.00002 12.2426H12.2427V8L10.1213 10.1213L5.8787 5.87868L8.00002 3.75736H3.75738V8L5.8787 5.87868L10.1213 10.1213L8.00002 12.2426Z"
          fill={color}
        />
        <path
          d="M12.2427 12.2426H8.00002L12.2427 8V12.2426ZM12.2427 12.2426L3.75738 3.75736M3.75738 3.75736V8L8.00002 3.75736H3.75738Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default SizeLeftFilled;
