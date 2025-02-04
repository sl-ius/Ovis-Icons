import * as React from "react";
import { IconProps } from "./types";

export const HeightFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M5 5L8 2L9.5 3.5L11 5H8V11H11L8 14L5 11H8V5H5Z" fill={color} />
        <path
          d="M8 2L5 5H11L9.5 3.5L8 2ZM8 2V14M8 14L5 11H11L8 14Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default HeightFilled;
