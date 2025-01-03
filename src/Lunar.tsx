import * as React from "react";
import { IconProps } from "./types";

export const Lunar = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.78134 11.1959C6.61684 11.1959 9.72612 8.08663 9.72612 4.25113C9.72612 3.1946 9.48989 2.19234 9.06728 1.29511C11.8399 2.03674 13.882 4.56696 13.882 7.57346C13.882 11.1625 10.9725 14.072 7.38345 14.072C5.11525 14.072 3.1177 12.91 1.95487 11.1472C2.22602 11.1794 2.50183 11.1959 2.78134 11.1959Z"
          stroke="black"
        />
      </svg>
    );
  },
);

export default Lunar;
