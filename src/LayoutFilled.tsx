import * as React from "react";
import { IconProps } from "./types";

export const LayoutFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.5 2L8 2L6.5 2V14H8H9.5V2ZM10.5 14H12C13.1046 14 14 13.1046 14 12V8V4C14 2.89543 13.1046 2 12 2L10.5 2V14ZM4 2H5.5V14H4C2.89543 14 2 13.1046 2 12V8V4C2 2.89543 2.89543 2 4 2Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default LayoutFilled;
