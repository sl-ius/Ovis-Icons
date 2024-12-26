import * as React from "react";
import { IconProps } from "./types";

export const CirciedPlusFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.0209 7.9979C14.0209 11.3242 11.3243 14.0208 7.998 14.0208C4.67165 14.0208 1.9751 11.3242 1.9751 7.9979C1.9751 4.67155 4.67165 1.975 7.998 1.975C11.3243 1.975 14.0209 4.67155 14.0209 7.9979ZM8.50012 5C8.50012 4.72386 8.27626 4.5 8.00012 4.5C7.72398 4.5 7.50012 4.72386 7.50012 5V7.5H5.00012C4.72398 7.5 4.50012 7.72386 4.50012 8C4.50012 8.27614 4.72398 8.5 5.00012 8.5H7.50012V11C7.50012 11.2761 7.72398 11.5 8.00012 11.5C8.27626 11.5 8.50012 11.2761 8.50012 11V8.5H11.0001C11.2763 8.5 11.5001 8.27614 11.5001 8C11.5001 7.72386 11.2763 7.5 11.0001 7.5H8.50012V5Z"
          fill={color}
        />
        <path
          d="M7.998 14.0208C11.3243 14.0208 14.0209 11.3242 14.0209 7.99791C14.0209 4.67156 11.3243 1.97501 7.998 1.97501C4.67165 1.97501 1.9751 4.67156 1.9751 7.99791C1.9751 11.3242 4.67165 14.0208 7.998 14.0208Z"
          stroke="black"
        />
      </svg>
    );
  },
);

export default CirciedPlusFilled;
