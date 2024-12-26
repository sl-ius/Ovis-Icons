import * as React from "react";
import { IconProps } from "./types";

export const ArrowUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.02138 13.0089L8.02138 3.00887M8.02138 3.00887L11.9105 6.9482M8.02138 3.00887L4.10718 6.92308"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowUp;
