import * as React from "react";
import { IconProps } from "./types";

export const Button = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 6C1.5 5.17157 2.17157 4.5 3 4.5H13C13.8284 4.5 14.5 5.17157 14.5 6V10C14.5 10.8284 13.8284 11.5 13 11.5H3C2.17157 11.5 1.5 10.8284 1.5 10V6ZM3 3.5C1.61929 3.5 0.5 4.61929 0.5 6V10C0.5 11.3807 1.61929 12.5 3 12.5H13C14.3807 12.5 15.5 11.3807 15.5 10V6C15.5 4.61929 14.3807 3.5 13 3.5H3ZM5.9 8.2C5.9 8.5866 5.5866 8.9 5.2 8.9C4.8134 8.9 4.5 8.5866 4.5 8.2C4.5 7.8134 4.8134 7.5 5.2 7.5C5.5866 7.5 5.9 7.8134 5.9 8.2ZM8.7 8.2C8.7 8.5866 8.3866 8.9 8 8.9C7.6134 8.9 7.3 8.5866 7.3 8.2C7.3 7.8134 7.6134 7.5 8 7.5C8.3866 7.5 8.7 7.8134 8.7 8.2ZM10.8 8.9C11.1866 8.9 11.5 8.5866 11.5 8.2C11.5 7.8134 11.1866 7.5 10.8 7.5C10.4134 7.5 10.1 7.8134 10.1 8.2C10.1 8.5866 10.4134 8.9 10.8 8.9Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Button;
