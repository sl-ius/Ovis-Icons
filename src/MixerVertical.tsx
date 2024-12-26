import * as React from "react";
import { IconProps } from "./types";

export const MixerVertical = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1375)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.5 15.5L5.5 8.44999C6.64111 8.21835 7.5 7.20948 7.5 6C7.5 4.79053 6.64111 3.78165 5.5 3.55001L5.5 0.5C5.5 0.223858 5.27614 -1.21349e-07 5 -1.09278e-07C4.72386 -9.72079e-08 4.5 0.223858 4.5 0.5L4.5 3.55001C3.35888 3.78165 2.5 4.79053 2.5 6C2.5 7.20948 3.35888 8.21836 4.5 8.44999L4.5 15.5C4.5 15.7761 4.72386 16 5 16C5.27614 16 5.5 15.7761 5.5 15.5ZM3.5 6C3.5 6.82843 4.17157 7.5 5 7.5C5.82842 7.5 6.5 6.82842 6.5 6C6.5 5.17158 5.82842 4.5 5 4.5C4.17158 4.5 3.5 5.17158 3.5 6ZM11.5 15.5L11.5 12.45C12.6411 12.2184 13.5 11.2095 13.5 10C13.5 8.79053 12.6411 7.78165 11.5 7.55001L11.5 0.5C11.5 0.223857 11.2761 -3.83617e-07 11 -3.71547e-07C10.7239 -3.59476e-07 10.5 0.223858 10.5 0.5L10.5 7.55001C9.35888 7.78165 8.5 8.79053 8.5 10C8.5 11.2095 9.35888 12.2184 10.5 12.45L10.5 15.5C10.5 15.7761 10.7239 16 11 16C11.2761 16 11.5 15.7761 11.5 15.5ZM9.5 10C9.5 10.8284 10.1716 11.5 11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17158 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17158 9.5 10Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1375">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MixerVertical;