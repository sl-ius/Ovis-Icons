import * as React from "react";
import { IconProps } from "./types";

export const Paint = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1495)">
          <path
            d="M4.17727 14.6509L3.45901 14.6509C4.07352 14.1326 4.56892 13.4864 4.90989 12.7563L4.93513 12.7022C5.1957 12.1443 5.85486 11.9013 6.41314 12.1511L6.62633 12.2975C7.02156 12.569 7.08884 13.1257 6.76967 13.4836C6.22394 14.0954 5.47488 14.4887 4.66135 14.5903L4.17727 14.6509Z"
            fill={color}
            stroke="black"
          />
          <path
            d="M12.1639 1.70083L12.7754 2.0539C13.0146 2.19197 13.0965 2.49777 12.9584 2.73691L8.45084 10.5443C8.18591 9.98422 7.59077 9.64062 6.97329 9.6912L11.4809 1.88385C11.6189 1.6447 11.9247 1.56276 12.1639 1.70083Z"
            stroke="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1495">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Paint;
