import * as React from "react";
import { IconProps } from "./types";

export const GridFiilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 14H12C13.1046 14 14 13.1046 14 12V8.5H8.5V14ZM14 7.5V4C14 2.89543 13.1046 2 12 2L8.5 2V7.5H14ZM7.5 2H4C2.89543 2 2 2.89543 2 4V7.5H7.5V2ZM2 8.5V12C2 13.1046 2.89543 14 4 14H7.5V8.5H2Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default GridFiilled;
