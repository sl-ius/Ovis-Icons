import * as React from "react";
import { IconProps } from "./types";

export const Airplay = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3C2.17157 3 1.5 3.67157 1.5 4.5V9.5C1.5 10.3284 2.17157 11 3 11H4.5C4.77614 11 5 11.2239 5 11.5C5 11.7761 4.77614 12 4.5 12H3C1.61929 12 0.5 10.8807 0.5 9.5V4.5C0.5 3.11929 1.61929 2 3 2H13C14.3807 2 15.5 3.11929 15.5 4.5V9.5C15.5 10.8807 14.3807 12 13 12H11.5C11.2239 12 11 11.7761 11 11.5C11 11.2239 11.2239 11 11.5 11H13C13.8284 11 14.5 10.3284 14.5 9.5V4.5C14.5 3.67157 13.8284 3 13 3H3ZM8 9.5C8.16148 9.5 8.31301 9.57798 8.40687 9.70938L10.9069 13.2094C11.0157 13.3618 11.0303 13.5623 10.9446 13.7288C10.8589 13.8953 10.6873 14 10.5 14H5.5C5.31271 14 5.14112 13.8953 5.05542 13.7288C4.96971 13.5623 4.98427 13.3618 5.09313 13.2094L7.59313 9.70938C7.68699 9.57798 7.83852 9.5 8 9.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Airplay;
