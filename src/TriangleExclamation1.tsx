import * as React from "react";
import { IconProps } from "./types";

export const TriangleExclamation1 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.30544 3.37537L2.15869 11.4631C1.73505 12.1289 2.21326 13 3.00235 13H12.9282C13.7025 13 14.1831 12.1579 13.7892 11.4913L9.01003 3.40352C8.63036 2.76099 7.70612 2.74574 7.30544 3.37537ZM8.13777 4.99999C7.76122 4.99999 7.46183 5.01608 7.48224 5.39208L7.69483 9.30817C7.70862 9.5623 7.91871 9.76129 8.17321 9.76129C8.43107 9.76129 8.64267 9.55721 8.65199 9.29953L8.79383 5.38024C8.80728 5.0086 8.50965 4.99999 8.13777 4.99999ZM8.16756 11.8637C8.54692 11.8637 8.85445 11.5549 8.85445 11.174C8.85445 10.7931 8.54692 10.4843 8.16756 10.4843C7.7882 10.4843 7.48067 10.7931 7.48067 11.174C7.48067 11.5549 7.7882 11.8637 8.16756 11.8637Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TriangleExclamation1;
