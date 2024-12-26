import * as React from "react";
import { IconProps } from "./types";

export const MapFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4.30953L4.69231 4.57143V12.8333L3 12.5714V4.30953Z"
          fill={color}
        />
        <path
          d="M8.84615 11.6166L6.69231 12.5055V4.3834L8.84615 3.49451V11.6166Z"
          fill={color}
        />
        <path
          d="M10.8462 11.6166V3.49451L13 4.3834V12.5055L10.8462 11.6166Z"
          fill={color}
        />
        <path
          d="M3 4.30953L4.69231 4.57143V12.8333L3 12.5714V4.30953Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M8.84615 11.6166L6.69231 12.5055V4.3834L8.84615 3.49451V11.6166Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M10.8462 11.6166V3.49451L13 4.3834V12.5055L10.8462 11.6166Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default MapFilled;
