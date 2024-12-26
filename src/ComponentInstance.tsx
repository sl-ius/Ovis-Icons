import * as React from "react";
import { IconProps } from "./types";

export const ComponentInstance = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.65685 13.6569L2.41421 9.41421C1.63317 8.63317 1.63317 7.36683 2.41421 6.58579L6.65686 2.34315C7.43791 1.5621 8.70423 1.5621 9.48528 2.34315L13.7279 6.58579C14.509 7.36683 14.509 8.63317 13.7279 9.41421L9.48528 13.6569C8.70423 14.4379 7.4379 14.4379 6.65685 13.6569Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ComponentInstance;
