import * as React from "react";
import { IconProps } from "./types";

export const Clock = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.47501C4.39551 1.47501 1.4751 4.39541 1.4751 7.99791C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.99791C14.5209 4.39541 11.6005 1.47501 7.998 1.47501ZM2.4751 7.99791C2.4751 4.9477 4.94779 2.47501 7.998 2.47501C11.0482 2.47501 13.5209 4.9477 13.5209 7.99791C13.5209 11.0481 11.0482 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.99791ZM8.5001 4.5C8.5001 4.22386 8.27624 4 8.0001 4C7.72396 4 7.5001 4.22386 7.5001 4.5V8C7.5001 8.27614 7.72396 8.5 8.0001 8.5H12.0001C12.2762 8.5 12.5001 8.27614 12.5001 8C12.5001 7.72386 12.2762 7.5 12.0001 7.5H8.5001V4.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Clock;
