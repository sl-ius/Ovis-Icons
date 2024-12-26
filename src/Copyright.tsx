import * as React from "react";
import { IconProps } from "./types";

export const Copyright = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.47501C4.39551 1.47501 1.4751 4.39541 1.4751 7.99791C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.99791C14.5209 4.39541 11.6005 1.47501 7.998 1.47501ZM2.4751 7.99791C2.4751 4.9477 4.94779 2.47501 7.998 2.47501C11.0482 2.47501 13.5209 4.9477 13.5209 7.99791C13.5209 11.0481 11.0482 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.99791ZM6.5374 8C6.5374 9.25676 7.21811 10.0838 8.17435 10.0838C8.85507 10.0838 9.34939 9.67027 9.52767 8.98919L10.5001 9.32162C10.1598 10.3514 9.34939 11 8.17435 11C6.62654 11 5.50012 9.76757 5.50012 8C5.50012 6.23243 6.62654 5 8.17435 5C9.34939 5 10.1598 5.64865 10.5001 6.67838L9.52767 7.01081C9.34939 6.32973 8.85507 5.91622 8.17435 5.91622C7.21811 5.91622 6.5374 6.74324 6.5374 8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Copyright;
