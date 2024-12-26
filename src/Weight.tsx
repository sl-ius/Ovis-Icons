import * as React from "react";
import { IconProps } from "./types";

export const Weight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.600098 2C0.600098 1.44772 1.04781 1 1.6001 1H14.6001C15.1524 1 15.6001 1.44772 15.6001 2V2C15.6001 2.55228 15.1524 3 14.6001 3H1.6001C1.04781 3 0.600098 2.55228 0.600098 2V2Z"
          fill={color}
        />
        <path
          d="M0.850098 5C0.850098 4.58579 1.18588 4.25 1.6001 4.25H14.6001C15.0143 4.25 15.3501 4.58579 15.3501 5V5C15.3501 5.41421 15.0143 5.75 14.6001 5.75H1.6001C1.18588 5.75 0.850098 5.41421 0.850098 5V5Z"
          fill={color}
        />
        <path
          d="M1.6001 7.4C1.26873 7.4 1.0001 7.66863 1.0001 8V8C1.0001 8.33137 1.26873 8.6 1.6001 8.6H14.6001C14.9315 8.6 15.2001 8.33137 15.2001 8V8C15.2001 7.66863 14.9315 7.4 14.6001 7.4H1.6001Z"
          fill={color}
        />
        <path
          d="M1.1001 11C1.1001 10.7239 1.32396 10.5 1.6001 10.5H14.6001C14.8762 10.5 15.1001 10.7239 15.1001 11V11C15.1001 11.2761 14.8762 11.5 14.6001 11.5H1.6001C1.32396 11.5 1.1001 11.2761 1.1001 11V11Z"
          fill={color}
        />
        <path
          d="M1.6001 13.65C1.4068 13.65 1.2501 13.8067 1.2501 14V14C1.2501 14.1933 1.4068 14.35 1.6001 14.35H14.6001C14.7934 14.35 14.9501 14.1933 14.9501 14V14C14.9501 13.8067 14.7934 13.65 14.6001 13.65H1.6001Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Weight;
