import * as React from "react";
import { IconProps } from "./types";

export const Table1 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 2H4C2.89543 2 2 2.89543 2 4V5.5H7.5V2ZM2 6.5V8V9.5H7.5V6.5H2ZM2 10.5V12C2 13.1046 2.89543 14 4 14H7.5V10.5H2ZM8.5 14H12C13.1046 14 14 13.1046 14 12V10.5H8.5V14ZM14 9.5V8V6.5H8.5V9.5H14ZM14 5.5V4C14 2.89543 13.1046 2 12 2L8.5 2V5.5H14Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Table1;
