import * as React from "react";
import { IconProps } from "./types";

export const Reader = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 4C3.5 3.17157 4.17157 2.5 5 2.5H11.5C12.0523 2.5 12.5 2.94772 12.5 3.5V5.5V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V4ZM5 1.5C3.61929 1.5 2.5 2.61929 2.5 4V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V5.5V3.5C13.5 2.39543 12.6046 1.5 11.5 1.5H5ZM5 5C4.72386 5 4.5 5.22386 4.5 5.5C4.5 5.77614 4.72386 6 5 6H7.25H9.5C9.77614 6 10 5.77614 10 5.5C10 5.22386 9.77614 5 9.5 5H7.25H5ZM5 7.5C4.72386 7.5 4.5 7.72386 4.5 8C4.5 8.27614 4.72386 8.5 5 8.5H11.125C11.4011 8.5 11.625 8.27614 11.625 8C11.625 7.72386 11.4011 7.5 11.125 7.5H5ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8.5C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10H5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Reader;
