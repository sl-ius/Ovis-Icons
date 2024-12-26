import * as React from "react";
import { IconProps } from "./types";

export const DashboardFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 3V6.36364C2.5 6.63978 2.72386 6.86364 3 6.86364H6.36364C6.63978 6.86364 6.86364 6.63978 6.86364 6.36364V3C6.86364 2.72386 6.63978 2.5 6.36364 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3ZM2.5 9.54545V12.9091C2.5 13.1852 2.72386 13.4091 3 13.4091H6.36364C6.63978 13.4091 6.86364 13.1852 6.86364 12.9091V9.54545C6.86364 9.26931 6.63978 9.04545 6.36364 9.04545H3C2.72386 9.04545 2.5 9.26931 2.5 9.54545ZM9.04545 6.36364V3C9.04545 2.72386 9.26931 2.5 9.54545 2.5H12.9091C13.1852 2.5 13.4091 2.72386 13.4091 3V6.36364C13.4091 6.63978 13.1852 6.86364 12.9091 6.86364H9.54545C9.26931 6.86364 9.04545 6.63978 9.04545 6.36364ZM9.04545 9.54545V12.9091C9.04545 13.1852 9.26931 13.4091 9.54545 13.4091H12.9091C13.1852 13.4091 13.4091 13.1852 13.4091 12.9091V9.54545C13.4091 9.26931 13.1852 9.04545 12.9091 9.04545H9.54545C9.26931 9.04545 9.04545 9.26931 9.04545 9.54545Z"
          fill={color}
        />
        <path
          d="M3 6.36364V3H2V6.36364H3ZM3 6.36364V6.36364H2C2 6.91592 2.44771 7.36364 3 7.36364V6.36364ZM6.36364 6.36364H3V7.36364H6.36364V6.36364ZM6.36364 6.36364H6.36364V7.36364C6.91592 7.36364 7.36364 6.91592 7.36364 6.36364H6.36364ZM6.36364 3V6.36364H7.36364V3H6.36364ZM6.36364 3V3H7.36364C7.36364 2.44772 6.91592 2 6.36364 2V3ZM3 3H6.36364V2H3V3ZM3 3H3V2C2.44772 2 2 2.44771 2 3H3ZM3 12.9091V9.54545H2V12.9091H3ZM3 12.9091V12.9091H2C2 13.4614 2.44771 13.9091 3 13.9091V12.9091ZM6.36364 12.9091H3V13.9091H6.36364V12.9091ZM6.36364 12.9091H6.36364V13.9091C6.91592 13.9091 7.36364 13.4614 7.36364 12.9091H6.36364ZM6.36364 9.54545V12.9091H7.36364V9.54545H6.36364ZM6.36364 9.54545V9.54545H7.36364C7.36364 8.99317 6.91592 8.54545 6.36364 8.54545V9.54545ZM3 9.54545H6.36364V8.54545H3V9.54545ZM3 9.54545H3V8.54545C2.44772 8.54545 2 8.99317 2 9.54545H3ZM8.54545 3V6.36364H9.54545V3H8.54545ZM9.54545 2C8.99317 2 8.54545 2.44771 8.54545 3H9.54545H9.54545V2ZM12.9091 2H9.54545V3H12.9091V2ZM13.9091 3C13.9091 2.44772 13.4614 2 12.9091 2V3V3H13.9091ZM13.9091 6.36364V3H12.9091V6.36364H13.9091ZM12.9091 7.36364C13.4614 7.36364 13.9091 6.91592 13.9091 6.36364H12.9091H12.9091V7.36364ZM9.54545 7.36364H12.9091V6.36364H9.54545V7.36364ZM8.54545 6.36364C8.54545 6.91592 8.99317 7.36364 9.54545 7.36364V6.36364V6.36364H8.54545ZM9.54545 12.9091V9.54545H8.54545V12.9091H9.54545ZM9.54545 12.9091V12.9091H8.54545C8.54545 13.4614 8.99317 13.9091 9.54545 13.9091V12.9091ZM12.9091 12.9091H9.54545V13.9091H12.9091V12.9091ZM12.9091 12.9091H12.9091V13.9091C13.4614 13.9091 13.9091 13.4614 13.9091 12.9091H12.9091ZM12.9091 9.54545V12.9091H13.9091V9.54545H12.9091ZM12.9091 9.54545V9.54545H13.9091C13.9091 8.99317 13.4614 8.54545 12.9091 8.54545V9.54545ZM9.54545 9.54545H12.9091V8.54545H9.54545V9.54545ZM9.54545 9.54545H9.54545V8.54545C8.99317 8.54545 8.54545 8.99317 8.54545 9.54545H9.54545Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DashboardFilled;
