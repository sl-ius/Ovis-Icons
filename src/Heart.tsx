import * as React from "react";
import { IconProps } from "./types";

export const Heart = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.65164 4.45603C7.84566 4.64447 8.15434 4.64447 8.34836 4.45603L8.88389 3.9359L8.53553 3.57723L8.88389 3.9359C10.1687 2.68803 12.2577 2.68803 13.5425 3.9359C14.8192 5.17583 14.8192 7.17994 13.5425 8.41988L8.34836 13.4646C8.15434 13.6531 7.84566 13.6531 7.65164 13.4646L2.45749 8.41988C1.18084 7.17994 1.18084 5.17583 2.45749 3.9359C3.74231 2.68803 5.83129 2.68803 7.11611 3.9359L7.65164 4.45603Z"
          stroke="black"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Heart;
