import * as React from "react";
import { IconProps } from "./types";

export const IdCard = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H8H13C13.8284 3.5 14.5 4.17157 14.5 5V11C14.5 11.8284 13.8284 12.5 13 12.5H3C2.17157 12.5 1.5 11.8284 1.5 11V5ZM3 2.5C1.61929 2.5 0.5 3.61929 0.5 5V11C0.5 12.3807 1.61929 13.5 3 13.5H13C14.3807 13.5 15.5 12.3807 15.5 11V5C15.5 3.61929 14.3807 2.5 13 2.5H8H3ZM4.84999 5C4.02658 5 3.35908 5.66751 3.35908 6.49092C3.35908 7.31432 4.02658 7.98183 4.84999 7.98183C5.6734 7.98183 6.34091 7.31432 6.34091 6.49092C6.34091 5.66751 5.6734 5 4.84999 5ZM4.35908 6.49092C4.35908 6.21979 4.57887 6 4.84999 6C5.12112 6 5.34091 6.21979 5.34091 6.49092C5.34091 6.76204 5.12112 6.98183 4.84999 6.98183C4.57887 6.98183 4.35908 6.76204 4.35908 6.49092ZM4.85 8.585C4.23599 8.585 3.62513 8.72383 3.1539 9.06769C2.66212 9.42655 2.36816 9.97733 2.36816 10.6791H3.36816C3.36816 10.2863 3.51786 10.04 3.74336 9.87549C3.98942 9.69594 4.36948 9.585 4.85 9.585C5.33052 9.585 5.71057 9.69594 5.95663 9.87549C6.18213 10.04 6.33183 10.2863 6.33183 10.6791H7.33183C7.33183 9.97733 7.03788 9.42655 6.54609 9.06769C6.07487 8.72383 5.46401 8.585 4.85 8.585ZM8 6C8 5.72386 8.22386 5.5 8.5 5.5H12.5C12.7761 5.5 13 5.72386 13 6C13 6.27614 12.7761 6.5 12.5 6.5H8.5C8.22386 6.5 8 6.27614 8 6ZM8.5 7.5C8.22386 7.5 8 7.72386 8 8C8 8.27614 8.22386 8.5 8.5 8.5H12.5C12.7761 8.5 13 8.27614 13 8C13 7.72386 12.7761 7.5 12.5 7.5H8.5ZM8 10C8 9.72386 8.22386 9.5 8.5 9.5H12.5C12.7761 9.5 13 9.72386 13 10C13 10.2761 12.7761 10.5 12.5 10.5H8.5C8.22386 10.5 8 10.2761 8 10Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default IdCard;