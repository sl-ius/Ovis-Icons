import * as React from "react";
import { IconProps } from "./types";

export const SizeRightFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99998 12.2426H3.75734V8.00001L5.87866 10.1213L10.1213 5.87869L7.99998 3.75737H12.2426V8.00001L10.1213 5.87869L5.87866 10.1213L7.99998 12.2426Z"
          fill={color}
        />
        <path
          d="M3.75734 12.2426H7.99998L3.75734 8.00001V12.2426ZM3.75734 12.2426L12.2426 3.75737M12.2426 3.75737V8.00001L7.99998 3.75737H12.2426Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default SizeRightFilled;
