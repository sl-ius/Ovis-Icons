import * as React from "react";
import { IconProps } from "./types";

export const PaddingFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2L4 2C2.89543 2 2 2.89543 2 4ZM6 5L10 5C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4L6 4C5.72386 4 5.5 4.22386 5.5 4.5C5.5 4.77614 5.72386 5 6 5ZM5 6C5 5.72386 4.77614 5.5 4.5 5.5C4.22386 5.5 4 5.72386 4 6V10C4 10.2761 4.22386 10.5 4.5 10.5C4.77614 10.5 5 10.2761 5 10V6ZM12 6C12 5.72386 11.7761 5.5 11.5 5.5C11.2239 5.5 11 5.72386 11 6V10C11 10.2761 11.2239 10.5 11.5 10.5C11.7761 10.5 12 10.2761 12 10V6ZM6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H10C10.2761 12 10.5 11.7761 10.5 11.5C10.5 11.2239 10.2761 11 10 11H6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PaddingFilled;
