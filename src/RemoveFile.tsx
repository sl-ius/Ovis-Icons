import * as React from "react";
import { IconProps } from "./types";

export const RemoveFile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 4C3.5 3.17157 4.17157 2.5 5 2.5H9.08013C9.51802 2.5 9.93404 2.69134 10.219 3.02381L12.1389 5.26366C12.3719 5.53553 12.5 5.88178 12.5 6.23985V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V4ZM5 1.5C3.61929 1.5 2.5 2.61929 2.5 4V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V6.23985C13.5 5.64307 13.2865 5.06598 12.8981 4.61287L10.9783 2.37302C10.5033 1.81891 9.80994 1.5 9.08013 1.5H5ZM6 7.5C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27614 5.72386 8.5 6 8.5H10C10.2761 8.5 10.5 8.27614 10.5 8C10.5 7.72386 10.2761 7.5 10 7.5H6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default RemoveFile;
