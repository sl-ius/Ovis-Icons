import * as React from "react";
import { IconProps } from "./types";

export const Load = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99998 2V5M3.75734 3.75736L5.87866 5.87868M2 7.99999H5M7.99998 11V14M10.1213 10.1213L12.2426 12.2426M11 8H14M3.75734 12.2426L5.87866 10.1213M10.1213 5.87868L12.2426 3.75736"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Load;
