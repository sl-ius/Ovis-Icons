import * as React from "react";
import { IconProps } from "./types";

export const ShareFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.8 4C13.8 5.38071 12.6808 6.5 11.3 6.5C10.5124 6.5 9.80986 6.13576 9.35162 5.56654L6.70881 7.32841C6.76827 7.54212 6.80005 7.76735 6.80005 8C6.80005 8.23265 6.76827 8.45788 6.70881 8.67159L9.35162 10.4335C9.80986 9.86423 10.5124 9.5 11.3 9.5C12.6808 9.5 13.8 10.6193 13.8 12C13.8 13.3807 12.6808 14.5 11.3 14.5C9.91934 14.5 8.80005 13.3807 8.80005 12C8.80005 11.7673 8.83183 11.5421 8.89128 11.3284L6.24848 9.56654C5.79024 10.1358 5.08768 10.5 4.30005 10.5C2.91934 10.5 1.80005 9.38071 1.80005 8C1.80005 6.61929 2.91934 5.5 4.30005 5.5C5.08768 5.5 5.79024 5.86423 6.24848 6.43346L8.89128 4.67158C8.83183 4.45788 8.80005 4.23265 8.80005 4C8.80005 2.61929 9.91934 1.5 11.3 1.5C12.6808 1.5 13.8 2.61929 13.8 4Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ShareFilled;
