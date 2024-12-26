import * as React from "react";
import { IconProps } from "./types";

export const Lua = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.6135 3.18919C13.6135 3.84595 13.081 4.37838 12.4243 4.37838C11.7675 4.37838 11.2351 3.84595 11.2351 3.18919C11.2351 2.53242 11.7675 2 12.4243 2C13.081 2 13.6135 2.53242 13.6135 3.18919ZM7.34318 14C9.97024 14 12.0999 11.8703 12.0999 9.24325C12.0999 6.61617 9.97024 4.48649 7.34318 4.48649C4.7161 4.48649 2.58643 6.61617 2.58643 9.24325C2.58643 11.8703 4.7161 14 7.34318 14ZM9.12693 9.24323C10.1121 9.24323 10.9107 8.44459 10.9107 7.45944C10.9107 6.47429 10.1121 5.67566 9.12693 5.67566C8.14178 5.67566 7.34315 6.47429 7.34315 7.45944C7.34315 8.44459 8.14178 9.24323 9.12693 9.24323Z"
          fill={color}
        />
        <path
          d="M12.4243 4.97297C13.4094 4.97297 14.208 4.17434 14.208 3.18919H13.0189C13.0189 3.51757 12.7526 3.78378 12.4243 3.78378V4.97297ZM10.6405 3.18919C10.6405 4.17434 11.4391 4.97297 12.4243 4.97297V3.78378C12.0959 3.78378 11.8297 3.51757 11.8297 3.18919H10.6405ZM12.4243 1.40541C11.4391 1.40541 10.6405 2.20403 10.6405 3.18919H11.8297C11.8297 2.8608 12.0959 2.59459 12.4243 2.59459V1.40541ZM14.208 3.18919C14.208 2.20403 13.4094 1.40541 12.4243 1.40541V2.59459C12.7526 2.59459 13.0189 2.86081 13.0189 3.18919H14.208ZM11.5053 9.24325C11.5053 11.5419 9.64186 13.4054 7.34318 13.4054V14.5946C10.2986 14.5946 12.6945 12.1987 12.6945 9.24325H11.5053ZM7.34318 5.08108C9.64186 5.08108 11.5053 6.94455 11.5053 9.24325H12.6945C12.6945 6.28778 10.2986 3.89189 7.34318 3.89189V5.08108ZM3.18102 9.24325C3.18102 6.94455 5.04449 5.08108 7.34318 5.08108V3.89189C4.38772 3.89189 1.99183 6.28778 1.99183 9.24325H3.18102ZM7.34318 13.4054C5.04449 13.4054 3.18102 11.5419 3.18102 9.24325H1.99183C1.99183 12.1987 4.38771 14.5946 7.34318 14.5946V13.4054ZM10.3161 7.45944C10.3161 8.11621 9.78369 8.64863 9.12693 8.64863V9.83782C10.4405 9.83782 11.5053 8.77298 11.5053 7.45944H10.3161ZM9.12693 6.27026C9.7837 6.27026 10.3161 6.80268 10.3161 7.45944H11.5053C11.5053 6.1459 10.4405 5.08107 9.12693 5.08107V6.27026ZM7.93774 7.45944C7.93774 6.80268 8.47016 6.27026 9.12693 6.27026V5.08107C7.81339 5.08107 6.74855 6.1459 6.74855 7.45944H7.93774ZM9.12693 8.64863C8.47016 8.64863 7.93774 8.11621 7.93774 7.45944H6.74855C6.74855 8.77298 7.81339 9.83782 9.12693 9.83782V8.64863Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Lua;
