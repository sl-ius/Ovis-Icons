import * as React from "react";
import { IconProps } from "./types";

export const Accessibility = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.998 1.47501C4.39551 1.47501 1.4751 4.39541 1.4751 7.99791C1.4751 11.6004 4.3955 14.5208 7.998 14.5208C11.6005 14.5208 14.5209 11.6004 14.5209 7.99791C14.5209 4.39541 11.6005 1.47501 7.998 1.47501ZM2.4751 7.99791C2.4751 4.9477 4.94779 2.47501 7.998 2.47501C11.0482 2.47501 13.5209 4.9477 13.5209 7.99791C13.5209 11.0481 11.0482 13.5208 7.998 13.5208C4.94779 13.5208 2.4751 11.0481 2.4751 7.99791ZM8.90841 4.97308C8.90841 5.51048 8.48329 5.94615 7.95886 5.94615C7.43443 5.94615 7.00931 5.51048 7.00931 4.97308C7.00931 4.43567 7.43443 4.00001 7.95886 4.00001C8.48329 4.00001 8.90841 4.43567 8.90841 4.97308ZM8.90841 8.62829C8.90841 8.63757 8.91 8.64679 8.9131 8.65553L9.86901 11.3469C9.9587 11.5994 9.83164 11.8786 9.58526 11.9705C9.33886 12.0624 9.06641 11.9322 8.97672 11.6797L8.07813 9.14969C8.05248 9.07749 7.95038 9.07749 7.92474 9.14969L7.02615 11.6797C6.93648 11.9323 6.66403 12.0624 6.41763 11.9705C6.17123 11.8786 6.04419 11.5994 6.13388 11.3469L7.01409 8.86864C7.01466 8.86704 7.01347 8.86536 7.01177 8.86536C7.01042 8.86536 7.00931 8.86426 7.00931 8.8629V7.44996C7.00931 7.41741 6.98992 7.38799 6.96001 7.37516L4.79165 6.44489C4.54979 6.34113 4.43579 6.05608 4.53705 5.80821C4.63832 5.56034 4.91647 5.44355 5.15834 5.5473L7.20672 6.42609C7.21686 6.43044 7.22777 6.43268 7.23881 6.43268H8.76139C8.77242 6.43268 8.78334 6.43044 8.79348 6.42609L10.8419 5.5473C11.0837 5.44355 11.3619 5.56034 11.4631 5.80821C11.5644 6.05608 11.4504 6.34113 11.2085 6.44489L8.95653 7.41104C8.92853 7.42306 8.90841 7.44949 8.90841 7.47995V8.62829Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Accessibility;
