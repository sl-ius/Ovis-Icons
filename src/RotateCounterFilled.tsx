import * as React from "react";
import { IconProps } from "./types";

export const RotateCounterFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.1581 2.81909C8.32432 2.9022 8.5199 2.78133 8.5199 2.59548V1.99999C10.5013 1.99999 11.7047 2.36369 12.4304 3.08946C13.1562 3.81522 13.5199 5.01861 13.5199 6.99999C13.5199 7.27613 13.7438 7.49999 14.0199 7.49999C14.296 7.49999 14.5199 7.27613 14.5199 6.99999C14.5199 4.94381 14.1524 3.39719 13.1375 2.38235C12.1227 1.36751 10.5761 0.999989 8.5199 0.999989V0.404497C8.5199 0.218652 8.32432 0.0977779 8.1581 0.180891L5.96711 1.27638C5.78285 1.36851 5.78285 1.63146 5.96711 1.7236L8.1581 2.81909ZM1.5 7.04672V13.0467C1.5 14.1513 2.39543 15.0467 3.5 15.0467H9.5C10.6046 15.0467 11.5 14.1513 11.5 13.0467V7.04672C11.5 5.94215 10.6046 5.04673 9.5 5.04673L3.5 5.04672C2.39543 5.04672 1.5 5.94215 1.5 7.04672Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default RotateCounterFilled;
