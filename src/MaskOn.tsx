import * as React from "react";
import { IconProps } from "./types";

export const MaskOn = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 5V12C1 13.1046 1.89543 14 3 14H13C14.1046 14 15 13.1046 15 12V5C15 3.89543 14.1046 3 13 3H3C1.89543 3 1 3.89543 1 5ZM10.5 8.5C10.5 9.8807 9.3807 11 8 11C6.61929 11 5.5 9.8807 5.5 8.5C5.5 7.11929 6.61929 6 8 6C9.3807 6 10.5 7.11929 10.5 8.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default MaskOn;
