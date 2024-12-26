import * as React from "react";
import { IconProps } from "./types";

export const DotFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="8" cy="8" r="3" fill={color} />
      </svg>
    );
  },
);

export default DotFilled;
