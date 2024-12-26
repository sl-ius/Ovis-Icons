import * as React from "react";
import { IconProps } from "./types";

export const TriangleLeft2 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.8999 11L3.3999 6L12.3999 6L7.8999 11Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleLeft2;
