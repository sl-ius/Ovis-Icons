import * as React from "react";
import { IconProps } from "./types";

export const ButtonFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 6V10C1 11.1046 1.89543 12 3 12H13C14.1046 12 15 11.1046 15 10V6C15 4.89543 14.1046 4 13 4H3C1.89543 4 1 4.89543 1 6ZM5.9 8.2C5.9 8.5866 5.5866 8.9 5.2 8.9C4.8134 8.9 4.5 8.5866 4.5 8.2C4.5 7.8134 4.8134 7.5 5.2 7.5C5.5866 7.5 5.9 7.8134 5.9 8.2ZM8.7 8.2C8.7 8.5866 8.3866 8.9 8 8.9C7.6134 8.9 7.3 8.5866 7.3 8.2C7.3 7.8134 7.6134 7.5 8 7.5C8.3866 7.5 8.7 7.8134 8.7 8.2ZM10.8 8.9C11.1866 8.9 11.5 8.5866 11.5 8.2C11.5 7.8134 11.1866 7.5 10.8 7.5C10.4134 7.5 10.1 7.8134 10.1 8.2C10.1 8.5866 10.4134 8.9 10.8 8.9Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ButtonFilled;
