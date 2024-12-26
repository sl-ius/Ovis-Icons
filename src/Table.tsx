import * as React from "react";
import { IconProps } from "./types";

export const Table = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L7.5 2.5V5.5H2.5V4ZM2.5 6.5H7.5V9.5H2.5V8V6.5ZM2.5 10.5H7.5V13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V10.5ZM8.5 13.5V10.5H13.5V12C13.5 12.8284 12.8284 13.5 12 13.5H8.5ZM13.5 9.5H8.5V6.5H13.5V8V9.5ZM13.5 5.5H8.5V2.5L12 2.5C12.8284 2.5 13.5 3.17158 13.5 4V5.5ZM8.00155 1.5L12 1.5C13.3807 1.5 14.5 2.61929 14.5 4V6V8V10V12C14.5 13.3807 13.3807 14.5 12 14.5H8H4C2.61929 14.5 1.5 13.3807 1.5 12V10V8V6V4C1.5 2.61929 2.61929 1.5 4 1.5L7.99845 1.5C7.99897 1.5 7.99948 1.5 8 1.5"
          fill={color}
        />
      </svg>
    );
  },
);

export default Table;
