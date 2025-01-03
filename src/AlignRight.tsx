import * as React from "react";
import { IconProps } from "./types";

export const AlignRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 3.5C13 3.22386 13.2239 3 13.5 3C13.7761 3 14 3.22386 14 3.5V12.2355C14 12.5116 13.7761 12.7355 13.5 12.7355C13.2239 12.7355 13 12.5116 13 12.2355V3.5ZM12 4.24709C12.2761 4.24709 12.5 4.47094 12.5 4.74709C12.5 5.02323 12.2761 5.24709 12 5.24709H2.7C2.42386 5.24709 2.2 5.02323 2.2 4.74709C2.2 4.47094 2.42386 4.24709 2.7 4.24709H12ZM12 7.24709C12.2761 7.24709 12.5 7.47094 12.5 7.74709C12.5 8.02323 12.2761 8.24709 12 8.24709H6C5.72386 8.24709 5.5 8.02323 5.5 7.74709C5.5 7.47094 5.72386 7.24709 6 7.24709H12ZM12.5 10.7471C12.5 10.4709 12.2761 10.2471 12 10.2471H8C7.72386 10.2471 7.5 10.4709 7.5 10.7471C7.5 11.0232 7.72386 11.2471 8 11.2471H12C12.2761 11.2471 12.5 11.0232 12.5 10.7471Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default AlignRight;
