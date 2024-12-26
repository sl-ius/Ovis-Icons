import * as React from "react";
import { IconProps } from "./types";

export const CirciedTickFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.0209 7.9979C14.0209 11.3242 11.3243 14.0208 7.998 14.0208C4.67165 14.0208 1.9751 11.3242 1.9751 7.9979C1.9751 4.67155 4.67165 1.975 7.998 1.975C11.3243 1.975 14.0209 4.67155 14.0209 7.9979ZM10.8315 5.85373C10.9779 5.61956 10.9067 5.31108 10.6725 5.16473C10.4383 5.01837 10.1299 5.08956 9.9835 5.32373L7.30516 9.60906L5.94273 8.24662C5.74746 8.05136 5.43088 8.05136 5.23562 8.24662C5.04036 8.44189 5.04036 8.75847 5.23562 8.95373L7.04249 10.7606C7.15023 10.8683 7.30123 10.9211 7.45262 10.9038C7.60402 10.8866 7.73929 10.8013 7.82004 10.672L10.8315 5.85373Z"
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

export default CirciedTickFilled;
