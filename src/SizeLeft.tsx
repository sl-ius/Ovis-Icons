import * as React from "react";
import { IconProps } from "./types";

export const SizeLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.00002 12.2426H12.2427M12.2427 12.2426V8M12.2427 12.2426L3.75738 3.75736M3.75738 8V3.75736M3.75738 3.75736H8.00002"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default SizeLeft;
