import * as React from "react";
import { IconProps } from "./types";

export const ArrowBottomLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.5534 4.48226L4.48229 11.5533M4.48229 11.5533L10 11.5178M4.48229 11.5533L4.50003 6.01779"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowBottomLeft;
