import * as React from "react";
import { IconProps } from "./types";

export const Clipboard = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 2.5C5.5 2.22386 5.72386 2 6 2H10C10.2761 2 10.5 2.22386 10.5 2.5C10.5 2.77614 10.2761 3 10 3H6C5.72386 3 5.5 2.77614 5.5 2.5ZM4.6925 3.23568C4.27605 3.50222 4 3.96887 4 4.5V12.5C4 13.3284 4.67157 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V4.5C12 3.96887 11.724 3.50222 11.3075 3.23569C11.0502 3.69192 10.5611 4 10 4H6C5.4389 4 4.94975 3.69192 4.6925 3.23568ZM11.4689 2.19469C11.3279 1.51267 10.7238 1 10 1H6C5.27619 1 4.67212 1.51266 4.53109 2.19469C3.63157 2.57321 3 3.46285 3 4.5V12.5C3 13.8807 4.11929 15 5.5 15H10.5C11.8807 15 13 13.8807 13 12.5V4.5C13 3.46285 12.3684 2.57321 11.4689 2.19469Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Clipboard;
