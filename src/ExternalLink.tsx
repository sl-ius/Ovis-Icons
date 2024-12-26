import * as React from "react";
import { IconProps } from "./types";

export const ExternalLink = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H5C4.17157 12.5 3.5 11.8284 3.5 11V5C3.5 4.17157 4.17157 3.5 5 3.5H7.5C7.77614 3.5 8 3.27614 8 3C8 2.72386 7.77614 2.5 7.5 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V11C2.5 12.3807 3.61929 13.5 5 13.5H11C12.3807 13.5 13.5 12.3807 13.5 11V9C13.5 8.72386 13.2761 8.5 13 8.5C12.7239 8.5 12.5 8.72386 12.5 9V11ZM9.95 2.5C9.67385 2.5 9.45 2.72386 9.45 3C9.45 3.27614 9.67385 3.5 9.95 3.5H11.8134L7.08142 8.66214C6.89482 8.8657 6.90858 9.18198 7.11213 9.36858C7.31569 9.55517 7.63198 9.54142 7.81857 9.33786L12.45 4.2854V6C12.45 6.27614 12.6739 6.5 12.95 6.5C13.2261 6.5 13.45 6.27614 13.45 6V3C13.45 2.72386 13.2261 2.5 12.95 2.5H9.95Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ExternalLink;
