import * as React from "react";
import { IconProps } from "./types";

export const RunAsAdministrator = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 1.5C1.61929 1.5 0.5 2.61929 0.5 4V5.5V12C0.5 13.3807 1.61929 14.5 3 14.5H8C8.27614 14.5 8.5 14.2761 8.5 14C8.5 13.7239 8.27614 13.5 8 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V6H14.5V9C14.5 9.27614 14.7239 9.5 15 9.5C15.2761 9.5 15.5 9.27614 15.5 9V5.5V4C15.5 2.61929 14.3807 1.5 13 1.5H3ZM14.5 5H1.5V4C1.5 3.17157 2.17157 2.5 3 2.5H13C13.8284 2.5 14.5 3.17157 14.5 4V5ZM9 10.25C9.5 10.25 12 9 12 9C12 9 14.5 10.25 15 10.25C15 11.75 14 15 12 15C10 15 9 11.75 9 10.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default RunAsAdministrator;
