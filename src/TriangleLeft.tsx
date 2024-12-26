import * as React from "react";
import { IconProps } from "./types";

export const TriangleLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 7.5L10 12L10 3L5 7.5Z" fill={color} />
      </svg>
    );
  },
);

export default TriangleLeft;
