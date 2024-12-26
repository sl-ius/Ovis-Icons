import * as React from "react";
import { IconProps } from "./types";

export const ChevronDoubleRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.06067 4L13 7.8891L9.0858 11.8033M3.06067 4L7 7.8891L3.0858 11.8033"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ChevronDoubleRight;
