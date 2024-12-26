import * as React from "react";
import { IconProps } from "./types";

export const Laptop = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.44109 5C1.44109 4.17157 2.11266 3.5 2.94109 3.5H13.0587C13.8872 3.5 14.5587 4.17157 14.5587 5V9.41177C14.5587 10.2402 13.8872 10.9118 13.0587 10.9118H2.94109C2.11266 10.9118 1.44109 10.2402 1.44109 9.41177V5ZM2.94109 2.5C1.56038 2.5 0.441089 3.61929 0.441089 5V9.41177C0.441089 10.7925 1.56038 11.9118 2.94109 11.9118H13.0587C14.4394 11.9118 15.5587 10.7925 15.5587 9.41177V5C15.5587 3.61929 14.4394 2.5 13.0587 2.5H2.94109ZM0.502402 12.5C0.233362 12.5 0.0231381 12.7323 0.0499086 13C0.078293 13.2838 0.317143 13.5 0.602403 13.5H15.4474C15.7043 13.5 15.9194 13.3054 15.9449 13.0498C15.9744 12.7554 15.7432 12.5 15.4474 12.5H0.502402Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Laptop;
