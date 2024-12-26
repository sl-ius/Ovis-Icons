import * as React from "react";
import { IconProps } from "./types";

export const Ease = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 3H4.5C10.625 3.83333 6.25 13 12.375 13C14.475 13 15 13 15 13"
          stroke="black"
          stroke-linecap="round"
        />
      </svg>
    );
  },
);

export default Ease;
