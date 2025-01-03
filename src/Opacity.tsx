import * as React from "react";
import { IconProps } from "./types";

export const Opacity = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 2.07932L11.0529 7.91956L11.5243 8.90335C12.7672 11.4974 10.8765 14.5 8 14.5C5.12353 14.5 3.23277 11.4974 4.47575 8.90335L4.94715 7.91956L8 2.07932Z"
          stroke="black"
        />
      </svg>
    );
  },
);

export default Opacity;
