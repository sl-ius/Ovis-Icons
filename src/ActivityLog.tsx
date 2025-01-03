import * as React from "react";
import { IconProps } from "./types";

export const ActivityLog = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.57143 8.25127H14.5M5.57143 5.5727H11.8214M5.57143 2.89413H14.5M3.78571 2.89413H2M3.78571 8.25127H2M5.57143 10.9298H11.8214M5.57143 13.6084H14.5M3.78571 13.6084H2"
          stroke="black"
          stroke-width="1.12752"
          stroke-linecap="round"
        />
      </svg>
    );
  },
);

export default ActivityLog;
