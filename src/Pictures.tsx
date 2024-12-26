import * as React from "react";
import { IconProps } from "./types";

export const Pictures = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_2721)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.30421 1.76345C7.50401 1.54904 6.68151 2.02391 6.46709 2.82411L5.84991 5.12747L5.80659 5.28913L7.64132 4.79752C8.97498 4.44017 10.3458 5.23162 10.7032 6.56529L11.3204 8.86865L11.7522 10.4801C12.2184 10.328 12.6008 9.95067 12.7372 9.44166L13.3544 7.1383L13.9716 4.83494C14.186 4.03474 13.7111 3.21224 12.9109 2.99782L10.6076 2.38064L8.30421 1.76345ZM11.9958 11.4516C12.8024 11.2128 13.4695 10.5726 13.7032 9.70048L14.3203 7.39712L14.9375 5.09376C15.2949 3.76009 14.5034 2.38925 13.1698 2.0319L10.8664 1.41471L8.56303 0.797527C7.22937 0.440172 5.85852 1.23163 5.50117 2.56529L4.88398 4.86865L4.69124 5.58799L3.03459 6.03188C1.70093 6.38924 0.90947 7.76008 1.26682 9.09375L1.88401 11.3971L2.50119 13.7005C2.85855 15.0341 4.22939 15.8256 5.56305 15.4682L7.86642 14.8511L10.1698 14.2339C11.4103 13.9015 12.1817 12.6922 11.9958 11.4516ZM3.29341 6.99781C2.49321 7.21222 2.01834 8.03473 2.23275 8.83493L2.84993 11.1383L3.46712 13.4416C3.68153 14.2418 4.50404 14.7167 5.30423 14.5023L7.6076 13.8851L9.91096 13.2679C10.7112 13.0535 11.186 12.231 10.9716 11.4308L10.3544 9.12747L9.73725 6.82411C9.52284 6.02391 8.70033 5.54903 7.90013 5.76345L5.59677 6.38063L3.29341 6.99781ZM6.23314 8.04972C5.9859 8.11597 5.83918 8.3701 5.90542 8.61734C5.97167 8.86458 6.22581 9.01131 6.47305 8.94506C6.72029 8.87881 6.86701 8.62468 6.80076 8.37744C6.73452 8.13019 6.48038 7.98347 6.23314 8.04972ZM5.03609 8.85028C4.8412 8.12292 5.27284 7.37528 6.0002 7.18039C6.72756 6.98549 7.4752 7.41714 7.6701 8.1445C7.86499 8.87186 7.43334 9.6195 6.70598 9.81439C5.97862 10.0093 5.23099 9.57764 5.03609 8.85028Z"
            fill={color}
          />
          <path
            d="M11.1515 11.8976L8.53857 10.6542C8.35651 10.5491 8.12351 10.6189 8.02927 10.8069L6.23062 14.3934M7.07495 11.8976L3.85527 10.3143C3.70034 10.2381 3.51322 10.2807 3.40662 10.4165L2.46146 11.6206"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_517_2721">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Pictures;
