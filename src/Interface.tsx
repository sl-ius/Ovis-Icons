import * as React from "react";
import { IconProps } from "./types";

export const Interface = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 1.5C1.61929 1.5 0.5 2.61929 0.5 4V5.5V12C0.5 13.3807 1.61929 14.5 3 14.5H13C14.3807 14.5 15.5 13.3807 15.5 12V5.5V4C15.5 2.61929 14.3807 1.5 13 1.5H3ZM1.5 4C1.5 3.17157 2.17157 2.5 3 2.5H13C13.8284 2.5 14.5 3.17157 14.5 4V5H1.5V4ZM1.5 6H14.5V12C14.5 12.8284 13.8284 13.5 13 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V6ZM3 4.3C3.27614 4.3 3.5 4.07615 3.5 3.8C3.5 3.52386 3.27614 3.3 3 3.3C2.72386 3.3 2.5 3.52386 2.5 3.8C2.5 4.07615 2.72386 4.3 3 4.3ZM5 3.8C5 4.07615 4.77614 4.3 4.5 4.3C4.22386 4.3 4 4.07615 4 3.8C4 3.52386 4.22386 3.3 4.5 3.3C4.77614 3.3 5 3.52386 5 3.8ZM6 4.3C6.27614 4.3 6.5 4.07615 6.5 3.8C6.5 3.52386 6.27614 3.3 6 3.3C5.72386 3.3 5.5 3.52386 5.5 3.8C5.5 4.07615 5.72386 4.3 6 4.3ZM5.5 7C5.77614 7 6 7.22386 6 7.5V12C6 12.2761 5.77614 12.5 5.5 12.5C5.22386 12.5 5 12.2761 5 12V7.5C5 7.22386 5.22386 7 5.5 7ZM11 7.5C11 7.22386 10.7761 7 10.5 7C10.2239 7 10 7.22386 10 7.5V12C10 12.2761 10.2239 12.5 10.5 12.5C10.7761 12.5 11 12.2761 11 12V7.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Interface;