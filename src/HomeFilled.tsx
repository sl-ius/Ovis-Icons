import * as React from "react";
import { IconProps } from "./types";

export const HomeFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 12.739V10.5C9 10.2239 8.77614 10 8.5 10H7.5C7.22386 10 7 10.2239 7 10.5V12.739H8H9ZM1.86655 9.34401L2.98682 8.13652V11.239C2.98682 12.6197 4.1061 13.739 5.48682 13.739H8H10.4331C11.8138 13.739 12.9331 12.6197 12.9331 11.239V7.97359L14.2465 9.34922C14.4372 9.54895 14.7537 9.55627 14.9534 9.36558C15.1531 9.17488 15.1605 8.85839 14.9698 8.65866L9.05538 2.46415C8.45864 1.83915 7.45858 1.84631 6.87084 2.4798L1.13346 8.66387C0.945645 8.86631 0.957498 9.18267 1.15993 9.37048C1.36237 9.5583 1.67873 9.54644 1.86655 9.34401Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HomeFilled;
