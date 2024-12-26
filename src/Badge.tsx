import * as React from "react";
import { IconProps } from "./types";

export const Badge = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 8C2.5 7.38667 2.7747 7.03218 3.09526 6.81236C3.44248 6.57428 3.84205 6.5 4 6.5H12C12.1579 6.5 12.5575 6.57428 12.9047 6.81236C13.2253 7.03218 13.5 7.38667 13.5 8C13.5 8.61333 13.2253 8.96782 12.9047 9.18764C12.5575 9.42572 12.1579 9.5 12 9.5H8H4C3.84205 9.5 3.44248 9.42572 3.09526 9.18764C2.7747 8.96782 2.5 8.61333 2.5 8ZM4 5.5C3.65795 5.5 3.05752 5.62572 2.52974 5.98764C1.9753 6.36782 1.5 7.01333 1.5 8C1.5 8.98667 1.9753 9.63218 2.52974 10.0124C3.05752 10.3743 3.65795 10.5 4 10.5H8H12C12.3421 10.5 12.9425 10.3743 13.4703 10.0124C14.0247 9.63218 14.5 8.98667 14.5 8C14.5 7.01333 14.0247 6.36782 13.4703 5.98764C12.9425 5.62572 12.3421 5.5 12 5.5H4ZM6 7.5C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27614 5.72386 8.5 6 8.5H10C10.2761 8.5 10.5 8.27614 10.5 8C10.5 7.72386 10.2761 7.5 10 7.5H6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Badge;