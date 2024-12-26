import * as React from "react";
import { IconProps } from "./types";

export const SliderFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 10C10.1046 10 11 9.10456 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10456 7.89543 10 9 10ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H5.5C5.77614 7.5 6 7.72386 6 8C6 8.27614 5.77614 8.5 5.5 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.5 7.5C12.2239 7.5 12 7.72386 12 8C12 8.27614 12.2239 8.5 12.5 8.5H15.5C15.7761 8.5 16 8.27614 16 8C16 7.72386 15.7761 7.5 15.5 7.5H12.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default SliderFilled;
