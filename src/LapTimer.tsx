import * as React from "react";
import { IconProps } from "./types";

export const LapTimer = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.00002 0.5C5.72388 0.5 5.50002 0.723858 5.50002 1C5.50002 1.27614 5.72388 1.5 6.00002 1.5H7.50002V2.5C7.50002 2.50628 7.50014 2.51254 7.50037 2.51877C4.14414 2.77289 1.5 5.57662 1.5 8.99791C1.5 12.5866 4.40921 15.4958 7.9979 15.4958C11.5866 15.4958 14.4958 12.5866 14.4958 8.99791C14.4958 7.00279 13.5966 5.21768 12.1814 4.02571L12.8536 3.35355C13.0488 3.15829 13.0488 2.84171 12.8536 2.64645C12.6583 2.45118 12.3417 2.45118 12.1465 2.64645L11.3579 3.43503C10.5121 2.92306 9.54014 2.59855 8.49967 2.51909C8.4999 2.51276 8.50002 2.50639 8.50002 2.5V1.5H10C10.2762 1.5 10.5 1.27614 10.5 1C10.5 0.723858 10.2762 0.5 10 0.5H8.00002H6.00002ZM2.45 8.99791C2.45 5.93389 4.93389 3.45001 7.9979 3.45001C11.0619 3.45001 13.5458 5.93389 13.5458 8.99791C13.5458 12.0619 11.0619 14.5458 7.9979 14.5458C4.93389 14.5458 2.45 12.0619 2.45 8.99791ZM11.1249 12.238C11.1567 12.2074 11.1567 12.1567 11.1254 12.1254L8.02343 9.02343C8.00843 9.00843 8 8.98808 8 8.96686V4.58C8 4.53582 7.96418 4.49993 7.92 4.50071C7.20753 4.51338 6.50783 4.69509 5.87871 5.03135C5.22607 5.3802 4.66953 5.88462 4.25839 6.49993C3.84725 7.11525 3.5942 7.82246 3.52167 8.55892C3.44913 9.29539 3.55935 10.0384 3.84254 10.7221C4.12574 11.4058 4.57318 12.0091 5.14523 12.4785C5.71728 12.948 6.39628 13.2692 7.12209 13.4135C7.8479 13.5579 8.59812 13.5211 9.30628 13.3062C9.98891 13.0992 10.6122 12.7329 11.1249 12.238Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default LapTimer;
