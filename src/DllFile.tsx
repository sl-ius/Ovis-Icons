import * as React from "react";
import { IconProps } from "./types";

export const DllFile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 4C3.5 3.17157 4.17157 2.5 5 2.5H9.54007C9.68603 2.5 9.8247 2.56378 9.91969 2.6746L12.3796 5.54453C12.4573 5.63515 12.5 5.75057 12.5 5.86992V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V4ZM5 1.5C3.61929 1.5 2.5 2.61929 2.5 4V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V5.86992C13.5 5.51186 13.3719 5.1656 13.1389 4.89374L10.6789 2.02381C10.394 1.69134 9.97795 1.5 9.54007 1.5H5ZM6.98563 9.5C6.98563 8.58496 6.43016 8 5.51903 8H4.5V11H5.51903C6.43016 11 6.98563 10.415 6.98563 9.5ZM6.32626 9.5C6.32626 10.0515 6.03453 10.4109 5.51903 10.4109H5.15138V8.58914H5.51503C6.03453 8.58914 6.32626 8.94847 6.32626 9.5ZM7.97718 8H7.30982V11H9.25995V10.4025H7.97718V8ZM9.54986 8H10.2172V10.4025H11.5V11H9.54986V8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DllFile;
