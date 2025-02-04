import * as React from "react";
import { IconProps } from "./types";

export const HalfFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.47501C4.39551 1.47501 1.4751 4.39541 1.4751 7.99791C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.99791C14.5209 4.39541 11.6005 1.47501 7.998 1.47501ZM2.4751 7.99791C2.4751 4.9477 4.94779 2.47501 7.998 2.47501C7.99871 2.47501 7.99942 2.47501 8.00012 2.47501V13.5208C7.99942 13.5208 7.99871 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.99791Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HalfFilled;
