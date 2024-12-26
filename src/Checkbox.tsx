import * as React from "react";
import { IconProps } from "./types";

export const Checkbox = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L8 2.5L12 2.5C12.8284 2.5 13.5 3.17158 13.5 4V8V12C13.5 12.8284 12.8284 13.5 12 13.5H8H4C3.17157 13.5 2.5 12.8284 2.5 12V8V4ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8V12C1.5 13.3807 2.61929 14.5 4 14.5H8H12C13.3807 14.5 14.5 13.3807 14.5 12V8V4C14.5 2.61929 13.3807 1.5 12 1.5L8 1.5L4 1.5ZM11.424 5.265C11.5704 5.03083 11.4992 4.72236 11.265 4.576C11.0308 4.42965 10.7224 4.50083 10.576 4.735L7.15912 10.202L5.35355 8.39645C5.15829 8.20118 4.84171 8.20118 4.64645 8.39645C4.45118 8.59171 4.45118 8.90829 4.64645 9.10355L6.89645 11.3536C7.00419 11.4613 7.15518 11.514 7.30658 11.4968C7.45797 11.4795 7.59324 11.3942 7.674 11.265L11.424 5.265Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Checkbox;
