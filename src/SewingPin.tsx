import * as React from "react";
import { IconProps } from "./types";

export const SewingPin = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.9999 1C6.633 1 5.5249 2.1081 5.5249 3.475C5.5249 4.67061 6.37269 5.66822 7.4999 5.89947V13.975C7.4999 14.2511 7.72376 14.475 7.9999 14.475C8.27604 14.475 8.4999 14.2511 8.4999 13.975V5.89947C9.62711 5.66822 10.4749 4.67061 10.4749 3.475C10.4749 2.1081 9.3668 1 7.9999 1ZM8.13671 4.99395C8.91484 4.92476 9.5249 4.27112 9.5249 3.475C9.5249 2.63277 8.84213 1.95 7.9999 1.95C7.15767 1.95 6.4749 2.63277 6.4749 3.475C6.4749 4.27112 7.08496 4.92476 7.8631 4.99395C7.90658 4.98161 7.95247 4.975 7.9999 4.975C8.04734 4.975 8.09323 4.98161 8.13671 4.99395Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default SewingPin;
