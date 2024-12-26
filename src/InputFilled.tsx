import * as React from "react";
import { IconProps } from "./types";

export const InputFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 2C7.5 1.72386 7.72386 1.5 8 1.5H9.5H11C11.2761 1.5 11.5 1.72386 11.5 2C11.5 2.27614 11.2761 2.5 11 2.5H10V13.5H11C11.2761 13.5 11.5 13.7239 11.5 14C11.5 14.2761 11.2761 14.5 11 14.5H9.5H8C7.72386 14.5 7.5 14.2761 7.5 14C7.5 13.7239 7.72386 13.5 8 13.5H9V2.5H8C7.72386 2.5 7.5 2.27614 7.5 2ZM2 3.5C1.17157 3.5 0.5 4.17158 0.5 5V11C0.5 11.8284 1.17157 12.5 2 12.5H7.5C7.77614 12.5 8 12.2761 8 12V4C8 3.72386 7.77614 3.5 7.5 3.5H2ZM11 4C11 3.72386 11.2239 3.5 11.5 3.5H14C14.8284 3.5 15.5 4.17158 15.5 5V11C15.5 11.8284 14.8284 12.5 14 12.5H11.5C11.2239 12.5 11 12.2761 11 12V4ZM6.42741 10C6.70373 10 6.89438 9.7232 6.79588 9.46503L5.64355 6.44499C5.54131 6.17703 5.28428 6 4.99748 6C4.71037 6 4.45312 6.17741 4.3511 6.44579L3.19928 9.47578C3.10306 9.7289 3.29002 10 3.56082 10C3.7218 10 3.86596 9.90028 3.92274 9.74965L4.15177 9.14206H5.83121L6.05838 9.74473C6.11628 9.89833 6.26327 10 6.42741 10ZM4.41277 8.44568L4.98582 6.90808L5.56454 8.44568H4.41277Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default InputFilled;