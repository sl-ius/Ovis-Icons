import * as React from "react";
import { IconProps } from "./types";

export const WeldNone = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.9751 4.5C3.0421 4.5 1.4751 6.06701 1.4751 8C1.4751 9.93298 3.0421 11.5 4.9751 11.5H5.9751C6.25124 11.5 6.4751 11.2761 6.4751 11C6.4751 10.7239 6.25124 10.5 5.9751 10.5H4.9751C3.59439 10.5 2.4751 9.3807 2.4751 8C2.4751 6.61929 3.59439 5.5 4.9751 5.5H5.9751C6.25124 5.5 6.4751 5.27614 6.4751 5C6.4751 4.72386 6.25124 4.5 5.9751 4.5H4.9751ZM10.9751 4.5C12.9081 4.5 14.4751 6.06701 14.4751 8C14.4751 9.93298 12.9081 11.5 10.9751 11.5H9.9751C9.69896 11.5 9.4751 11.2761 9.4751 11C9.4751 10.7239 9.69896 10.5 9.9751 10.5H10.9751C12.3558 10.5 13.4751 9.3807 13.4751 8C13.4751 6.61929 12.3558 5.5 10.9751 5.5H9.9751C9.69896 5.5 9.4751 5.27614 9.4751 5C9.4751 4.72386 9.69896 4.5 9.9751 4.5H10.9751Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default WeldNone;
