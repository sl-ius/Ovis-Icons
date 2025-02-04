import * as React from "react";
import { IconProps } from "./types";

export const FolderDelete = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 3C2.67157 3 2 3.67157 2 4.5V6.5H14V6.15289C14 5.32447 13.3284 4.65289 12.5 4.65289H8.83255C8.21972 4.65289 7.62824 4.4278 7.17046 4.02037L6.16614 3.12651C6.07459 3.04502 5.95629 3 5.83372 3H3.5ZM1 4.5V7V11.5C1 12.8807 2.11929 14 3.5 14H7.5C7.77614 14 8 13.7761 8 13.5C8 13.2239 7.77614 13 7.5 13H3.5C2.67157 13 2 12.3284 2 11.5V7.5H14H14.5H15V7V6.15289C15 4.77218 13.8807 3.65289 12.5 3.65289H8.83255C8.46485 3.65289 8.10996 3.51784 7.8353 3.27338L6.83098 2.37952C6.55631 2.13506 6.20142 2 5.83372 2H3.5C2.11929 2 1 3.11929 1 4.5ZM10.5001 11C10.2239 11 10.0001 11.2239 10.0001 11.5C10.0001 11.7761 10.2239 12 10.5001 12H12.5001H14.5001C14.7762 12 15.0001 11.7761 15.0001 11.5C15.0001 11.2239 14.7762 11 14.5001 11H12.5001H10.5001Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FolderDelete;
