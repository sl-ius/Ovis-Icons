import * as React from "react";
import { IconProps } from "./types";

export const ViewNone = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H13C13.1749 3.5 13.3428 3.52993 13.4989 3.58496L1.70189 11.7521C1.57351 11.531 1.5 11.2741 1.5 11V5ZM0.878028 12.3225L0.804299 12.3735L1.37351 13.1957L1.57632 13.0553C1.98033 13.3357 2.47097 13.5 3 13.5H13C14.3807 13.5 15.5 12.3807 15.5 11V5C15.5 4.5144 15.3616 4.06114 15.122 3.67753L15.1957 3.62649L14.6265 2.8043L14.4237 2.9447C14.0197 2.66432 13.529 2.5 13 2.5H3C1.61929 2.5 0.5 3.61929 0.5 5V11C0.5 11.4856 0.638449 11.9389 0.878028 12.3225ZM14.2981 4.2479C14.4265 4.469 14.5 4.72592 14.5 5V11C14.5 11.8284 13.8284 12.5 13 12.5H3C2.8251 12.5 2.6572 12.4701 2.50112 12.415L14.2981 4.2479Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ViewNone;
