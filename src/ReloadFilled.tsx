import * as React from "react";
import { IconProps } from "./types";

export const ReloadFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.45 2.65002V5.65002H10.65L12.2867 3.89641L13.45 2.65002Z"
          fill={color}
        />
        <path
          d="M13.45 5.65002C12.9374 4.63493 11.45 2 8.15 2C4.3985 2 2 5.075 2 8.15C2 11.225 4.3985 14.3 8.15 14.3C9.95445 14.3 11.4459 13.5886 12.5079 12.5079C13.0783 11.9276 13.5248 11.2408 13.8295 10.5005M13.45 5.65002V2.65002L10.65 5.65002H13.45Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ReloadFilled;
