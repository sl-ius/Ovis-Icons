import * as React from "react";
import { IconProps } from "./types";

export const ArrowTopLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5534 11.5355L4.48229 4.46444M4.48229 4.46444L10 4.5M4.48229 4.46444L4.50003 9.99997"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowTopLeft;
