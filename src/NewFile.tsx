import * as React from "react";
import { IconProps } from "./types";

export const NewFile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 4C3.5 3.17157 4.17157 2.5 5 2.5H9.54007C9.68603 2.5 9.8247 2.56378 9.91969 2.6746L12.3796 5.54453C12.4573 5.63515 12.5 5.75057 12.5 5.86992V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V4ZM5 1.5C3.61929 1.5 2.5 2.61929 2.5 4V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V5.86992C13.5 5.51186 13.3719 5.1656 13.1389 4.89374L10.6789 2.02381C10.394 1.69134 9.97795 1.5 9.54007 1.5H5ZM8.5 6C8.5 5.72386 8.27614 5.5 8 5.5C7.72386 5.5 7.5 5.72386 7.5 6V7.5H6C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27614 5.72386 8.5 6 8.5H7.5V10C7.5 10.2761 7.72386 10.5 8 10.5C8.27614 10.5 8.5 10.2761 8.5 10V8.5H10C10.2761 8.5 10.5 8.27614 10.5 8C10.5 7.72386 10.2761 7.5 10 7.5H8.5V6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default NewFile;
