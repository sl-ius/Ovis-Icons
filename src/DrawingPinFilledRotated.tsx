import * as React from "react";
import { IconProps } from "./types";

export const DrawingPinFilledRotated = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
      <g clip-path="url(#clip0_517_1500)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.51141 0.690632C9.69979 0.60949 9.91264 0.646948 10.0513 0.78565L14.7229 5.45722C14.8616 5.59592 14.8991 5.80877 14.8179 5.99714C14.7368 6.18552 14.5529 6.31262 14.3515 6.31956L12.3958 6.38697L11.473 7.30981C11.9197 7.8881 12.1068 8.51166 12.0394 9.16533C11.9602 9.93354 11.5375 10.6546 10.9744 11.3064C10.8811 11.4144 10.7488 11.481 10.6096 11.4899C10.4703 11.4989 10.3366 11.4495 10.2408 11.3536L4.15497 5.26781C4.06367 5.17651 4.01432 5.05075 4.01777 4.91818C4.02123 4.78562 4.0772 4.65712 4.17337 4.56094C4.73452 3.9998 5.36106 3.55664 6.12309 3.47503C6.77912 3.40478 7.44623 3.61166 8.16239 4.07195L9.12166 3.1128L9.189 1.1571C9.19594 0.955662 9.32304 0.771774 9.51141 0.690632ZM6.40687 9.84944C6.60213 9.65418 6.60213 9.3376 6.40687 9.14234C6.21161 8.94707 5.89503 8.94707 5.69976 9.14234L2.16423 12.6779C1.96897 12.8731 1.96897 13.1897 2.16423 13.385C2.35949 13.5802 2.67607 13.5802 2.87134 13.385L6.40687 9.84944Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_517_1500">
          <rect width="16" height="16" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
});

export default DrawingPinFilledRotated;
