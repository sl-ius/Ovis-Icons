import * as React from "react";
import { IconProps } from "./types";

export const Dashboard = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3.5C3 3.22386 3.22386 3 3.5 3H5.86364C6.13978 3 6.36364 3.22386 6.36364 3.5V5.86364C6.36364 6.13978 6.13978 6.36364 5.86364 6.36364H3.5C3.22386 6.36364 3 6.13978 3 5.86364V3.5ZM3.5 2C2.67157 2 2 2.67157 2 3.5V5.86364C2 6.69206 2.67157 7.36364 3.5 7.36364H5.86364C6.69206 7.36364 7.36364 6.69206 7.36364 5.86364V3.5C7.36364 2.67157 6.69206 2 5.86364 2H3.5ZM3 10.0455C3 9.76931 3.22386 9.54545 3.5 9.54545H5.86364C6.13978 9.54545 6.36364 9.76931 6.36364 10.0455V12.4091C6.36364 12.6852 6.13978 12.9091 5.86364 12.9091H3.5C3.22386 12.9091 3 12.6852 3 12.4091V10.0455ZM3.5 8.54545C2.67157 8.54545 2 9.21703 2 10.0455V12.4091C2 13.2375 2.67157 13.9091 3.5 13.9091H5.86364C6.69206 13.9091 7.36364 13.2375 7.36364 12.4091V10.0455C7.36364 9.21703 6.69206 8.54545 5.86364 8.54545H3.5ZM10.0455 3C9.76931 3 9.54545 3.22386 9.54545 3.5V5.86364C9.54545 6.13978 9.76931 6.36364 10.0455 6.36364H12.4091C12.6852 6.36364 12.9091 6.13978 12.9091 5.86364V3.5C12.9091 3.22386 12.6852 3 12.4091 3H10.0455ZM8.54545 3.5C8.54545 2.67157 9.21703 2 10.0455 2H12.4091C13.2375 2 13.9091 2.67157 13.9091 3.5V5.86364C13.9091 6.69206 13.2375 7.36364 12.4091 7.36364H10.0455C9.21703 7.36364 8.54545 6.69206 8.54545 5.86364V3.5ZM9.54545 10.0455C9.54545 9.76931 9.76931 9.54545 10.0455 9.54545H12.4091C12.6852 9.54545 12.9091 9.76931 12.9091 10.0455V12.4091C12.9091 12.6852 12.6852 12.9091 12.4091 12.9091H10.0455C9.76931 12.9091 9.54545 12.6852 9.54545 12.4091V10.0455ZM10.0455 8.54545C9.21703 8.54545 8.54545 9.21703 8.54545 10.0455V12.4091C8.54545 13.2375 9.21703 13.9091 10.0455 13.9091H12.4091C13.2375 13.9091 13.9091 13.2375 13.9091 12.4091V10.0455C13.9091 9.21703 13.2375 8.54545 12.4091 8.54545H10.0455Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Dashboard;
