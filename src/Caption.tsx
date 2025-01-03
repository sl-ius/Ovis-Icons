import * as React from "react";
import { IconProps } from "./types";

export const Caption = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4.5C2.17157 4.5 1.5 5.17158 1.5 6V10C1.5 10.8284 2.17157 11.5 3 11.5H13C13.8284 11.5 14.5 10.8284 14.5 10V6C14.5 5.17158 13.8284 4.5 13 4.5H3ZM0.5 6C0.5 4.61929 1.61929 3.5 3 3.5H13C14.3807 3.5 15.5 4.61929 15.5 6V10C15.5 11.3807 14.3807 12.5 13 12.5H3C1.61929 12.5 0.5 11.3807 0.5 10V6ZM4.5 6.5C4.5 6.22386 4.72386 6 5 6H7C7.27614 6 7.5 6.22386 7.5 6.5C7.5 6.77615 7.27614 7 7 7H5.5V9H7C7.27614 9 7.5 9.22386 7.5 9.5C7.5 9.77614 7.27614 10 7 10H5C4.72386 10 4.5 9.77614 4.5 9.5V6.5ZM9 6C8.72386 6 8.5 6.22386 8.5 6.5V9.5C8.5 9.77614 8.72386 10 9 10H11C11.2761 10 11.5 9.77614 11.5 9.5C11.5 9.22386 11.2761 9 11 9H9.5V7H11C11.2761 7 11.5 6.77615 11.5 6.5C11.5 6.22386 11.2761 6 11 6H9Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Caption;
