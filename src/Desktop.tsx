import * as React from "react";
import { IconProps } from "./types";

export const Desktop = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 4.5C1.5 3.67157 2.17157 3 3 3H13C13.8284 3 14.5 3.67157 14.5 4.5V9.5C14.5 10.3284 13.8284 11 13 11H3C2.17157 11 1.5 10.3284 1.5 9.5V4.5ZM3 2C1.61929 2 0.5 3.11929 0.5 4.5V9.5C0.5 10.8807 1.61929 12 3 12H6.19098L5.55279 13.2764C5.47529 13.4314 5.48357 13.6155 5.57467 13.7629C5.66578 13.9103 5.82671 14 6 14H10C10.1733 14 10.3342 13.9103 10.4253 13.7629C10.5164 13.6155 10.5247 13.4314 10.4472 13.2764L9.80902 12H13C14.3807 12 15.5 10.8807 15.5 9.5V4.5C15.5 3.11929 14.3807 2 13 2H3ZM8.69098 12H7.30902L6.80902 13H9.19098L8.69098 12Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Desktop;
