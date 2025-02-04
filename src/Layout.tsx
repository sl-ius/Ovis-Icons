import * as React from "react";
import { IconProps } from "./types";

export const Layout = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V8V12C2.5 12.8284 3.17157 13.5 4 13.5H5.5V2.5L4 2.5ZM6.5 2.5V13.5H8H9.5V2.5L8 2.5L6.5 2.5ZM9.99821 1.5L8 1.5L6.0011 1.5H6H5.9989H4C2.61929 1.5 1.5 2.61929 1.5 4V8V12C1.5 13.3807 2.61929 14.5 4 14.5H6H8H10H12C13.3807 14.5 14.5 13.3807 14.5 12V8V4C14.5 2.61929 13.3807 1.5 12 1.5L10.0018 1.5C10.0012 1.5 10.0006 1.5 10 1.5C9.9994 1.5 9.99881 1.5 9.99821 1.5ZM10.5 2.5V13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V8V4C13.5 3.17158 12.8284 2.5 12 2.5L10.5 2.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Layout;
