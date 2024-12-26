import * as React from "react";
import { IconProps } from "./types";

export const Cursor = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1510)">
          <path
            d="M10.1629 9.11347L13.2098 8.2152C14.2912 7.89641 14.334 6.34742 13.2728 5.93837L4.43645 2.53241C3.49253 2.16857 2.58107 3.10081 2.93698 4.06608L6.26875 13.1021C6.6689 14.1874 8.18355 14.1434 8.49512 13.0374L9.37304 9.92133C9.48316 9.53045 9.78068 9.22614 10.1629 9.11347Z"
            stroke="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1510">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Cursor;
