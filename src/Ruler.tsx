import * as React from "react";
import { IconProps } from "./types";

export const Ruler = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 5.08535C1.9174 5.29127 1.5 5.84689 1.5 6.5V8.8C1.5 9.62843 2.17157 10.3 3 10.3H13.0273C13.8558 10.3 14.5273 9.62843 14.5273 8.8V6.5C14.5273 5.83672 14.0968 5.27399 13.5 5.07599V6.78571C13.5 7.06186 13.2761 7.28571 13 7.28571C12.7239 7.28571 12.5 7.06186 12.5 6.78571V5H11.5V7.5C11.5 7.77614 11.2761 8 11 8C10.7239 8 10.5 7.77614 10.5 7.5V5H9.5V6.78571C9.5 7.06186 9.27614 7.28571 9 7.28571C8.72386 7.28571 8.5 7.06186 8.5 6.78571V5H7.5V6.78571C7.5 7.06186 7.27614 7.28571 7 7.28571C6.72386 7.28571 6.5 7.06186 6.5 6.78571V5H5.5V6.78571C5.5 7.06186 5.27614 7.28571 5 7.28571C4.72386 7.28571 4.5 7.06186 4.5 6.78571V5H3.5V7.5C3.5 7.77614 3.27614 8 3 8C2.72386 8 2.5 7.77614 2.5 7.5V5.08535ZM3 4C1.61929 4 0.5 5.11929 0.5 6.5V8.8C0.5 10.1807 1.61929 11.3 3 11.3H13.0273C14.4081 11.3 15.5273 10.1807 15.5273 8.8V6.5C15.5273 5.11929 14.4081 4 13.0273 4H3Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Ruler;
