import * as React from "react";
import { IconProps } from "./types";

export const File = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2H5C3.89543 2 3 2.89543 3 4V12C3 13.1046 3.89543 14 5 14H11C12.1046 14 13 13.1046 13 12V5.5M10 2L13 5.5M10 2V5.5H13"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default File;
