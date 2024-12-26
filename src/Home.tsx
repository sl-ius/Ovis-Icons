import * as React from "react";
import { IconProps } from "./types";

export const Home = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.60393 3.15993C7.79984 2.94877 8.1332 2.94638 8.33211 3.15472L11.9555 6.9497C11.9409 6.99661 11.9331 7.04647 11.9331 7.09817V11.239C11.9331 12.0675 11.2615 12.739 10.4331 12.739H10V11C10 10.1716 9.32843 9.5 8.5 9.5H7.5C6.67157 9.5 6 10.1716 6 11V12.739H5.48682C4.65839 12.739 3.98682 12.0675 3.98682 11.239V7.09817C3.98682 7.08539 3.98634 7.07273 3.98539 7.06019L7.60393 3.15993ZM2.98682 8.13652L1.86655 9.34401C1.67873 9.54644 1.36237 9.5583 1.15993 9.37048C0.957498 9.18267 0.945645 8.86631 1.13346 8.66387L6.87084 2.4798C7.45858 1.84631 8.45864 1.83915 9.05538 2.46415L14.9698 8.65866C15.1605 8.85839 15.1531 9.17488 14.9534 9.36558C14.7537 9.55627 14.4372 9.54895 14.2465 9.34922L12.9331 7.97359V11.239C12.9331 12.6197 11.8138 13.739 10.4331 13.739H5.48682C4.1061 13.739 2.98682 12.6197 2.98682 11.239V8.13652ZM9 12.739H7V11C7 10.7239 7.22386 10.5 7.5 10.5H8.5C8.77614 10.5 9 10.7239 9 11V12.739Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Home;