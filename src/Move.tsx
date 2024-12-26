import * as React from "react";
import { IconProps } from "./types";

export const Move = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1446)">
          <path
            d="M6 3L8 1M8 1L10 3M8 1V6M13 6L15 8M15 8L13 10M15 8H10M3 6L1 8M1 8L3 10M1 8H6M6 13L8 15M8 15L10 13M8 15V10"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1446">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Move;
