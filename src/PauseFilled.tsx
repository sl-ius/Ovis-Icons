import * as React from "react";
import { IconProps } from "./types";

export const PauseFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 1.5C3.17157 1.5 2.5 2.17157 2.5 3V13C2.5 13.8284 3.17157 14.5 4 14.5H6C6.82843 14.5 7.5 13.8284 7.5 13V3C7.5 2.17158 6.82843 1.5 6 1.5L4 1.5ZM8.5 3C8.5 2.17157 9.17157 1.5 10 1.5L12 1.5C12.8284 1.5 13.5 2.17158 13.5 3V13C13.5 13.8284 12.8284 14.5 12 14.5H10C9.17157 14.5 8.5 13.8284 8.5 13V3Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PauseFilled;
