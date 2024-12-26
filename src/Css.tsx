import * as React from "react";
import { IconProps } from "./types";

export const Css = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.43738 14.9295C8.26651 14.9757 8.08644 14.9757 7.91556 14.9295L3.77282 13.8098C3.36756 13.7003 3.07385 13.3493 3.03749 12.9311L2.09449 2.08663C2.04368 1.50236 2.50426 1 3.09073 1H13.2622C13.8487 1 14.3093 1.50236 14.2585 2.08663L13.3155 12.9311C13.2791 13.3493 12.9854 13.7003 12.5801 13.8098L8.43738 14.9295ZM4.47059 3.47059V5.11765H10.2978L10.1665 6.62745H4.7451V8.27451H10.0266L9.87147 10.1356L8.1546 10.7078L6.4827 10.2434L6.38973 9.03488L4.74752 9.1612L4.92907 11.5213L8.19834 12.4294L11.4226 11.3546L11.742 7.52232L11.7423 7.51937L12.0943 3.47059H4.47059Z"
          fill={color}
          stroke="black"
          stroke-width="0.27451"
        />
      </svg>
    );
  },
);

export default Css;
