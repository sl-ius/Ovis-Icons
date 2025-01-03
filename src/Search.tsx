import * as React from "react";
import { IconProps } from "./types";

export const Search = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.53832 3C5.03188 3 3 5.03188 3 7.53832C3 10.0448 5.03188 12.0766 7.53832 12.0766C8.31359 12.0766 9.04345 11.8823 9.68183 11.5395L12.1577 13.8645C12.359 14.0535 12.6755 14.0436 12.8645 13.8423C13.0535 13.641 13.0436 13.3245 12.8423 13.1355L10.5227 10.9574C11.475 10.1255 12.0766 8.90215 12.0766 7.53832C12.0766 5.03188 10.0448 3 7.53832 3ZM3.95 7.53832C3.95 5.55655 5.55655 3.95 7.53832 3.95C9.52008 3.95 11.1266 5.55655 11.1266 7.53832C11.1266 9.52008 9.52008 11.1266 7.53832 11.1266C5.55655 11.1266 3.95 9.52008 3.95 7.53832Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Search;
