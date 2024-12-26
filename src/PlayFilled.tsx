import * as React from "react";
import { IconProps } from "./types";

export const PlayFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.838 9.55002C13.8018 8.98051 13.8247 7.59415 12.8803 6.99313L4.73347 1.80881C3.73488 1.17334 2.42815 1.89067 2.42815 3.0743L2.42815 13.0726C2.42815 14.2341 3.69132 14.9549 4.69125 14.364L12.838 9.55002Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled;
