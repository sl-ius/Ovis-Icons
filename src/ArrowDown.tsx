import * as React from "react";
import { IconProps } from "./types";

export const ArrowDown = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.02138 3.00887V13.0089M8.02138 13.0089L11.9105 9.06954M8.02138 13.0089L4.10718 9.09467"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDown;
