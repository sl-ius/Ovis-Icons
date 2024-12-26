import * as React from "react";
import { IconProps } from "./types";

export const EyesOpen = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.78954 7.74923C2.84309 6.40536 5.07101 4.5 8.00008 4.5C10.9291 4.5 13.1571 6.40536 14.2106 7.74923C14.3125 7.87923 14.3097 8.06435 14.1913 8.19822C13.5966 8.87055 12.6967 9.7032 11.613 10.3645C10.5279 11.0268 9.28727 11.5 8.00008 11.5C6.71289 11.5 5.47227 11.0268 4.38715 10.3645C3.30347 9.7032 2.40353 8.87055 1.80888 8.19822C1.69047 8.06435 1.68762 7.87923 1.78954 7.74923ZM8.00008 3.5C4.63598 3.5 2.1496 5.66912 1.00255 7.13226C0.594583 7.65265 0.630716 8.37558 1.05983 8.86074C1.70722 9.59269 2.68175 10.4953 3.86622 11.2181C5.04924 11.9401 6.47047 12.5 8.00008 12.5C9.52969 12.5 10.9509 11.9401 12.1339 11.2181C13.3184 10.4953 14.2929 9.59269 14.9403 8.86074C15.3694 8.37558 15.4056 7.65265 14.9976 7.13226C13.8506 5.66912 11.3642 3.5 8.00008 3.5ZM9.00008 8C9.00008 8.55228 8.55236 9 8.00008 9C7.4478 9 7.00008 8.55228 7.00008 8C7.00008 7.44772 7.4478 7 8.00008 7C8.55236 7 9.00008 7.44772 9.00008 8ZM10.0001 8C10.0001 9.10457 9.10465 10 8.00008 10C6.89551 10 6.00008 9.10457 6.00008 8C6.00008 6.89543 6.89551 6 8.00008 6C9.10465 6 10.0001 6.89543 10.0001 8Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default EyesOpen;
