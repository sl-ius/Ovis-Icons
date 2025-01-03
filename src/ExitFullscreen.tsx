import * as React from "react";
import { IconProps } from "./types";

export const ExitFullscreen = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 2.5V4.5C5.5 5.05228 5.05228 5.5 4.5 5.5H2.5M5.5 13.5V11.5C5.5 10.9477 5.05228 10.5 4.5 10.5H2.5M10.5 2.5V4.5C10.5 5.05228 10.9477 5.5 11.5 5.5H13.5M10.5 13.5V11.5C10.5 10.9477 10.9477 10.5 11.5 10.5H13.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ExitFullscreen;
