import * as React from "react";
import { IconProps } from "./types";

export const BoxModel = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L12 2.5C12.8284 2.5 13.5 3.17158 13.5 4V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V4ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V12C1.5 13.3807 2.61929 14.5 4 14.5H12C13.3807 14.5 14.5 13.3807 14.5 12V4C14.5 2.61929 13.3807 1.5 12 1.5L4 1.5ZM5.5 6C5.5 5.72386 5.72386 5.5 6 5.5L10 5.5C10.2761 5.5 10.5 5.72386 10.5 6V10C10.5 10.2761 10.2761 10.5 10 10.5H6C5.72386 10.5 5.5 10.2761 5.5 10V6ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6V10C4.5 10.8284 5.17157 11.5 6 11.5H10C10.8284 11.5 11.5 10.8284 11.5 10V6C11.5 5.17157 10.8284 4.5 10 4.5L6 4.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default BoxModel;
