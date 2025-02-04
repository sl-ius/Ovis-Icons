import * as React from "react";
import { IconProps } from "./types";

export const Export = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 3.70711V10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5V3.70711L5.35355 5.85355C5.15829 6.04882 4.84171 6.04882 4.64645 5.85355C4.45118 5.65829 4.45118 5.34171 4.64645 5.14645L7.64645 2.14645C7.84171 1.95118 8.15829 1.95118 8.35355 2.14645L11.3536 5.14645C11.5488 5.34171 11.5488 5.65829 11.3536 5.85355C11.1583 6.04882 10.8417 6.04882 10.6464 5.85355L8.5 3.70711ZM4 10.5C4 10.2239 3.77614 10 3.5 10C3.22386 10 3 10.2239 3 10.5V11.5C3 12.8807 4.11929 14 5.5 14H10.5C11.8807 14 13 12.8807 13 11.5V10.5C13 10.2239 12.7761 10 12.5 10C12.2239 10 12 10.2239 12 10.5V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V10.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Export;
