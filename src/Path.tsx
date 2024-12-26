import * as React from "react";
import { IconProps } from "./types";

export const Path = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H13C13.8284 3.5 14.5 4.17157 14.5 5V11C14.5 11.8284 13.8284 12.5 13 12.5H3C2.17157 12.5 1.5 11.8284 1.5 11V5ZM3 2.5C1.61929 2.5 0.5 3.61929 0.5 5V11C0.5 12.3807 1.61929 13.5 3 13.5H13C14.3807 13.5 15.5 12.3807 15.5 11V5C15.5 3.61929 14.3807 2.5 13 2.5H3ZM2 5H3L5 11.5H4L2 5ZM5 5H4L6 11.5H7L5 5ZM9 10.5H8V11.5H9V10.5ZM10 10.5H11V11.5H10V10.5ZM13 10.5H12V11.5H13V10.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Path;
