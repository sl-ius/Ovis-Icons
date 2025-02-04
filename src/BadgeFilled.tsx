import * as React from "react";
import { IconProps } from "./types";

export const BadgeFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 5.5C3.65795 5.5 3.05752 5.62572 2.52974 5.98764C1.9753 6.36782 1.5 7.01333 1.5 8C1.5 8.98667 1.9753 9.63218 2.52974 10.0124C3.05752 10.3743 3.65795 10.5 4 10.5H8H12C12.3421 10.5 12.9425 10.3743 13.4703 10.0124C14.0247 9.63218 14.5 8.98667 14.5 8C14.5 7.01333 14.0247 6.36782 13.4703 5.98764C12.9425 5.62572 12.3421 5.5 12 5.5H4ZM5.5 8C5.5 7.72386 5.72386 7.5 6 7.5H10C10.2761 7.5 10.5 7.72386 10.5 8C10.5 8.27614 10.2761 8.5 10 8.5H6C5.72386 8.5 5.5 8.27614 5.5 8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default BadgeFilled;
