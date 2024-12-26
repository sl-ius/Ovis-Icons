import * as React from "react";
import { IconProps } from "./types";

export const AddCard = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 5C2.5 4.17157 3.17157 3.5 4 3.5H12C12.8284 3.5 13.5 4.17157 13.5 5V9C13.5 9.82843 12.8284 10.5 12 10.5H4C3.17157 10.5 2.5 9.82843 2.5 9V5ZM4 2.5C2.61929 2.5 1.5 3.61929 1.5 5V9C1.5 10.3807 2.61929 11.5 4 11.5H12C13.3807 11.5 14.5 10.3807 14.5 9V5C14.5 3.61929 13.3807 2.5 12 2.5H4ZM3 12.5C2.72386 12.5 2.5 12.7239 2.5 13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13C13.5 12.7239 13.2761 12.5 13 12.5H3Z"
          fill={color}
        />
        <path
          d="M6 7H10M8 9V5"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default AddCard;
