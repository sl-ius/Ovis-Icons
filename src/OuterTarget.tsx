import * as React from "react";
import { IconProps } from "./types";

export const OuterTarget = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1221)">
          <path
            d="M7.998 14.0208C11.3243 14.0208 14.0209 11.3242 14.0209 7.99791C14.0209 4.67156 11.3243 1.97501 7.998 1.97501C4.67165 1.97501 1.9751 4.67156 1.9751 7.99791C1.9751 11.3242 4.67165 14.0208 7.998 14.0208Z"
            stroke="black"
            stroke-width="0.95"
          />
          <path
            d="M0.5 8L5.5 8"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 15.5L8 10.5"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 8L15.5 8"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 5.5L8 0.5"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1221">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default OuterTarget;
