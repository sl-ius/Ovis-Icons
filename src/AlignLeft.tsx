import * as React from "react";
import { IconProps } from "./types";

export const AlignLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.5C3 3.22386 2.77614 3 2.5 3C2.22386 3 2 3.22386 2 3.5V12.2355C2 12.5116 2.22386 12.7355 2.5 12.7355C2.77614 12.7355 3 12.5116 3 12.2355V3.5ZM4 4.24709C3.72386 4.24709 3.5 4.47094 3.5 4.74709C3.5 5.02323 3.72386 5.24709 4 5.24709H13.3C13.5761 5.24709 13.8 5.02323 13.8 4.74709C13.8 4.47094 13.5761 4.24709 13.3 4.24709H4ZM4 7.24709C3.72386 7.24709 3.5 7.47094 3.5 7.74709C3.5 8.02323 3.72386 8.24709 4 8.24709H10C10.2761 8.24709 10.5 8.02323 10.5 7.74709C10.5 7.47094 10.2761 7.24709 10 7.24709H4ZM3.5 10.7471C3.5 10.4709 3.72386 10.2471 4 10.2471H8C8.27614 10.2471 8.5 10.4709 8.5 10.7471C8.5 11.0232 8.27614 11.2471 8 11.2471H4C3.72386 11.2471 3.5 11.0232 3.5 10.7471Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default AlignLeft;
