import * as React from "react";
import { IconProps } from "./types";

export const Slider = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.55001 8.5H0.5C0.223858 8.5 0 8.27614 0 8C0 7.72386 0.223858 7.5 0.5 7.5H6.55001C6.78164 6.35888 7.79052 5.5 9 5.5C10.2095 5.5 11.2184 6.35888 11.45 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H11.45C11.2184 9.64111 10.2095 10.5 9 10.5C7.79052 10.5 6.78165 9.64111 6.55001 8.5ZM7.5 8C7.5 7.17157 8.17157 6.5 9 6.5C9.82842 6.5 10.5 7.17158 10.5 8C10.5 8.82842 9.82842 9.5 9 9.5C8.17158 9.5 7.5 8.82842 7.5 8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Slider;
