import * as React from "react";
import { IconProps } from "./types";

export const ChatBubble = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 3H3.5C2.39543 3 1.5 3.89543 1.5 5V9.34783C1.5 10.4524 2.39543 11.3478 3.5 11.3478H6.375L10.1667 14V11.3478H12.5C13.6046 11.3478 14.5 10.4524 14.5 9.34783V5C14.5 3.89543 13.6046 3 12.5 3Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ChatBubble;
