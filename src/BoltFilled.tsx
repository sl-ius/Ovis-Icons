import * as React from "react";
import { IconProps } from "./types";

export const BoltFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.18858 7.93646L11.1886 2.02724L4 8.93646L7.59429 7.93646L4.59429 13.8457L12.7829 6.93646L9.18858 7.93646Z"
          fill={color}
          stroke="black"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default BoltFilled;
