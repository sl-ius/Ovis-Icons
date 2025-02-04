import * as React from "react";
import { IconProps } from "./types";

export const ArrowTopRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.46447 11.5355L11.5355 4.46444M11.5355 4.46444L6.01782 4.5M11.5355 4.46444L11.5178 9.99997"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowTopRight;
