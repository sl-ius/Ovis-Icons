import * as React from "react";
import { IconProps } from "./types";

export const MailClose = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.50011 5C1.50011 4.17157 2.17168 3.5 3.00011 3.5H13.0001C13.8285 3.5 14.5001 4.17157 14.5001 5V5.19098L8.67093 8.10557C8.24864 8.31672 7.75158 8.31672 7.32929 8.10557L1.50011 5.19098V5ZM0.50011 5.48917C0.499963 5.49614 0.499964 5.50311 0.50011 5.51006V11C0.50011 12.3807 1.6194 13.5 3.00011 13.5H13.0001C14.3808 13.5 15.5001 12.3807 15.5001 11V5.51006C15.5003 5.50311 15.5003 5.49614 15.5001 5.48917V5C15.5001 3.61929 14.3808 2.5 13.0001 2.5H3.00011C1.6194 2.5 0.50011 3.61929 0.50011 5V5.48917ZM14.5001 6.30902V11C14.5001 11.8284 13.8285 12.5 13.0001 12.5H3.00011C2.17168 12.5 1.50011 11.8284 1.50011 11V6.30902L6.88208 9C7.58589 9.35191 8.41432 9.35191 9.11814 9L14.5001 6.30902Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default MailClose;
