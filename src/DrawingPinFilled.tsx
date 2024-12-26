import * as React from "react";
import { IconProps } from "./types";

export const DrawingPinFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.03784 1.3146C4.11367 1.12402 4.29066 1 4.48682 1H11.0934C11.2896 1 11.4666 1.12402 11.5424 1.31459C11.6182 1.50516 11.5781 1.72506 11.4405 1.87241L10.1054 3.30293V4.60801C10.8301 4.70106 11.4034 5.00965 11.8179 5.51954C12.3051 6.11879 12.5161 6.92749 12.5788 7.78655C12.5892 7.92897 12.5427 8.06952 12.4506 8.17433C12.3585 8.27914 12.229 8.33872 12.0934 8.33872L3.48682 8.33873C3.35771 8.33872 3.23388 8.28469 3.14259 8.18852C3.05129 8.09234 3 7.9619 3 7.82588C3 7.0323 3.12967 6.27591 3.6108 5.67937C4.02501 5.16581 4.64302 4.84038 5.4749 4.65945L5.47498 3.30293L4.1397 1.87242C4.00217 1.72508 3.96202 1.50518 4.03784 1.3146ZM8.31886 9.9861C8.31886 9.70996 8.095 9.4861 7.81886 9.4861C7.54272 9.4861 7.31886 9.70996 7.31886 9.9861V14.9861C7.31886 15.2622 7.54272 15.4861 7.81886 15.4861C8.095 15.4861 8.31886 15.2622 8.31886 14.9861V9.9861Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DrawingPinFilled;