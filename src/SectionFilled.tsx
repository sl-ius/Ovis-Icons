import * as React from "react";
import { IconProps } from "./types";

export const SectionFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.50238 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V12.5047C1.5 13.6093 2.39543 14.5047 3.5 14.5047H12.5047C13.6093 14.5047 14.5047 13.6093 14.5047 12.5047V5.9605H8.00238C7.72624 5.9605 7.50238 5.73664 7.50238 5.4605V1.5ZM14.5047 4.9605V3.50001C14.5047 2.39544 13.6093 1.5 12.5047 1.5L8.50238 1.5V4.9605H14.5047Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default SectionFilled;
