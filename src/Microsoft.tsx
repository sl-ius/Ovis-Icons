import * as React from "react";
import { IconProps } from "./types";

export const Microsoft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 2V7H7V2L2 2ZM2 9V14H7V9L2 9ZM9 7V2L14 2V7H9ZM9 9V14H14V9L9 9Z"
          fill={color}
        />
        <path
          d="M2 7H1.5V7.5H2V7ZM2 2L2 1.5L1.5 1.5V2H2ZM7 7V7.5H7.5V7H7ZM7 2H7.5V1.5L7 1.5L7 2ZM2 14H1.5V14.5H2V14ZM2 9L2 8.5L1.5 8.5V9H2ZM7 14V14.5H7.5V14H7ZM7 9H7.5V8.5L7 8.5L7 9ZM9 2L9 1.5L8.5 1.5V2H9ZM9 7H8.5V7.5H9V7ZM14 2H14.5V1.5L14 1.5L14 2ZM14 7V7.5H14.5V7H14ZM9 14H8.5V14.5H9V14ZM9 9L9 8.5L8.5 8.5V9H9ZM14 14V14.5H14.5V14H14ZM14 9H14.5V8.5L14 8.5L14 9ZM2.5 7V2H1.5V7H2.5ZM7 6.5H2V7.5H7V6.5ZM6.5 2V7H7.5V2H6.5ZM2 2.5L7 2.5L7 1.5L2 1.5L2 2.5ZM2.5 14V9H1.5V14H2.5ZM7 13.5H2V14.5H7V13.5ZM6.5 9V14H7.5V9H6.5ZM2 9.5L7 9.5L7 8.5L2 8.5L2 9.5ZM8.5 2V7H9.5V2H8.5ZM14 1.5L9 1.5L9 2.5L14 2.5L14 1.5ZM14.5 7V2H13.5V7H14.5ZM9 7.5H14V6.5H9V7.5ZM9.5 14V9H8.5V14H9.5ZM14 13.5H9V14.5H14V13.5ZM13.5 9V14H14.5V9H13.5ZM9 9.5L14 9.5L14 8.5L9 8.5L9 9.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Microsoft;
