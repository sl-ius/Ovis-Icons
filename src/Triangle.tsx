import * as React from "react";
import { IconProps } from "./types";

export const Triangle = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.61722 3.74564C8.42738 3.42438 7.96527 3.41675 7.76493 3.73157L2.5806 11.8784C2.36878 12.2112 2.60789 12.6468 3.00243 12.6468H13.0008C13.3879 12.6468 13.6282 12.2257 13.4312 11.8924L8.61722 3.74564ZM6.92127 3.19469C7.52228 2.25023 8.90864 2.27312 9.47815 3.23691L14.2922 11.3837C14.883 12.3836 14.1622 13.6468 13.0008 13.6468H3.00243C1.8188 13.6468 1.10148 12.3401 1.73694 11.3415L6.92127 3.19469Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Triangle;
