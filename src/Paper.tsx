import * as React from "react";
import { IconProps } from "./types";

export const Paper = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 13.5H3.96343C2.09719 13.5 2.01588 11.0937 3.71956 10.8841M11 13.5C9.04879 13.5 9.04879 10.8696 11 10.8696H3.96343C3.87844 10.8696 3.79715 10.8746 3.71956 10.8841M11 13.5C11.5 13.5 12.5 13.1652 12.5 11.8261V3.5C12.5 2.94772 12.0523 2.5 11.5 2.5H4.71957C4.16728 2.5 3.71956 2.94772 3.71956 3.5V10.8841"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Paper;
