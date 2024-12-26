import * as React from "react";
import { IconProps } from "./types";

export const Enter = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.46366 5.15046C6.65671 4.95301 6.97327 4.94943 7.17072 5.14248L9.80086 7.7139C9.89708 7.80797 9.95132 7.93686 9.95132 8.07142C9.95132 8.20599 9.89708 8.33487 9.80086 8.42895L7.17072 11.0004C6.97327 11.1934 6.65671 11.1898 6.46366 10.9924C6.27062 10.7949 6.27419 10.4784 6.47164 10.2853L8.23583 8.56053L1.49551 8.49998C1.21938 8.4975 0.99754 8.27164 1.00002 7.99551C1.0025 7.71938 1.22836 7.49754 1.50449 7.50002L8.21328 7.56028L6.47164 5.85752C6.27419 5.66448 6.27062 5.34791 6.46366 5.15046Z"
          fill={color}
        />
        <path
          d="M5 5C5 4.69637 5 4.34861 5 4C5 2.89543 5.89543 2 7 2H11C12.1046 2 13 2.89543 13 4V12C13 13.1046 12.1046 14 11 14H7C5.89543 14 5 13.1046 5 12V11.5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Enter;
