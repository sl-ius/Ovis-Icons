import * as React from "react";
import { IconProps } from "./types";

export const CirciedMinus = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.998 1.475C4.39551 1.475 1.4751 4.39541 1.4751 7.9979C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.9979C14.5209 4.39541 11.6005 1.475 7.998 1.475ZM2.4751 7.9979C2.4751 4.94769 4.94779 2.475 7.998 2.475C11.0482 2.475 13.5209 4.94769 13.5209 7.9979C13.5209 11.0481 11.0482 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.9979ZM5.0001 7.5C4.72396 7.5 4.5001 7.72386 4.5001 8C4.5001 8.27614 4.72396 8.5 5.0001 8.5H8.0001H11.0001C11.2762 8.5 11.5001 8.27614 11.5001 8C11.5001 7.72386 11.2762 7.5 11.0001 7.5H8.0001H5.0001Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CirciedMinus;
