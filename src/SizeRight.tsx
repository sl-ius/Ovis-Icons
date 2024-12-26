import * as React from "react";
import { IconProps } from "./types";

export const SizeRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99998 12.2426H3.75734M3.75734 12.2426V8M3.75734 12.2426L12.2426 3.75736M12.2426 8V3.75736M12.2426 3.75736H7.99998"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default SizeRight;
