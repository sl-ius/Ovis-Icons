import * as React from "react";
import { IconProps } from "./types";

export const Trashcan = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.58 1.50569C5.30386 1.50569 5.08 1.72955 5.08 2.00569C5.08 2.28183 5.30386 2.50569 5.58 2.50569H10.3843C10.6605 2.50569 10.8843 2.28183 10.8843 2.00569C10.8843 1.72955 10.6605 1.50569 10.3843 1.50569H5.58ZM2.5 3.60213C2.22386 3.60213 2 3.82598 2 4.10213C2 4.37827 2.22386 4.60213 2.5 4.60213H3.63055L3.92122 11.6393C3.97655 12.9787 5.07852 14.0361 6.41909 14.0361H9.54659C10.9043 14.0361 12.0139 12.9524 12.0459 11.595L12.2107 4.60213H13.5C13.7761 4.60213 14 4.37827 14 4.10213C14 3.82598 13.7761 3.60213 13.5 3.60213H11.7224H4.11032H2.5ZM4.92037 11.598L4.6314 4.60213H11.2105L11.0462 11.5714C11.027 12.3859 10.3612 13.0361 9.54659 13.0361H6.41909C5.61475 13.0361 4.95357 12.4016 4.92037 11.598Z"
          fill={color}
        />
        <path d="M7 6V11" stroke="black" stroke-linecap="round" />
        <path d="M9 6V11" stroke="black" stroke-linecap="round" />
      </svg>
    );
  },
);

export default Trashcan;
