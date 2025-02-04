import * as React from "react";
import { IconProps } from "./types";

export const Folder = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4.5C2 3.67157 2.67157 3 3.5 3H5.83372C5.95629 3 6.07459 3.04502 6.16614 3.12651L7.17046 4.02037C7.62824 4.4278 8.21972 4.65289 8.83255 4.65289H12.5C13.3284 4.65289 14 5.32447 14 6.15289V6.5H2V4.5ZM1 7V4.5C1 3.11929 2.11929 2 3.5 2H5.83372C6.20142 2 6.55631 2.13506 6.83098 2.37952L7.8353 3.27338C8.10996 3.51784 8.46485 3.65289 8.83255 3.65289H12.5C13.8807 3.65289 15 4.77218 15 6.15289V7V11.5C15 12.8807 13.8807 14 12.5 14H3.5C2.11929 14 1 12.8807 1 11.5V7ZM14 7.5V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V7.5H14Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Folder;
