import * as React from "react";
import { IconProps } from "./types";

export const PaintFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1489)">
          <path
            d="M4.48209 12.4906C4.86554 11.6696 5.84649 11.3208 6.66219 11.7155V11.7155L6.90945 11.8854C7.55291 12.3274 7.66244 13.2338 7.14281 13.8164V13.8164C6.51655 14.5185 5.65695 14.9698 4.72336 15.0865L4.2084 15.1509L1.99999 15.1509L2.9636 14.4082C3.60314 13.9153 4.1152 13.2763 4.45686 12.5447L4.48209 12.4906Z"
            fill={color}
          />
          <path
            d="M11.0479 1.63385C11.324 1.15555 11.9356 0.99168 12.4139 1.26782L13.0254 1.62089C13.5037 1.89703 13.6676 2.50862 13.3914 2.98691L8.15837 12.0508L8.09174 11.1166C8.04138 10.4107 7.29371 9.97901 6.65715 10.2884L5.81479 10.6978L11.0479 1.63385Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1489">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default PaintFilled;
