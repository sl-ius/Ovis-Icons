import * as React from "react";
import { IconProps } from "./types";

export const CaretSortFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M8 3L5 6H11L8 3Z" fill={color} />
        <path d="M8 13L5 10H11L8 13Z" fill={color} />
        <path
          d="M8 3L5 6H11L8 3Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 13L5 10H11L8 13Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default CaretSortFilled;
