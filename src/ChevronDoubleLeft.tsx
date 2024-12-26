import * as React from "react";
import { IconProps } from "./types";

export const ChevronDoubleLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.93933 4L3 7.8891L6.9142 11.8033M12.9393 4L9 7.8891L12.9142 11.8033"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ChevronDoubleLeft;
