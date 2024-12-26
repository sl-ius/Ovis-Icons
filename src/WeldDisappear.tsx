import * as React from "react";
import { IconProps } from "./types";

export const WeldDisappear = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1227)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.15904 2.39869C2.3543 2.20343 2.67088 2.20343 2.86614 2.39869L4.63391 4.16646C4.82917 4.36172 4.82917 4.6783 4.63391 4.87357C4.43865 5.06883 4.12207 5.06883 3.9268 4.87357L2.15904 3.1058C1.96378 2.91054 1.96378 2.59395 2.15904 2.39869ZM0.951931 5.93423C0.951931 5.65808 1.17579 5.43423 1.45193 5.43423L2.86614 5.43423C3.14229 5.43423 3.36614 5.65808 3.36614 5.93423C3.36614 6.21037 3.14229 6.43423 2.86614 6.43423H1.45193C1.17579 6.43423 0.951931 6.21037 0.951931 5.93423ZM5.69457 1.19159C5.97071 1.19159 6.19457 1.41544 6.19457 1.69158V3.1058C6.19457 3.38194 5.97071 3.6058 5.69457 3.6058C5.41843 3.6058 5.19457 3.38194 5.19457 3.1058L5.19457 1.69159C5.19457 1.41544 5.41843 1.19159 5.69457 1.19159ZM3.20202 7.71967C1.83519 9.0865 1.83519 11.3026 3.20202 12.6694C4.56885 14.0362 6.78493 14.0363 8.15177 12.6694L8.85888 11.9623C9.05414 11.7671 9.05414 11.4505 8.85888 11.2552C8.66361 11.0599 8.34703 11.0599 8.15177 11.2552L7.44466 11.9623C6.46835 12.9386 4.88543 12.9386 3.90913 11.9623C2.93282 10.986 2.93282 9.40309 3.90913 8.42678L4.61623 7.71967C4.8115 7.52441 4.8115 7.20783 4.61623 7.01256C4.42097 6.8173 4.10439 6.8173 3.90913 7.01256L3.20202 7.71967ZM7.44466 3.47703C8.8115 2.1102 11.0276 2.1102 12.3944 3.47703C13.7612 4.84385 13.7612 7.05994 12.3944 8.42678L11.6873 9.13389C11.492 9.32915 11.1755 9.32915 10.9802 9.13389C10.7849 8.93862 10.7849 8.62204 10.9802 8.42678L11.6873 7.71967C12.6636 6.74336 12.6636 5.16044 11.6873 4.18414C10.711 3.20783 9.12808 3.20783 8.15177 4.18414L7.44466 4.89124C7.2494 5.08651 6.93282 5.08651 6.73756 4.89124C6.54229 4.69598 6.54229 4.3794 6.73756 4.18414L7.44466 3.47703ZM10.7908 13.3588C10.7908 13.0827 10.5669 12.8588 10.2908 12.8588C10.0146 12.8588 9.79077 13.0827 9.79077 13.3588V14.7731C9.79077 15.0492 10.0146 15.2731 10.2908 15.2731C10.5669 15.2731 10.7908 15.0492 10.7908 14.7731V13.3588ZM12.0585 11.5911C11.8633 11.3958 11.5467 11.3958 11.3514 11.5911C11.1562 11.7863 11.1562 12.1029 11.3514 12.2982L13.1192 14.066C13.3145 14.2612 13.631 14.2612 13.8263 14.066C14.0216 13.8707 14.0216 13.5541 13.8263 13.3588L12.0585 11.5911ZM13.1192 10.0304C12.843 10.0304 12.6192 10.2543 12.6192 10.5304C12.6192 10.8066 12.843 11.0304 13.1192 11.0304H14.5334C14.8095 11.0304 15.0334 10.8066 15.0334 10.5304C15.0334 10.2543 14.8095 10.0304 14.5334 10.0304H13.1192Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1227">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default WeldDisappear;