import * as React from "react";
import { IconProps } from "./types";

export const ChevronDoubleTop = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6.93933L8.1109 3L4.1967 6.9142M12 12.9393L8.1109 9L4.1967 12.9142"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ChevronDoubleTop;
