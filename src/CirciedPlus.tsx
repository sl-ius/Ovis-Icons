import * as React from "react";
import { IconProps } from "./types";

export const CirciedPlus = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.475C4.39551 1.475 1.4751 4.39541 1.4751 7.9979C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.9979C14.5209 4.39541 11.6005 1.475 7.998 1.475ZM2.4751 7.9979C2.4751 4.94769 4.94779 2.475 7.998 2.475C11.0482 2.475 13.5209 4.94769 13.5209 7.9979C13.5209 11.0481 11.0482 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.9979ZM8.5001 5C8.5001 4.72386 8.27624 4.5 8.0001 4.5C7.72396 4.5 7.5001 4.72386 7.5001 5V7.5H5.0001C4.72396 7.5 4.5001 7.72386 4.5001 8C4.5001 8.27614 4.72396 8.5 5.0001 8.5H7.5001V11C7.5001 11.2761 7.72396 11.5 8.0001 11.5C8.27624 11.5 8.5001 11.2761 8.5001 11V8.5H11.0001C11.2762 8.5 11.5001 8.27614 11.5001 8C11.5001 7.72386 11.2762 7.5 11.0001 7.5H8.5001V5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CirciedPlus;
