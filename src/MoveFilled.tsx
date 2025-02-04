import * as React from "react";
import { IconProps } from "./types";

export const MoveFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1445)">
          <path d="M8 1L6 3H8H10L8 1Z" fill={color} />
          <path d="M15 8L13 6V8V10L15 8Z" fill={color} />
          <path d="M1 8L3 6L3 8V10L1 8Z" fill={color} />
          <path d="M8 15L6 13H8H10L8 15Z" fill={color} />
          <path
            d="M8 3H10L8 1L6 3H8ZM8 3V6M13 8V10L15 8L13 6V8ZM13 8H10M3 8V10L1 8L3 6L3 8ZM3 8H6M8 13H10L8 15L6 13H8ZM8 13V10"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1445">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MoveFilled;
