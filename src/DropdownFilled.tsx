import * as React from "react";
import { IconProps } from "./types";

export const DropdownFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.80005 6.5V9.38889C1.80005 9.94117 2.24776 10.3889 2.80005 10.3889H9.33298C9.88527 10.3889 10.333 9.94117 10.333 9.38889V6.5C10.333 5.94772 9.88527 5.5 9.33298 5.5H2.80005C2.24776 5.5 1.80005 5.94772 1.80005 6.5ZM11.7404 7.51213L13.0161 8.78787C13.1333 8.90503 13.3232 8.90503 13.4404 8.78787L14.7161 7.51213C14.9051 7.32314 14.7713 7 14.504 7H11.9525C11.6853 7 11.5514 7.32314 11.7404 7.51213Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DropdownFilled;
