import * as React from "react";
import { IconProps } from "./types";

export const BleedingMode = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.44315 1.84769L11.5 7.69565L11.9752 8.68728C13.3772 11.6132 11.2445 15 8.00004 15C4.75554 15 2.62287 11.6132 4.02488 8.68728L4.50004 7.69565L7.55693 1.84769C7.74398 1.48986 8.25611 1.48986 8.44315 1.84769ZM10.6057 8.14347L11.0734 9.1194C11.2047 9.39349 11.2959 9.6728 11.3504 9.95206C10.3271 9.99345 8.71521 10.8542 7.87682 11.3019C7.72198 11.3846 7.59353 11.4532 7.50004 11.5C6.66836 11.9158 5.42437 11.2869 4.59624 10.8276C4.55657 10.2667 4.65711 9.68202 4.9267 9.1194L5.39433 8.14347L8.00004 3.15864L10.6057 8.14347Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default BleedingMode;
