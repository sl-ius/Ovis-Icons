import * as React from "react";
import { IconProps } from "./types";

export const StarFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.12 11.09L11.4878 13.6158C11.6447 13.7335 11.8595 13.5786 11.7975 13.3926L10.5456 9.63675C10.5184 9.55509 10.5465 9.46516 10.6153 9.41351L14.02 6.86C14.1738 6.74468 14.0922 6.5 13.9 6.5H10.1354C10.0536 6.5 9.98008 6.45021 9.94971 6.37428L8.2127 2.03174C8.14238 1.85595 7.88984 1.8672 7.83544 2.04855L6.54276 6.35747C6.51738 6.44207 6.43952 6.5 6.35119 6.5H2.1C1.9078 6.5 1.82624 6.74468 1.98 6.86L5.38468 9.41351C5.45355 9.46516 5.48164 9.55509 5.45442 9.63675L4.20247 13.3926C4.14046 13.5786 4.35534 13.7335 4.5122 13.6158L7.88 11.09C7.95111 11.0367 8.04889 11.0367 8.12 11.09Z"
          fill={color}
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default StarFilled;
