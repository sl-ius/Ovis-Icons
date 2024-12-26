import * as React from "react";
import { IconProps } from "./types";

export const MaskOff = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H13C13.8284 3.5 14.5 4.17157 14.5 5V12C14.5 12.8284 13.8284 13.5 13 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V5ZM3 2.5C1.61929 2.5 0.5 3.61929 0.5 5V12C0.5 13.3807 1.61929 14.5 3 14.5H13C14.3807 14.5 15.5 13.3807 15.5 12V5C15.5 3.61929 14.3807 2.5 13 2.5H3ZM8 5.5C6.34315 5.5 5 6.84315 5 8.5C5 10.1568 6.34315 11.5 8 11.5C9.65684 11.5 11 10.1568 11 8.5C11 6.84315 9.65684 5.5 8 5.5ZM6 8.5C6 7.39543 6.89543 6.5 8 6.5C9.10456 6.5 10 7.39543 10 8.5C10 9.60456 9.10456 10.5 8 10.5C6.89543 10.5 6 9.60456 6 8.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default MaskOff;
