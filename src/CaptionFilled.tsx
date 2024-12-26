import * as React from "react";
import { IconProps } from "./types";

export const CaptionFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 10V6C1 4.89543 1.89543 4 3 4H13C14.1046 4 15 4.89543 15 6V10C15 11.1046 14.1046 12 13 12H3C1.89543 12 1 11.1046 1 10ZM4.5 6.5C4.5 6.22386 4.72386 6 5 6H7C7.27614 6 7.5 6.22386 7.5 6.5C7.5 6.77614 7.27614 7 7 7H5.5V9H7C7.27614 9 7.5 9.22386 7.5 9.5C7.5 9.77614 7.27614 10 7 10H5C4.72386 10 4.5 9.77614 4.5 9.5V6.5ZM9 6C8.72386 6 8.5 6.22386 8.5 6.5V9.5C8.5 9.77614 8.72386 10 9 10H11C11.2761 10 11.5 9.77614 11.5 9.5C11.5 9.22386 11.2761 9 11 9H9.5V7H11C11.2761 7 11.5 6.77614 11.5 6.5C11.5 6.22386 11.2761 6 11 6H9Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CaptionFilled;
