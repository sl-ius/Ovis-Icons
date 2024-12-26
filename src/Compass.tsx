import * as React from "react";
import { IconProps } from "./types";

export const Compass = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 14.0208C11.3243 14.0208 14.0209 11.3242 14.0209 7.99791C14.0209 4.67156 11.3243 1.97501 7.998 1.97501C4.67165 1.97501 1.9751 4.67156 1.9751 7.99791C1.9751 11.3242 4.67165 14.0208 7.998 14.0208Z"
          stroke="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.182 4.81801C11.3457 4.98173 11.3756 5.23643 11.2543 5.43362L8.99153 9.11057C8.94842 9.18063 8.88869 9.23897 8.81764 9.28041L5.42353 11.2603C5.22733 11.3748 4.97865 11.3426 4.81804 11.182C4.65743 11.0214 4.62525 10.7727 4.7397 10.5765L6.7196 7.18237C6.76105 7.11132 6.81939 7.05159 6.88944 7.00848L10.5664 4.74574C10.7636 4.62439 11.0183 4.6543 11.182 4.81801ZM7.46252 8.52316C7.75542 8.81605 8.23029 8.81605 8.52318 8.52316C8.81608 8.23027 8.81608 7.75539 8.52318 7.4625C8.23029 7.16961 7.75542 7.16961 7.46252 7.4625C7.16963 7.75539 7.16963 8.23027 7.46252 8.52316Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Compass;
