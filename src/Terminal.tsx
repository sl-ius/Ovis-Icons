import * as React from "react";
import { IconProps } from "./types";

export const Terminal = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 1.5C1.61929 1.5 0.5 2.61929 0.5 4V4.5V12C0.5 13.3807 1.61929 14.5 3 14.5H13C14.3807 14.5 15.5 13.3807 15.5 12V4.5V4C15.5 2.61929 14.3807 1.5 13 1.5H3ZM1.5 5H14.5V12C14.5 12.8284 13.8284 13.5 13 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V5ZM6.35525 9.34542C6.54913 9.14966 6.54812 8.83395 6.35298 8.63944L4.35298 6.64588C4.15741 6.45093 3.84082 6.45144 3.64588 6.64702C3.45093 6.84259 3.45144 7.15917 3.64702 7.35412L5.29402 8.99583L3.65751 10.6481C3.46319 10.8443 3.46471 11.1609 3.66091 11.3552C3.8571 11.5496 4.17368 11.548 4.368 11.3519L6.35525 9.34542ZM7 10.5C6.72386 10.5 6.5 10.7239 6.5 11C6.5 11.2761 6.72386 11.5 7 11.5H11.5C11.7761 11.5 12 11.2761 12 11C12 10.7239 11.7761 10.5 11.5 10.5H7Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Terminal;
