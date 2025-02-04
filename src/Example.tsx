import * as React from "react";
import { IconProps } from "./types";

export const Example = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.00001 1.70278C8.30405 1.70278 11 2.30161 11 4.6969C11 5.80834 11 7.20833 11 8.54648M4.00001 1.70278C4.00001 8.09736 4 8.54648 6.93243 8.54648L11 8.54648M4.00001 1.70278C4.00001 1.70278 7.68918 1.70278 7.68918 5.39196L7.68918 8.46628L7.68918 12.3961C7.68918 14.5347 11 14.5347 11 12.3961C11 11.5554 11 10.0922 11 8.54648"
          stroke="black"
          stroke-width="0.875"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Example;
