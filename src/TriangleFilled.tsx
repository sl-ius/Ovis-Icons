import * as React from "react";
import { IconProps } from "./types";

export const TriangleFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.15868 11.6099L7.343 3.46312C7.74368 2.83349 8.66791 2.84875 9.04759 3.49127L13.8616 11.6381C14.2555 12.3047 13.775 13.1468 13.0007 13.1468H3.00234C2.21325 13.1468 1.73503 12.2756 2.15868 11.6099Z"
          fill={color}
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default TriangleFilled;
