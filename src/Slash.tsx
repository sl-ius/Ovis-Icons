import * as React from "react";
import { IconProps } from "./types";

export const Slash = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M9.57143 1H11L6.42857 15H5L9.57143 1Z" fill={color} />
      </svg>
    );
  },
);

export default Slash;
