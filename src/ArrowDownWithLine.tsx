import * as React from "react";
import { IconProps } from "./types";

export const ArrowDownWithLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.37726 12.3602C8.2837 12.4549 8.15621 12.5084 8.02305 12.5089C7.88988 12.5093 7.76205 12.4566 7.66789 12.3624L3.75369 8.44822C3.55842 8.25296 3.55842 7.93638 3.75369 7.74112C3.94895 7.54585 4.26553 7.54585 4.46079 7.74112L7.52144 10.8018V2.00887C7.52144 1.73273 7.7453 1.50887 8.02144 1.50887C8.29758 1.50887 8.52144 1.73273 8.52144 2.00887V10.7907L11.5547 7.71827C11.7487 7.52176 12.0653 7.51972 12.2618 7.71373C12.4583 7.90773 12.4604 8.22431 12.2664 8.42082L8.37726 12.3602ZM4 13.5C3.72386 13.5 3.5 13.7239 3.5 14C3.5 14.2761 3.72386 14.5 4 14.5H12C12.2761 14.5 12.5 14.2761 12.5 14C12.5 13.7239 12.2761 13.5 12 13.5H4Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowDownWithLine;
