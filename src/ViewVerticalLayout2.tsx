import * as React from "react";
import { IconProps } from "./types";

export const ViewVerticalLayout2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.5C2.17157 3.5 1.5 4.17157 1.5 5V11C1.5 11.8284 2.17157 12.5 3 12.5H4V3.5H3ZM4 13.5H5H11H12H13C14.3807 13.5 15.5 12.3807 15.5 11V5C15.5 3.61929 14.3807 2.5 13 2.5H12H11H5H4H3C1.61929 2.5 0.5 3.61929 0.5 5V11C0.5 12.3807 1.61929 13.5 3 13.5H4ZM11 3.5H5V12.5H11V3.5ZM12 12.5H13C13.8284 12.5 14.5 11.8284 14.5 11V5C14.5 4.17157 13.8284 3.5 13 3.5H12V12.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ViewVerticalLayout2;
