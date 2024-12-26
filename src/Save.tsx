import * as React from "react";
import { IconProps } from "./types";

export const Save = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4.5C2 3.67157 2.67157 3 3.5 3H5V5C5 5.82843 5.67157 6.5 6.5 6.5H9.5C10.3284 6.5 11 5.82843 11 5V3.05995C11.2768 3.14067 11.5275 3.30037 11.719 3.52381L13.6389 5.76366C13.8719 6.03553 14 6.38178 14 6.73985V11.5C14 12.3284 13.3284 13 12.5 13H11V10.5C11 9.67157 10.3284 9 9.5 9H6.5C5.67157 9 5 9.67157 5 10.5V13H3.5C2.67157 13 2 12.3284 2 11.5V4.5ZM5.5 14H3.5C2.11929 14 1 12.8807 1 11.5V4.5C1 3.11929 2.11929 2 3.5 2H5.5H8.5H10.5H10.5801C11.3099 2 12.0033 2.31891 12.4783 2.87302L14.3981 5.11287C14.7865 5.56598 15 6.14307 15 6.73985V11.5C15 12.8807 13.8807 14 12.5 14H10.5H5.5ZM10 13H6V10.5C6 10.2239 6.22386 10 6.5 10H9.5C9.77614 10 10 10.2239 10 10.5V13ZM10 3H8.5H6V5C6 5.27614 6.22386 5.5 6.5 5.5H9.5C9.77614 5.5 10 5.27614 10 5V3Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Save;
