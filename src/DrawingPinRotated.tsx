import * as React from "react";
import { IconProps } from "./types";

export const DrawingPinRotated = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_517_1498)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0513 0.785654C9.91264 0.646952 9.69979 0.609494 9.51141 0.690636C9.32304 0.771778 9.19594 0.955666 9.189 1.1571L9.12166 3.11281L8.16239 4.07196C7.44623 3.61167 6.77912 3.40478 6.12309 3.47504C5.36106 3.55664 4.73452 3.9998 4.17337 4.56094C4.0772 4.65712 4.02123 4.78562 4.01777 4.91819C4.01432 5.05075 4.06367 5.17651 4.15497 5.26781L10.2408 11.3536C10.3366 11.4495 10.4703 11.4989 10.6096 11.4899C10.7488 11.481 10.8811 11.4144 10.9744 11.3064C11.5375 10.6546 11.9602 9.93354 12.0394 9.16533C12.1068 8.51167 11.9197 7.88811 11.473 7.30981L12.3958 6.38698L14.3515 6.31957C14.5529 6.31262 14.7368 6.18552 14.8179 5.99714C14.8991 5.80877 14.8616 5.59593 14.7229 5.45723L10.0513 0.785654ZM10.114 3.29982L10.1473 2.33219L13.1764 5.36127L12.2088 5.39463C12.0777 5.39915 11.9509 5.45498 11.8558 5.5501L10.4431 6.96278C10.2428 7.16306 10.2346 7.47954 10.4247 7.66965C10.9469 8.19182 11.0903 8.67213 11.0447 9.1142C11.0091 9.4595 10.853 9.83389 10.5744 10.2367L5.24291 4.9052C5.57502 4.64053 5.87555 4.50171 6.17813 4.4693C6.59253 4.42493 7.13132 4.56781 7.89123 5.12891C8.08633 5.27297 8.36528 5.24594 8.54575 5.0655L9.95852 3.65289C10.0537 3.55776 10.1095 3.43096 10.114 3.29982ZM6.40687 9.84945C6.60213 9.65419 6.60213 9.3376 6.40687 9.14234C6.21161 8.94708 5.89503 8.94708 5.69976 9.14234L2.16423 12.6779C1.96897 12.8731 1.96897 13.1897 2.16423 13.385C2.35949 13.5802 2.67608 13.5802 2.87134 13.385L6.40687 9.84945Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_517_1498">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DrawingPinRotated;
