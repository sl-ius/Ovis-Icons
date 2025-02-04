import * as React from "react";
import { IconProps } from "./types";

export const Eraser = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.35355 11.5459L13.2426 7.65685C13.6332 7.26633 13.6332 6.63316 13.2426 6.24264L9.70711 2.70711C9.31658 2.31658 8.68342 2.31658 8.29289 2.70711L4.40381 6.59619M9.35355 11.5459L4.40381 6.59619M9.35355 11.5459L7.23223 13.6673C6.84171 14.0578 6.20854 14.0578 5.81802 13.6673L2.28249 10.1317C1.89196 9.7412 1.89196 9.10804 2.28249 8.71751L4.40381 6.59619"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.5 14H13"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Eraser;
