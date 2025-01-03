import * as React from "react";
import { IconProps } from "./types";

export const Import = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 2.5C8.5 2.22386 8.27614 2 8 2C7.72386 2 7.5 2.22386 7.5 2.5V9.29289L5.35355 7.14645C5.15829 6.95118 4.84171 6.95118 4.64645 7.14645C4.45118 7.34171 4.45118 7.65829 4.64645 7.85355L7.64645 10.8536C7.84171 11.0488 8.15829 11.0488 8.35355 10.8536L11.3536 7.85355C11.5488 7.65829 11.5488 7.34171 11.3536 7.14645C11.1583 6.95118 10.8417 6.95118 10.6464 7.14645L8.5 9.29289V2.5ZM4 10.5C4 10.2239 3.77614 10 3.5 10C3.22386 10 3 10.2239 3 10.5V11.5C3 12.8807 4.11929 14 5.5 14H10.5C11.8807 14 13 12.8807 13 11.5V10.5C13 10.2239 12.7761 10 12.5 10C12.2239 10 12 10.2239 12 10.5V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V10.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Import;
