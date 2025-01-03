import * as React from "react";
import { IconProps } from "./types";

export const ShiningStarsFilled = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75664 7.48248C3.63053 7.80873 4.30293 8.52292 4.57598 9.41486L5 10.8L5.42402 9.41486C5.69707 8.52292 6.36947 7.80873 7.24336 7.48248L8 7.2L7.24336 6.91752C6.36947 6.59127 5.69707 5.87708 5.42402 4.98514L5 3.6L4.57598 4.98514C4.30293 5.87708 3.63053 6.59127 2.75664 6.91752L2 7.2L2.75664 7.48248Z"
          stroke="black"
          stroke-linejoin="round"
        />
        <path
          d="M7.6033 10.9783C8.47116 11.3143 9.13395 12.034 9.39742 12.9266L9.71429 14L10.0312 12.9266C10.2946 12.034 10.9574 11.3143 11.8253 10.9783L12.2857 10.8L11.8253 10.6217C10.9574 10.2857 10.2946 9.56599 10.0312 8.67343L9.71429 7.6L9.39742 8.67343C9.13395 9.56599 8.47116 10.2857 7.6033 10.6217L7.14286 10.8L7.6033 10.9783Z"
          stroke="black"
          stroke-linejoin="round"
        />
        <path
          d="M9.84383 4.44514C10.7268 4.75282 11.4159 5.45462 11.7073 6.34312L11.8571 6.8L12.007 6.34313C12.2984 5.45463 12.9875 4.75282 13.8705 4.44514L14 4.4L13.8705 4.35486C12.9875 4.04718 12.2984 3.34538 12.007 2.45687L11.8571 2L11.7073 2.45688C11.4159 3.34538 10.7268 4.04718 9.84383 4.35486L9.71429 4.4L9.84383 4.44514Z"
          stroke="black"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

export default ShiningStarsFilled;
