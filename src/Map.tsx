import * as React from "react";
import { IconProps } from "./types";

export const Map = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.69231 14L2.84706 13.5597C2.35963 13.4842 2 13.0647 2 12.5714V4.30952C2 3.69628 2.54691 3.2275 3.15294 3.32129L5.69231 3.71429M5.69231 14V3.71429M5.69231 14L9.84615 12.2857M5.69231 3.71429L9.84615 2M9.84615 2V12.2857M9.84615 2L13.3815 3.45903C13.7558 3.6135 14 3.97847 14 4.3834V12.5055C14 13.2176 13.2768 13.7015 12.6185 13.4299L9.84615 12.2857"
          stroke="black"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default Map;
