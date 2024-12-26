import * as React from "react";
import { IconProps } from "./types";

export const Section = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3.5C2 2.67157 2.67157 2 3.5 2L7.50238 2V5.46049C7.50238 5.73664 7.72623 5.96049 8.00238 5.96049H14.0047V12.5047C14.0047 13.3331 13.3331 14.0047 12.5047 14.0047H3.5C2.67157 14.0047 2 13.3331 2 12.5047V3.5ZM15.0047 5.46491C15.0047 5.46344 15.0047 5.46197 15.0047 5.46049C15.0047 5.45902 15.0047 5.45755 15.0047 5.45608V3.5C15.0047 2.11929 13.8854 1 12.5047 1L8.00386 1C8.00336 0.999999 8.00287 0.999998 8.00238 0.999998C8.00188 0.999998 8.00139 0.999999 8.0009 1L3.5 0.999998C2.11929 0.999998 1 2.11929 1 3.5V12.5047C1 13.8854 2.11929 15.0047 3.5 15.0047H12.5047C13.8854 15.0047 15.0047 13.8854 15.0047 12.5047V5.46491ZM8.50238 2L12.5047 2C13.3331 2 14.0047 2.67158 14.0047 3.5V4.96049H8.50238V2Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Section;
