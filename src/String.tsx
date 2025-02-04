import * as React from "react";
import { IconProps } from "./types";

export const String = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5L12 2.5C12.8284 2.5 13.5 3.17158 13.5 4V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V4ZM4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V12C1.5 13.3807 2.61929 14.5 4 14.5H12C13.3807 14.5 14.5 13.3807 14.5 12V4C14.5 2.61929 13.3807 1.5 12 1.5L4 1.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5V6.04739C4 6.32353 4.22386 6.54739 4.5 6.54739C4.77614 6.54739 5 6.32353 5 6.04739V5H7.61057V11.2211H6.30529C6.02914 11.2211 5.80529 11.445 5.80529 11.7211C5.80529 11.9973 6.02914 12.2211 6.30529 12.2211H8.11057H9.91586C10.192 12.2211 10.4159 11.9973 10.4159 11.7211C10.4159 11.445 10.192 11.2211 9.91586 11.2211H8.61057V5H11.2211V6.04739C11.2211 6.32353 11.445 6.54739 11.7211 6.54739C11.9973 6.54739 12.2211 6.32353 12.2211 6.04739V4.5C12.2211 4.22386 11.9973 4 11.7211 4H8.11057H4.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default String;
