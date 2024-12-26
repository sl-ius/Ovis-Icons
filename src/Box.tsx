import * as React from "react";
import { IconProps } from "./types";

export const Box = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.09019 3.18765C3.18508 3.06904 3.32873 3 3.48062 3H7.5V4.5H2.04031L3.09019 3.18765ZM8.5 4.5V3H12.5194C12.6713 3 12.8149 3.06904 12.9098 3.18765L13.9597 4.5H8.5ZM8 5.5H14.5V13C14.5 13.2761 14.2761 13.5 14 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V5.5H8ZM3.48062 2C3.02495 2 2.59398 2.20713 2.30932 2.56296L0.609566 4.68765C0.53864 4.77631 0.5 4.88646 0.5 5V13C0.5 13.8284 1.17157 14.5 2 14.5H14C14.8284 14.5 15.5 13.8284 15.5 13V5C15.5 4.88646 15.4614 4.77631 15.3904 4.68765L13.6907 2.56296C13.406 2.20713 12.9751 2 12.5194 2H8H3.48062ZM6 7.5C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27614 5.72386 8.5 6 8.5H10C10.2761 8.5 10.5 8.27614 10.5 8C10.5 7.72386 10.2761 7.5 10 7.5H6Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Box;
