import * as React from "react";
import { IconProps } from "./types";

export const Book = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 13H1C1 13.2319 1.15944 13.4333 1.38512 13.4866C1.61081 13.5399 1.84351 13.431 1.94721 13.2236L1.5 13ZM1.5 4.5L1.1 4.2L1 4.33333V4.5H1.5ZM8 13L7.55279 13.2236L8.44721 13.2236L8 13ZM14.5 13L14.0528 13.2236C14.1565 13.431 14.3892 13.5399 14.6149 13.4866C14.8406 13.4333 15 13.2319 15 13H14.5ZM14.5 4.5H15V4.38197L14.9472 4.27639L14.5 4.5ZM2 13V4.5H1V13H2ZM1.9 4.8C2.53619 3.95175 3.622 3.5 4.75 3.5C5.878 3.5 6.96381 3.95175 7.6 4.8L8.4 4.2C7.53619 3.04825 6.122 2.5 4.75 2.5C3.378 2.5 1.96381 3.04825 1.1 4.2L1.9 4.8ZM7.5 4.5V13H8.5V4.5H7.5ZM8.44721 12.7764C8.12888 12.1397 7.55042 11.6967 6.90158 11.4161C6.25065 11.1346 5.49376 11 4.75 11C4.00624 11 3.24935 11.1346 2.59842 11.4161C1.94958 11.6967 1.37112 12.1397 1.05279 12.7764L1.94721 13.2236C2.12888 12.8603 2.48792 12.5533 2.99533 12.3339C3.50065 12.1154 4.11876 12 4.75 12C5.38124 12 5.99935 12.1154 6.50467 12.3339C7.01208 12.5533 7.37112 12.8603 7.55279 13.2236L8.44721 12.7764ZM8.44721 13.2236C8.62888 12.8603 8.98792 12.5533 9.49533 12.3339C10.0006 12.1154 10.6188 12 11.25 12C11.8812 12 12.4994 12.1154 13.0047 12.3339C13.5121 12.5533 13.8711 12.8603 14.0528 13.2236L14.9472 12.7764C14.6289 12.1397 14.0504 11.6967 13.4016 11.4161C12.7506 11.1346 11.9938 11 11.25 11C10.5062 11 9.74935 11.1346 9.09842 11.4161C8.44958 11.6967 7.87112 12.1397 7.55279 12.7764L8.44721 13.2236ZM15 13V4.5H14V13H15ZM14.9472 4.27639C14.3248 3.03162 12.8371 2.5 11.4375 2.5C10.0232 2.5 8.47343 3.03542 7.6 4.2L8.4 4.8C9.02657 3.96457 10.2268 3.5 11.4375 3.5C12.6629 3.5 13.6752 3.96838 14.0528 4.72361L14.9472 4.27639Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Book;