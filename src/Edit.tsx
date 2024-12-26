import * as React from "react";
import { IconProps } from "./types";

export const Edit = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H5C4.17157 12.5 3.5 11.8284 3.5 11V5C3.5 4.17157 4.17157 3.5 5 3.5H7.5C7.77614 3.5 8 3.27614 8 3C8 2.72386 7.77614 2.5 7.5 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V11C2.5 12.3807 3.61929 13.5 5 13.5H11C12.3807 13.5 13.5 12.3807 13.5 11V9C13.5 8.72386 13.2761 8.5 13 8.5C12.7239 8.5 12.5 8.72386 12.5 9V11ZM11.7175 2.64645C11.5222 2.45118 11.2057 2.45118 11.0104 2.64645L5.7071 7.94975C5.61333 8.04352 5.56065 8.17069 5.56065 8.3033L5.56065 10.4246C5.56065 10.7008 5.78451 10.9246 6.06065 10.9246L8.18197 10.9246C8.31458 10.9246 8.44175 10.8719 8.53552 10.7782L13.8388 5.47487C14.0341 5.27961 14.0341 4.96303 13.8388 4.76777L11.7175 2.64645ZM6.56065 8.51041L11.3639 3.70711L12.7782 5.12132L7.97486 9.92462H6.56065V8.51041Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Edit;
