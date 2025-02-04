import * as React from "react";
import { IconProps } from "./types";

export const Mobile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 4.50243C5 3.674 5.67157 3.00243 6.5 3.00243H9.30461C10.133 3.00243 10.8046 3.674 10.8046 4.50243V11.4063C10.8046 12.2347 10.133 12.9063 9.30461 12.9063H6.5C5.67157 12.9063 5 12.2347 5 11.4063V4.50243ZM6.5 2.00243C5.11929 2.00243 4 3.12172 4 4.50243V11.4063C4 12.787 5.11929 13.9063 6.5 13.9063H9.30461C10.6853 13.9063 11.8046 12.787 11.8046 11.4063V4.50243C11.8046 3.12172 10.6853 2.00243 9.30461 2.00243H6.5ZM6.73999 11.65C6.54669 11.65 6.38999 11.8067 6.38999 12C6.38999 12.1933 6.54669 12.35 6.73999 12.35H9.23999C9.43329 12.35 9.58999 12.1933 9.58999 12C9.58999 11.8067 9.43329 11.65 9.23999 11.65H6.73999Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Mobile;
