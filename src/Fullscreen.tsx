import * as React from "react";
import { IconProps } from "./types";

export const Fullscreen = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 5.5V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H5.5M2.5 10.5V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5H5.5M10.5 2.5H12.5C13.0523 2.5 13.5 2.94772 13.5 3.5V5.5M10.5 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V10.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Fullscreen;
