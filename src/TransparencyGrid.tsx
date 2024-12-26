import * as React from "react";
import { IconProps } from "./types";

export const TransparencyGrid = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1325)">
          <path d="M0.5 0.5H3.5V3.5H0.5V0.5Z" fill={color} fill-opacity="0.5" />
          <path d="M0.5 6.5H3.5V9.5H0.5V6.5Z" fill={color} fill-opacity="0.5" />
          <path
            d="M0.5 12.5H3.5V15.5H0.5V12.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path d="M3.5 3.5H6.5V6.5H3.5V3.5Z" fill={color} fill-opacity="0.5" />
          <path
            d="M3.5 9.5H6.5V12.5H3.5V9.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path
            d="M12.5 0.5H15.5V3.5H12.5V0.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path
            d="M12.5 6.5H15.5V9.5H12.5V6.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path
            d="M12.5 12.5H15.5V15.5H12.5V12.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path d="M6.5 0.5H9.5V3.5H6.5V0.5Z" fill={color} fill-opacity="0.5" />
          <path d="M6.5 6.5H9.5V9.5H6.5V6.5Z" fill={color} fill-opacity="0.5" />
          <path
            d="M6.5 12.5H9.5V15.5H6.5V12.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path
            d="M9.5 3.5H12.5V6.5H9.5V3.5Z"
            fill={color}
            fill-opacity="0.5"
          />
          <path
            d="M9.5 9.5H12.5V12.5H9.5V9.5Z"
            fill={color}
            fill-opacity="0.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1325">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default TransparencyGrid;
