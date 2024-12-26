import * as React from "react";
import { IconProps } from "./types";

export const SewingPinFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 3.475C5.5 2.09429 6.61929 0.975 8 0.975C9.3807 0.975 10.5 2.09429 10.5 3.475C10.5 4.68447 9.64111 5.69335 8.5 5.92499V13.975C8.5 14.2511 8.27614 14.475 8 14.475C7.72386 14.475 7.5 14.2511 7.5 13.975V5.92499C6.35888 5.69335 5.5 4.68447 5.5 3.475Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default SewingPinFilled;
