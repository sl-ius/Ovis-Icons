import * as React from "react";
import { IconProps } from "./types";

export const Autumn = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1559)">
          <path
            d="M7.03922 15C7.86275 14.1765 8 13.1471 8 11.5M8 11.5L4.84314 12.5294L5.66667 10.3333L2.09804 10.6078L2.64706 9.5098L1 8.13725L2.64706 7.58824L2.37255 6.21569L6.21569 7.58824L4.56863 2.09804L6.4902 2.92157L7.86274 1L9.23529 2.92157L11.1569 2.09804L9.78431 7.58824L13.3529 6.21569L13.0784 7.58824L15 8.13725L13.3529 9.5098L14.1765 10.8824L10.3333 10.6078L11.1569 12.5294L8 11.5Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1559">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Autumn;
