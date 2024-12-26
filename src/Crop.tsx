import * as React from "react";
import { IconProps } from "./types";

export const Crop = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1398)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.11017 0.5C4.11017 0.223858 3.88631 0 3.61017 0C3.33402 0 3.11017 0.223858 3.11017 0.5V3.33237L0.5 3.33237C0.223858 3.33237 0 3.55623 0 3.83237C0 4.10852 0.223857 4.33237 0.5 4.33237L3.11017 4.33238V10.1633C3.11017 11.544 4.22945 12.6633 5.61017 12.6633L11.9965 12.6633V15.4957C11.9965 15.7718 12.2204 15.9957 12.4965 15.9957C12.7727 15.9957 12.9965 15.7718 12.9965 15.4957V12.6633L15.4956 12.6633C15.7718 12.6633 15.9956 12.4394 15.9956 12.1633C15.9956 11.8872 15.7718 11.6633 15.4956 11.6633L12.9965 11.6633V5.83238C12.9965 4.45167 11.8772 3.33238 10.4965 3.33238L4.11017 3.33238V0.5ZM4.11017 4.33238V10.1633C4.11017 10.9917 4.78174 11.6633 5.61017 11.6633L11.9965 11.6633V5.83238C11.9965 5.00395 11.325 4.33238 10.4965 4.33238L4.11017 4.33238Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1398">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Crop;
