import * as React from "react";
import { IconProps } from "./types";

export const Extension = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.46226 13.7075V14.5H3.5C2.39543 14.5 1.5 13.6046 1.5 12.5V10.5377H2.5566C3.57781 10.5377 4.40566 9.70988 4.40566 8.68868C4.40566 7.66747 3.57781 6.83962 2.5566 6.83962H1.5V5.14151C1.5 4.03694 2.39543 3.14151 3.5 3.14151H5.46226V2.21698C5.46226 1.26872 6.23098 0.5 7.17925 0.5C8.12751 0.5 8.89623 1.26872 8.89623 2.21698V3.14151H10.8585C11.9631 3.14151 12.8585 4.03694 12.8585 5.14151V7.10377H13.783C14.7313 7.10377 15.5 7.87249 15.5 8.82076C15.5 9.76902 14.7313 10.5377 13.783 10.5377H12.8585V12.5C12.8585 13.6046 11.9631 14.5 10.8585 14.5H9.16038V13.7075C9.16038 12.6863 8.33253 11.8585 7.31132 11.8585C6.29012 11.8585 5.46226 12.6863 5.46226 13.7075Z"
          stroke="black"
          stroke-linecap="square"
        />
      </svg>
    );
  },
);

export default Extension;
