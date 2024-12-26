import * as React from "react";
import { IconProps } from "./types";

export const MicrophoneOff = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1517)">
          <path d="M1 15L15 0.5" stroke="black" stroke-linecap="round" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.00012 2C6.89555 2 6.00012 2.89543 6.00012 4V7C6.00012 7.40512 6.12058 7.78212 6.32763 8.09712L5.6106 8.81415C5.22752 8.31035 5.00012 7.68173 5.00012 7V4C5.00012 2.34314 6.34327 1 8.00012 1C9.47651 1 10.7038 2.06649 10.9536 3.4711L10.0001 4.42462V4C10.0001 2.89543 9.10469 2 8.00012 2ZM8.27142 8.98175C9.15895 8.86139 9.86152 8.15882 9.98188 7.27129L11.0001 6.25305V7C11.0001 8.65685 9.65698 10 8.00012 10C7.76927 10 7.5445 9.97392 7.32861 9.92456L8.27142 8.98175ZM4.5176 9.90714C4.0902 9.38873 3.8335 8.72435 3.8335 8.00001V7.49999C3.8335 7.22385 3.60964 6.99999 3.3335 6.99999C3.05735 6.99999 2.8335 7.22385 2.8335 7.49999V8.00001C2.8335 9.00055 3.20085 9.91529 3.80804 10.6167L4.5176 9.90714ZM5.48586 11.7673L6.30039 10.9528C6.4734 10.9838 6.65156 11 6.8335 11H8.00016H9.16683C10.8237 11 12.1668 9.65686 12.1668 8.00001V7.49999C12.1668 7.22385 12.3907 6.99999 12.6668 6.99999C12.943 6.99999 13.1668 7.22385 13.1668 7.49999V8.00001C13.1668 10.2091 11.376 12 9.16683 12H8.50016V13.5H10.0001C10.2763 13.5 10.5001 13.7239 10.5001 14C10.5001 14.2761 10.2763 14.5 10.0001 14.5H8.00016H6.00012C5.72398 14.5 5.50012 14.2761 5.50012 14C5.50012 13.7239 5.72398 13.5 6.00012 13.5H7.50016V12H6.8335C6.36063 12 5.90693 11.918 5.48586 11.7673Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1517">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MicrophoneOff;