import * as React from "react";
import { IconProps } from "./types";

export const CirciedCrossFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.0209 7.9979C14.0209 11.3242 11.3243 14.0208 7.998 14.0208C4.67165 14.0208 1.9751 11.3242 1.9751 7.9979C1.9751 4.67155 4.67165 1.975 7.998 1.975C11.3243 1.975 14.0209 4.67155 14.0209 7.9979ZM6.35371 5.64645C6.15845 5.45118 5.84186 5.45118 5.6466 5.64644C5.45134 5.8417 5.45134 6.15829 5.6466 6.35355L7.29302 7.99998L5.64657 9.64645C5.45131 9.84171 5.45131 10.1583 5.64657 10.3536C5.84183 10.5488 6.15842 10.5488 6.35368 10.3535L8.00012 8.70709L9.64657 10.3535C9.84183 10.5488 10.1584 10.5488 10.3537 10.3536C10.5489 10.1583 10.5489 9.84171 10.3537 9.64645L8.70723 7.99998L10.3536 6.35355C10.5489 6.15829 10.5489 5.8417 10.3536 5.64644C10.1584 5.45118 9.8418 5.45118 9.64654 5.64645L8.00012 7.29287L6.35371 5.64645Z"
          fill={color}
        />
        <path
          d="M7.998 14.0208C11.3243 14.0208 14.0209 11.3242 14.0209 7.99791C14.0209 4.67156 11.3243 1.97501 7.998 1.97501C4.67165 1.97501 1.9751 4.67156 1.9751 7.99791C1.9751 11.3242 4.67165 14.0208 7.998 14.0208Z"
          stroke="black"
        />
      </svg>
    );
  },
);

export default CirciedCrossFilled;
