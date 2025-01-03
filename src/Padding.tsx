import * as React from "react";
import { IconProps } from "./types";

export const Padding = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L12 2.5C12.8284 2.5 13.5 3.17158 13.5 4V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V4ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V12C1.5 13.3807 2.61929 14.5 4 14.5H12C13.3807 14.5 14.5 13.3807 14.5 12V4C14.5 2.61929 13.3807 1.5 12 1.5L4 1.5ZM6 5L10 5C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4L6 4C5.72386 4 5.5 4.22386 5.5 4.5C5.5 4.77614 5.72386 5 6 5ZM5 6C5 5.72386 4.77614 5.5 4.5 5.5C4.22386 5.5 4 5.72386 4 6V10C4 10.2761 4.22386 10.5 4.5 10.5C4.77614 10.5 5 10.2761 5 10V6ZM12 6C12 5.72386 11.7761 5.5 11.5 5.5C11.2239 5.5 11 5.72386 11 6V10C11 10.2761 11.2239 10.5 11.5 10.5C11.7761 10.5 12 10.2761 12 10V6ZM6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H10C10.2761 12 10.5 11.7761 10.5 11.5C10.5 11.2239 10.2761 11 10 11H6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Padding;
