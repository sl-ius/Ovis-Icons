import * as React from "react";
import { IconProps } from "./types";

export const Dropdown = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.30005 6.5C2.30005 6.22386 2.52391 6 2.80005 6H9.33298C9.60913 6 9.83298 6.22386 9.83298 6.5V9.38889C9.83298 9.66503 9.60913 9.88889 9.33298 9.88889H2.80005C2.52391 9.88889 2.30005 9.66503 2.30005 9.38889V6.5ZM2.80005 5C1.97162 5 1.30005 5.67157 1.30005 6.5V9.38889C1.30005 10.2173 1.97162 10.8889 2.80005 10.8889H9.33298C10.1614 10.8889 10.833 10.2173 10.833 9.38889V6.5C10.833 5.67157 10.1614 5 9.33298 5H2.80005ZM11.7404 7.51213L13.0161 8.78787C13.1333 8.90503 13.3232 8.90503 13.4404 8.78787L14.7161 7.51213C14.9051 7.32314 14.7713 7 14.504 7H11.9525C11.6853 7 11.5514 7.32314 11.7404 7.51213Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Dropdown;
