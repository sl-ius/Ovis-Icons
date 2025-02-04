import * as React from "react";
import { IconProps } from "./types";

export const BookmarkFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 13.2866V4.4C3.5 3.29543 4.39543 2.4 5.5 2.4L10.5 2.40001C11.6046 2.40001 12.5 3.29544 12.5 4.4V13.2866C12.5 13.718 11.9903 13.9469 11.6678 13.6603L8.33218 10.6953C8.14274 10.5269 7.85726 10.5269 7.66782 10.6953L4.33218 13.6603C4.00973 13.9469 3.5 13.718 3.5 13.2866Z"
          fill={color}
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default BookmarkFilled;
