import * as React from "react";
import { IconProps } from "./types";

export const Video = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L8 2.5L12 2.5C12.8284 2.5 13.5 3.17158 13.5 4V8V12C13.5 12.8284 12.8284 13.5 12 13.5H8H4C3.17157 13.5 2.5 12.8284 2.5 12V8V4ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8V12C1.5 13.3807 2.61929 14.5 4 14.5H8H12C13.3807 14.5 14.5 13.3807 14.5 12V8V4C14.5 2.61929 13.3807 1.5 12 1.5L8 1.5L4 1.5ZM7.07734 5.58397C6.92391 5.48169 6.72664 5.47215 6.56406 5.55916C6.40148 5.64617 6.29999 5.8156 6.29999 6V10C6.29999 10.1844 6.40148 10.3538 6.56406 10.4408C6.72664 10.5278 6.92391 10.5183 7.07734 10.416L10.0773 8.41603C10.2164 8.32329 10.3 8.16718 10.3 8C10.3 7.83282 10.2164 7.67671 10.0773 7.58397L7.07734 5.58397ZM8.8986 8L7.29999 9.06574V6.93426L8.8986 8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Video;
