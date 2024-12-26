import * as React from "react";
import { IconProps } from "./types";

export const Checkbox1 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4V8V12C2 13.1046 2.89543 14 4 14H8H12C13.1046 14 14 13.1046 14 12V8V4C14 2.89543 13.1046 2 12 2L8 2L4 2C2.89543 2 2 2.89543 2 4ZM11.424 5.265C11.5704 5.03083 11.4992 4.72236 11.265 4.576C11.0308 4.42965 10.7224 4.50083 10.576 4.735L7.15912 10.202L5.35355 8.39645C5.15829 8.20118 4.84171 8.20118 4.64645 8.39645C4.45118 8.59171 4.45118 8.90829 4.64645 9.10355L6.89645 11.3536C7.00419 11.4613 7.15518 11.514 7.30658 11.4968C7.45797 11.4795 7.59324 11.3942 7.674 11.265L11.424 5.265Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Checkbox1;
