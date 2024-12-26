import * as React from "react";
import { IconProps } from "./types";

export const ViewHalfGridLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.5C2.17157 3.5 1.5 4.17157 1.5 5V7.5H7.5V3.5H3ZM8.5 7.5V8.5V12.5H13C13.8284 12.5 14.5 11.8284 14.5 11V5C14.5 4.17157 13.8284 3.5 13 3.5H8.5V7.5ZM7.5 8.5H1.5V11C1.5 11.8284 2.17157 12.5 3 12.5H7.5V8.5ZM0.5 8.5V7.5V5C0.5 3.61929 1.61929 2.5 3 2.5H7.5H8.5H13C14.3807 2.5 15.5 3.61929 15.5 5V11C15.5 12.3807 14.3807 13.5 13 13.5H8.5H7.5H3C1.61929 13.5 0.5 12.3807 0.5 11V8.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ViewHalfGridLeft;
