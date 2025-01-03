import * as React from "react";
import { IconProps } from "./types";

export const Play = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.3293 8.68909C12.6506 8.49925 12.6582 8.03714 12.3434 7.8368L4.19659 2.65247C3.86373 2.44065 3.42815 2.67976 3.42815 3.0743L3.42815 13.0726C3.42815 13.4598 3.84921 13.7001 4.18252 13.5031L12.3293 8.68909ZM12.8803 6.99313C13.8247 7.59415 13.8018 8.98051 12.838 9.55002L4.69125 14.364C3.69132 14.9549 2.42815 14.2341 2.42815 13.0726L2.42815 3.0743C2.42815 1.89067 3.73488 1.17334 4.73347 1.80881L12.8803 6.99313Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Play;
