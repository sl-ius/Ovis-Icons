import * as React from "react";
import { IconProps } from "./types";

export const ArrowBottomRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.46447 4.48226L11.5355 11.5533M11.5355 11.5533L6.01782 11.5178M11.5355 11.5533L11.5178 6.01779"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowBottomRight;
