import * as React from "react";
import { IconProps } from "./types";

export const CopyToClipboard = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 2.5C5.5 2.22386 5.72386 2 6 2H10C10.2761 2 10.5 2.22386 10.5 2.5C10.5 2.77614 10.2761 3 10 3H6C5.72386 3 5.5 2.77614 5.5 2.5ZM4.6925 3.23568C4.27605 3.50222 4 3.96887 4 4.5V12.5C4 13.3284 4.67157 14 5.5 14H8V15H5.5C4.11929 15 3 13.8807 3 12.5V4.5C3 3.46285 3.63157 2.57321 4.53109 2.19469C4.67212 1.51266 5.27619 1 6 1H10C10.7238 1 11.3279 1.51267 11.4689 2.19469C12.3684 2.57321 13 3.46285 13 4.5V7H12V4.5C12 3.96887 11.724 3.50222 11.3075 3.23569C11.0502 3.69192 10.5611 4 10 4H6C5.4389 4 4.94975 3.69192 4.6925 3.23568ZM16 9C16 9.27614 15.7761 9.5 15.5 9.5C15.2239 9.5 15 9.27614 15 9C15 8.72386 15.2239 8.5 15.5 8.5C15.7761 8.5 16 8.72386 16 9ZM9.5 11.5C9.77614 11.5 10 11.2761 10 11C10 10.7239 9.77614 10.5 9.5 10.5C9.22386 10.5 9 10.7239 9 11C9 11.2761 9.22386 11.5 9.5 11.5ZM9.5 13.5C9.77614 13.5 10 13.2761 10 13C10 12.7239 9.77614 12.5 9.5 12.5C9.22386 12.5 9 12.7239 9 13C9 13.2761 9.22386 13.5 9.5 13.5ZM10 15C10 15.2761 9.77614 15.5 9.5 15.5C9.22386 15.5 9 15.2761 9 15C9 14.7239 9.22386 14.5 9.5 14.5C9.77614 14.5 10 14.7239 10 15ZM11.5 15.5C11.7761 15.5 12 15.2761 12 15C12 14.7239 11.7761 14.5 11.5 14.5C11.2239 14.5 11 14.7239 11 15C11 15.2761 11.2239 15.5 11.5 15.5ZM14 15C14 15.2761 13.7761 15.5 13.5 15.5C13.2239 15.5 13 15.2761 13 15C13 14.7239 13.2239 14.5 13.5 14.5C13.7761 14.5 14 14.7239 14 15ZM15.5 15.5C15.7761 15.5 16 15.2761 16 15C16 14.7239 15.7761 14.5 15.5 14.5C15.2239 14.5 15 14.7239 15 15C15 15.2761 15.2239 15.5 15.5 15.5ZM16 13C16 13.2761 15.7761 13.5 15.5 13.5C15.2239 13.5 15 13.2761 15 13C15 12.7239 15.2239 12.5 15.5 12.5C15.7761 12.5 16 12.7239 16 13ZM15.5 11.5C15.7761 11.5 16 11.2761 16 11C16 10.7239 15.7761 10.5 15.5 10.5C15.2239 10.5 15 10.7239 15 11C15 11.2761 15.2239 11.5 15.5 11.5ZM13.5 9.5C13.7761 9.5 14 9.27614 14 9C14 8.72386 13.7761 8.5 13.5 8.5C13.2239 8.5 13 8.72386 13 9C13 9.27614 13.2239 9.5 13.5 9.5ZM12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9C11 8.72386 11.2239 8.5 11.5 8.5C11.7761 8.5 12 8.72386 12 9ZM9.5 9.5C9.77614 9.5 10 9.27614 10 9C10 8.72386 9.77614 8.5 9.5 8.5C9.22386 8.5 9 8.72386 9 9C9 9.27614 9.22386 9.5 9.5 9.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default CopyToClipboard;