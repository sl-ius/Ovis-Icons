import * as React from "react";
import { IconProps } from "./types";

export const ZoomOut = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 7.53832C3 5.03188 5.03188 3 7.53832 3C10.0448 3 12.0766 5.03188 12.0766 7.53832C12.0766 8.90215 11.475 10.1255 10.5227 10.9574L12.8423 13.1355C13.0436 13.3245 13.0535 13.641 12.8645 13.8423C12.6755 14.0436 12.359 14.0535 12.1577 13.8645L9.68183 11.5395C9.04345 11.8823 8.31359 12.0766 7.53832 12.0766C5.03188 12.0766 3 10.0448 3 7.53832ZM7.53832 3.95C5.55655 3.95 3.95 5.55655 3.95 7.53832C3.95 9.52008 5.55655 11.1266 7.53832 11.1266C9.52008 11.1266 11.1266 9.52008 11.1266 7.53832C11.1266 5.55655 9.52008 3.95 7.53832 3.95ZM6 7C5.72386 7 5.5 7.22386 5.5 7.5C5.5 7.77614 5.72386 8 6 8H9C9.27614 8 9.5 7.77614 9.5 7.5C9.5 7.22386 9.27614 7 9 7H6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ZoomOut;