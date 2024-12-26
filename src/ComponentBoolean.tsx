import * as React from "react";
import { IconProps } from "./types";

export const ComponentBoolean = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.76771 9.06065C2.18192 8.47487 2.18192 7.52512 2.76771 6.93933L7.01035 2.69669C7.28517 2.42187 7.6401 2.27598 7.99997 2.25903V13.741C7.6401 13.724 7.28517 13.5781 7.01035 13.3033L2.76771 9.06065ZM2.0606 6.23223C1.08429 7.20854 1.08429 8.79145 2.0606 9.76776L6.30324 14.0104C7.27955 14.9867 8.86247 14.9867 9.83878 14.0104L14.0814 9.76776C15.0577 8.79145 15.0577 7.20854 14.0814 6.23223L9.83878 1.98959C8.86247 1.01328 7.27956 1.01328 6.30325 1.98959L2.0606 6.23223Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ComponentBoolean;
