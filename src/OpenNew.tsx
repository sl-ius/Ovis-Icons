import * as React from "react";
import { IconProps } from "./types";

export const OpenNew = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 5C3.5 4.17157 4.17158 3.5 5 3.5H11C11.8284 3.5 12.5 4.17157 12.5 5V11C12.5 11.8284 11.8284 12.5 11 12.5H8.5C8.22386 12.5 8 12.7239 8 13C8 13.2761 8.22386 13.5 8.5 13.5H11C12.3807 13.5 13.5 12.3807 13.5 11V5C13.5 3.61929 12.3807 2.5 11 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V7C2.5 7.27614 2.72386 7.5 3 7.5C3.27615 7.5 3.5 7.27614 3.5 7V5ZM5.5 6.5C5.22386 6.5 5 6.72386 5 7C5 7.27614 5.22386 7.5 5.5 7.5H7.36339L2.63143 12.6621C2.44483 12.8657 2.45858 13.182 2.66214 13.3686C2.8657 13.5552 3.18198 13.5414 3.36858 13.3379L8 8.2854V10C8 10.2761 8.22386 10.5 8.5 10.5C8.77615 10.5 9 10.2761 9 10V7C9 6.72386 8.77615 6.5 8.5 6.5H5.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default OpenNew;
