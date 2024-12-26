import * as React from "react";
import { IconProps } from "./types";

export const AlignCenter = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V4.24709H3.5C3.22386 4.24709 3 4.47094 3 4.74709C3 5.02323 3.22386 5.24709 3.5 5.24709H7.5V7.24709H5C4.72386 7.24709 4.5 7.47094 4.5 7.74709C4.5 8.02323 4.72386 8.24709 5 8.24709H7.5V10.2471H6C5.72386 10.2471 5.5 10.4709 5.5 10.7471C5.5 11.0232 5.72386 11.2471 6 11.2471H7.5V12.2355C7.5 12.5116 7.72386 12.7355 8 12.7355C8.27614 12.7355 8.5 12.5116 8.5 12.2355V11.2471H10C10.2761 11.2471 10.5 11.0232 10.5 10.7471C10.5 10.4709 10.2761 10.2471 10 10.2471H8.5V8.24709H11C11.2761 8.24709 11.5 8.02323 11.5 7.74709C11.5 7.47094 11.2761 7.24709 11 7.24709H8.5V5.24709H12.8C13.0761 5.24709 13.3 5.02323 13.3 4.74709C13.3 4.47094 13.0761 4.24709 12.8 4.24709H8.5V3.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default AlignCenter;
