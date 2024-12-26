import * as React from "react";
import { IconProps } from "./types";

export const DragHandler = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 5C9.44772 5 9 4.55228 9 4C9 3.44772 9.44772 3 10 3C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5Z"
          fill={color}
        />
        <path
          d="M10 9C9.44771 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9Z"
          fill={color}
        />
        <path
          d="M10 13C9.44771 13 9 12.5523 9 12C9 11.4477 9.44771 11 10 11C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13Z"
          fill={color}
        />
        <path
          d="M6 5C5.44772 5 5 4.55228 5 4C5 3.44771 5.44772 3 6 3C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5Z"
          fill={color}
        />
        <path
          d="M6 9C5.44771 9 5 8.55228 5 8C5 7.44771 5.44772 7 6 7C6.55228 7 7 7.44772 7 8C7 8.55228 6.55228 9 6 9Z"
          fill={color}
        />
        <path
          d="M6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DragHandler;
