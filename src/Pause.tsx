import * as React from "react";
import { IconProps } from "./types";

export const Pause = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 3C3.5 2.72386 3.72386 2.5 4 2.5L6 2.5C6.27614 2.5 6.5 2.72386 6.5 3V13C6.5 13.2761 6.27614 13.5 6 13.5H4C3.72386 13.5 3.5 13.2761 3.5 13V3ZM4 1.5C3.17157 1.5 2.5 2.17157 2.5 3V13C2.5 13.8284 3.17157 14.5 4 14.5H6C6.82843 14.5 7.5 13.8284 7.5 13V3C7.5 2.17158 6.82843 1.5 6 1.5L4 1.5ZM9.5 3C9.5 2.72386 9.72386 2.5 10 2.5L12 2.5C12.2761 2.5 12.5 2.72386 12.5 3V13C12.5 13.2761 12.2761 13.5 12 13.5H10C9.72386 13.5 9.5 13.2761 9.5 13V3ZM10 1.5C9.17157 1.5 8.5 2.17157 8.5 3V13C8.5 13.8284 9.17157 14.5 10 14.5H12C12.8284 14.5 13.5 13.8284 13.5 13V3C13.5 2.17158 12.8284 1.5 12 1.5L10 1.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Pause;
