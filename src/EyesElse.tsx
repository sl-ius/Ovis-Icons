import * as React from "react";
import { IconProps } from "./types";

export const EyesElse = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.40003 7.7C1.23434 7.47909 0.920943 7.43431 0.700029 7.6C0.479116 7.76568 0.434344 8.07908 0.600029 8.3C1.04602 8.89466 1.81579 9.72342 2.80589 10.487L1.64645 11.6464C1.45118 11.8417 1.45118 12.1583 1.64645 12.3536C1.84171 12.5488 2.15829 12.5488 2.35355 12.3536L3.63437 11.0727C4.32515 11.5178 5.10318 11.9131 5.94107 12.1742L5.51493 13.8787C5.44795 14.1466 5.61083 14.4181 5.87873 14.4851C6.14663 14.552 6.4181 14.3892 6.48507 14.1213L6.91344 12.4078C7.26817 12.4674 7.63097 12.5 8.00003 12.5C8.53584 12.5 9.05845 12.4313 9.56234 12.3109L10.0149 14.1213C10.0819 14.3892 10.3534 14.552 10.6213 14.4851C10.8892 14.4181 11.052 14.1466 10.9851 13.8787L10.5193 12.0155C11.2788 11.7283 11.9818 11.3382 12.6063 10.9134C13.8799 10.047 14.8692 9.00772 15.4 8.3C15.5657 8.07908 15.5209 7.76568 15.3 7.6C15.0791 7.43431 14.7657 7.47909 14.6 7.7C14.1308 8.32561 13.2202 9.28632 12.0438 10.0866C10.8655 10.8881 9.46342 11.5 8.00003 11.5C6.53663 11.5 5.13451 10.8881 3.95626 10.0866C2.77987 9.28632 1.86924 8.32561 1.40003 7.7Z"
          fill={color}
        />
        <path
          d="M12.5 10.5L14 12"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default EyesElse;