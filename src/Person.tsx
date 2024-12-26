import * as React from "react";
import { IconProps } from "./types";

export const Person = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.09156 1.5C6.18849 1.5 4.64575 3.04274 4.64575 4.94581C4.64575 6.84887 6.18849 8.39162 8.09156 8.39162C9.99461 8.39162 11.5374 6.84887 11.5374 4.94581C11.5374 3.04274 9.99461 1.5 8.09156 1.5ZM5.64575 4.94581C5.64575 3.59503 6.74078 2.5 8.09156 2.5C9.44233 2.5 10.5374 3.59503 10.5374 4.94581C10.5374 6.29658 9.44233 7.39162 8.09156 7.39162C6.74078 7.39162 5.64575 6.29658 5.64575 4.94581ZM8.09157 9.18473C6.3979 9.18473 4.8096 9.56995 3.63084 10.4301C2.43152 11.3053 1.69995 12.6422 1.69995 14.4236H2.69995C2.69995 12.9512 3.28727 11.9187 4.2203 11.2379C5.17389 10.5421 6.53139 10.1847 8.09157 10.1847C9.65174 10.1847 11.0092 10.5421 11.9628 11.2379C12.8959 11.9187 13.4832 12.9512 13.4832 14.4236H14.4832C14.4832 12.6422 13.7516 11.3052 12.5523 10.4301C11.3735 9.56995 9.78523 9.18473 8.09157 9.18473Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Person;
