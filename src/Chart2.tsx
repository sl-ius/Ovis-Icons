import * as React from "react";
import { IconProps } from "./types";

export const Chart2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.29336 3C5.29336 2.17157 5.96494 1.5 6.79336 1.5H9.23765C10.0661 1.5 10.7377 2.17157 10.7377 3V8H13.5495C14.3779 8 15.0495 8.67157 15.0495 9.5V13C15.0495 13.8284 14.3779 14.5 13.5495 14.5H10.2377H5.79336H2.80005C1.97162 14.5 1.30005 13.8284 1.30005 13V7.20451C1.30005 6.37609 1.97162 5.70451 2.80005 5.70451H5.29336V3ZM5.29336 6.70451H2.80005C2.52391 6.70451 2.30005 6.92837 2.30005 7.20451V13C2.30005 13.2761 2.52391 13.5 2.80005 13.5H5.29336V6.70451ZM6.29336 13.5H9.73765V8.5V3C9.73765 2.72386 9.51379 2.5 9.23765 2.5H6.79336C6.51722 2.5 6.29336 2.72386 6.29336 3V6.20451V13.5ZM10.7377 13.5H13.5495C13.8256 13.5 14.0495 13.2761 14.0495 13V9.5C14.0495 9.22386 13.8256 9 13.5495 9H10.7377V13.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Chart2;
