import * as React from "react";
import { IconProps } from "./types";

export const Grid = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 8V4C2 2.89543 2.89543 2 4 2L8 2M2 8V12C2 13.1046 2.89543 14 4 14H8M2 8L14 8M14 8V12C14 13.1046 13.1046 14 12 14H8M14 8V4C14 2.89543 13.1046 2 12 2L8 2M8 2V14"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Grid;
