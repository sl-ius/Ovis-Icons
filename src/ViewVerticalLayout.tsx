import * as React from "react";
import { IconProps } from "./types";

export const ViewVerticalLayout = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.5C2.17157 3.5 1.5 4.17157 1.5 5V11C1.5 11.8284 2.17157 12.5 3 12.5H5V3.5H3ZM5 13.5H6H10H11H13C14.3807 13.5 15.5 12.3807 15.5 11V5C15.5 3.61929 14.3807 2.5 13 2.5H11H10H6H5H3C1.61929 2.5 0.5 3.61929 0.5 5V11C0.5 12.3807 1.61929 13.5 3 13.5H5ZM10 3.5H6V12.5H10V3.5ZM11 12.5H13C13.8284 12.5 14.5 11.8284 14.5 11V5C14.5 4.17157 13.8284 3.5 13 3.5H11V12.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ViewVerticalLayout;
