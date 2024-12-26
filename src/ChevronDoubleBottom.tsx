import * as React from "react";
import { IconProps } from "./types";

export const ChevronDoubleBottom = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9.06067L8.1109 13L4.1967 9.0858M12 3.06067L8.1109 7L4.1967 3.0858"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ChevronDoubleBottom;
