import * as React from "react";
import { IconProps } from "./types";

export const ExtensionFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.17925 0C5.95484 0 4.96226 0.992576 4.96226 2.21698V2.64151H3.5C2.11929 2.64151 1 3.7608 1 5.14151V6.83962V7.33962H1.5H2.5566C3.30167 7.33962 3.90566 7.94362 3.90566 8.68868C3.90566 9.43374 3.30167 10.0377 2.5566 10.0377H1.5H1V10.5377V12.5C1 13.8807 2.11929 15 3.5 15H5.46226H5.96226V14.5V13.7075C5.96226 12.9625 6.56626 12.3585 7.31132 12.3585C8.05638 12.3585 8.66038 12.9625 8.66038 13.7075V14.5V15H9.16038H10.8585C12.2392 15 13.3585 13.8807 13.3585 12.5V11.0377H13.783C15.0074 11.0377 16 10.0452 16 8.82076C16 7.59635 15.0074 6.60377 13.783 6.60377H13.3585V5.14151C13.3585 3.7608 12.2392 2.64151 10.8585 2.64151H9.39623V2.21698C9.39623 0.992576 8.40365 0 7.17925 0Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ExtensionFilled;
