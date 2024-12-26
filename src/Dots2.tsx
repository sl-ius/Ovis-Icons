import * as React from "react";
import { IconProps } from "./types";

export const Dots2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11Z"
          fill={color}
        />
        <path
          d="M8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44771 7 8 7Z"
          fill={color}
        />
        <path
          d="M8 3C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5C7.44771 5 7 4.55228 7 4C7 3.44772 7.44771 3 8 3Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Dots2;
