import * as React from "react";
import { IconProps } from "./types";

export const InformationFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.475C4.39551 1.475 1.4751 4.39541 1.4751 7.9979C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.9979C14.5209 4.39541 11.6005 1.475 7.998 1.475ZM7.77515 5.8C8.18936 5.8 8.52515 5.46421 8.52515 5.05C8.52515 4.63579 8.18936 4.3 7.77515 4.3C7.36093 4.3 7.02515 4.63579 7.02515 5.05C7.02515 5.46421 7.36093 5.8 7.77515 5.8ZM6.90015 6.3H6.40015V7.3H6.90015H7.52515V10.425H6.90015H6.40015V11.425H6.90015H8.02515H9.15015H9.65015V10.425H9.15015H8.52515V6.9C8.52515 6.56863 8.25652 6.3 7.92515 6.3H6.90015Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default InformationFilled;
