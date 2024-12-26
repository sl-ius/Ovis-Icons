import * as React from "react";
import { IconProps } from "./types";

export const Solar = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1213)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V3C8.5 3.27614 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.27614 7.5 3V0.5C7.5 0.223858 7.72386 0 8 0ZM4.525 8C4.525 6.08081 6.08081 4.525 8 4.525C9.91917 4.525 11.475 6.08081 11.475 8C11.475 9.91918 9.91918 11.475 8 11.475C6.08081 11.475 4.525 9.91917 4.525 8ZM8 5.475C6.60548 5.475 5.475 6.60548 5.475 8C5.475 9.39451 6.60548 10.525 8 10.525C9.3945 10.525 10.525 9.3945 10.525 8C10.525 6.60548 9.39451 5.475 8 5.475ZM3.05021 2.34315C2.85495 2.14789 2.53836 2.14789 2.3431 2.34315C2.14784 2.53841 2.14784 2.85499 2.3431 3.05025L4.11087 4.81802C4.30613 5.01328 4.62271 5.01328 4.81798 4.81802C5.01324 4.62276 5.01324 4.30618 4.81798 4.11091L3.05021 2.34315ZM0 8.00002C0 7.72387 0.223858 7.50002 0.5 7.50002H3C3.27614 7.50002 3.5 7.72387 3.5 8.00002C3.5 8.27616 3.27614 8.50002 3 8.50002H0.5C0.223858 8.50002 0 8.27616 0 8.00002ZM8.5 13C8.5 12.7239 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.7239 7.5 13V15.5C7.5 15.7761 7.72386 16 8 16C8.27614 16 8.5 15.7761 8.5 15.5V13ZM11.182 11.182C11.3772 10.9867 11.6938 10.9867 11.8891 11.182L13.6568 12.9497C13.8521 13.145 13.8521 13.4616 13.6568 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.182 11.8891C10.9867 11.6938 10.9867 11.3772 11.182 11.182ZM13 7.49999C12.7239 7.49999 12.5 7.72385 12.5 7.99999C12.5 8.27613 12.7239 8.49999 13 8.49999H15.5C15.7761 8.49999 16 8.27613 16 7.99999C16 7.72385 15.7761 7.49999 15.5 7.49999H13ZM2.3431 13.6569C2.14784 13.4616 2.14784 13.145 2.3431 12.9498L4.11087 11.182C4.30613 10.9867 4.62271 10.9867 4.81798 11.182C5.01324 11.3773 5.01324 11.6938 4.81798 11.8891L3.05021 13.6569C2.85495 13.8521 2.53836 13.8521 2.3431 13.6569ZM11.182 4.11091C10.9867 4.30617 10.9867 4.62275 11.182 4.81801C11.3772 5.01327 11.6938 5.01327 11.8891 4.81801L13.6568 3.05024C13.8521 2.85498 13.8521 2.5384 13.6568 2.34314C13.4616 2.14788 13.145 2.14788 12.9497 2.34314L11.182 4.11091Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1213">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Solar;
