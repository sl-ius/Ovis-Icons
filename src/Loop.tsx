import * as React from "react";
import { IconProps } from "./types";

export const Loop = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1555)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.94689 7.24925C4.14215 7.44451 4.45874 7.44451 4.654 7.24925C4.84926 7.05399 4.84926 6.73741 4.654 6.54214L2.74769 4.63583C3.73024 4.6336 4.62857 4.62751 5.45274 4.62193L5.45281 4.62193H5.45284C6.62668 4.61398 7.65007 4.60705 8.55206 4.6137C10.3376 4.62686 11.5533 4.69446 12.3925 4.89587C13.2046 5.09079 13.5866 5.3912 13.8084 5.83248C14.0582 6.32936 14.1475 7.08039 14.1475 8.29201C14.1475 8.56816 14.3713 8.79201 14.6475 8.79201C14.9236 8.79201 15.1475 8.56816 15.1475 8.29201C15.1475 7.08926 15.07 6.11574 14.7019 5.38336C14.3058 4.59537 13.6187 4.1618 12.6259 3.92349C11.6601 3.69168 10.335 3.62681 8.55943 3.61373C7.66051 3.6071 6.62198 3.61407 5.43619 3.62202H5.43617H5.43616H5.43614C4.61233 3.62754 3.71744 3.63354 2.74889 3.6358L4.654 1.73069C4.84926 1.53542 4.84926 1.21884 4.654 1.02358C4.45873 0.828317 4.14215 0.828317 3.94689 1.02358L1.18761 3.78286C1.12442 3.84605 1.08168 3.92195 1.05939 4.00233C1.05506 4.01792 1.05146 4.03382 1.04865 4.04998C1.03906 4.10489 1.03868 4.16109 1.04752 4.2161C1.05077 4.23642 1.05525 4.25633 1.06087 4.27575C1.08355 4.35418 1.1258 4.42816 1.18761 4.48997L3.94689 7.24925ZM1.35254 7.45342C1.62868 7.45342 1.85254 7.67727 1.85254 7.95342C1.85254 9.16503 1.9418 9.91606 2.19157 10.413C2.41338 10.8542 2.79545 11.1546 3.60753 11.3496C4.44668 11.551 5.66242 11.6186 7.44794 11.6317C8.34991 11.6384 9.37327 11.6314 10.5471 11.6235H10.5471H10.5472C11.3714 11.6179 12.2697 11.6118 13.2523 11.6096L11.346 9.70328C11.1507 9.50801 11.1507 9.19143 11.346 8.99617C11.5413 8.80091 11.8578 8.80091 12.0531 8.99617L14.8124 11.7555C14.8781 11.8212 14.9218 11.9007 14.9432 11.9847C14.9479 12.0029 14.9515 12.0215 14.9541 12.0404C14.9608 12.0887 14.9604 12.1377 14.9529 12.1859C14.9489 12.2122 14.9428 12.2378 14.9348 12.2626C14.9112 12.3357 14.8704 12.4045 14.8124 12.4626L12.0531 15.2218C11.8578 15.4171 11.5413 15.4171 11.346 15.2218C11.1507 15.0266 11.1507 14.71 11.346 14.5147L13.2511 12.6096C12.2826 12.6119 11.3878 12.6179 10.564 12.6234H10.5639H10.5639C9.37804 12.6314 8.33951 12.6383 7.44057 12.6317C5.66496 12.6186 4.33994 12.5537 3.37414 12.3219C2.38127 12.0836 1.69419 11.6501 1.29809 10.8621C0.929952 10.1297 0.852539 9.15617 0.852539 7.95342C0.852539 7.67727 1.0764 7.45342 1.35254 7.45342Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1555">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Loop;
