import * as React from "react";
import { IconProps } from "./types";

export const Group1 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 13V3C2 2.44772 2.44771 2 3 2L13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="3 3"
        />
      </svg>
    );
  },
);

export default Group1;
