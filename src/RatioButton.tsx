import * as React from "react";
import { IconProps } from "./types";

export const RatioButton = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.47501C4.39551 1.47501 1.4751 4.39541 1.4751 7.99791C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.99791C14.5209 4.39541 11.6005 1.47501 7.998 1.47501ZM2.4751 7.99791C2.4751 4.9477 4.94779 2.47501 7.998 2.47501C11.0482 2.47501 13.5209 4.9477 13.5209 7.99791C13.5209 11.0481 11.0482 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.99791ZM12.0001 8C12.0001 10.2091 10.2092 12 8.00012 12C5.79099 12 4.00012 10.2091 4.00012 8C4.00012 5.79086 5.79099 4 8.00012 4C10.2092 4 12.0001 5.79086 12.0001 8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default RatioButton;
