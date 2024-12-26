import * as React from "react";
import { IconProps } from "./types";

export const Html = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.27472 15.0215C8.09517 15.0728 7.90483 15.0728 7.72528 15.0215L3.76065 13.8888C3.36266 13.7751 3.07586 13.4279 3.03929 13.0156L2.09655 2.38837C2.04467 1.8035 2.50547 1.3 3.09264 1.3H12.9074C13.4945 1.3 13.9553 1.8035 13.9035 2.38836L12.9607 13.0156C12.9241 13.4279 12.6373 13.7751 12.2393 13.8888L8.27472 15.0215ZM4.57602 8.4L4.11602 3.8H11.7V5.4H5.884L6.024 6.8H11.576L11.1494 11.4935L8.01591 12.538L4.86122 11.6179L4.60464 9.206L4.60401 9.006H6.20401V9.11521L6.33879 10.3821L7.9841 10.862L9.65066 10.3065L9.82398 8.4H4.57602Z"
          fill={color}
          stroke="black"
          stroke-width="0.2"
        />
      </svg>
    );
  },
);

export default Html;
