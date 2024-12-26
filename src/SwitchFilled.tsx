import * as React from "react";
import { IconProps } from "./types";

export const SwitchFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 12H5.21429C3.82143 12 1.5 10.8 1.5 8C1.5 5.2 3.82143 4 5.21429 4H10.7857C12.0238 4 14.5 5.2 14.5 8C14.5 10.8 12.0238 12 10.7857 12H8ZM13.025 7.99791C13.025 9.38552 11.9001 10.5104 10.5125 10.5104C9.12489 10.5104 8 9.38552 8 7.99791C8 6.61029 9.12489 5.4854 10.5125 5.4854C11.9001 5.4854 13.025 6.61029 13.025 7.99791Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default SwitchFilled;
