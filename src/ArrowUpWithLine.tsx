import * as React from "react";
import { IconProps } from "./types";

export const ArrowUpWithLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 1.5C3.72386 1.5 3.5 1.72386 3.5 2C3.5 2.27614 3.72386 2.5 4 2.5H12C12.2761 2.5 12.5 2.27614 12.5 2C12.5 1.72386 12.2761 1.5 12 1.5H4ZM8.37726 3.6576C8.2837 3.56283 8.15621 3.5093 8.02305 3.50888C7.88988 3.50845 7.76205 3.56116 7.66789 3.65532L3.75369 7.56952C3.55842 7.76478 3.55842 8.08137 3.75369 8.27663C3.94895 8.47189 4.26553 8.47189 4.46079 8.27663L7.52144 5.21598L7.52144 14.0089C7.52144 14.285 7.7453 14.5089 8.02144 14.5089C8.29758 14.5089 8.52144 14.285 8.52144 14.0089V5.22702L11.5547 8.29948C11.7487 8.49599 12.0653 8.49802 12.2618 8.30402C12.4583 8.11001 12.4604 7.79344 12.2664 7.59692L8.37726 3.6576Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowUpWithLine;
