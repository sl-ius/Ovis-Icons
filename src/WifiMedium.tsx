import * as React from "react";
import { IconProps } from "./types";

export const WifiMedium = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.64719 9.84877L3.52954 8.76054C4.07856 8.1625 5.73542 6.96054 7.97072 6.93701C10.206 6.91348 11.9413 8.14289 12.5295 8.76054L11.4119 9.84877C11.0099 9.4076 9.75895 8.53113 7.97072 8.55466C6.18248 8.57818 5.00993 9.4272 4.64719 9.84877ZM6.11766 11.4076L8.00001 13.2311L9.88236 11.4076C9.67648 11.0743 9.01177 10.4135 8.00001 10.437C6.98824 10.4605 6.32354 11.0939 6.11766 11.4076Z"
          fill={color}
        />
        <path
          d="M3.52954 8.76054L3.34538 8.59147C3.25394 8.69107 3.25826 8.84533 3.35514 8.93966L3.52954 8.76054ZM4.64719 9.84877L4.47278 10.0279C4.5222 10.076 4.5893 10.1016 4.65821 10.0985C4.72711 10.0955 4.7917 10.0641 4.83669 10.0118L4.64719 9.84877ZM7.97072 6.93701L7.96809 6.68702L7.97072 6.93701ZM12.5295 8.76054L12.7039 8.93966C12.8021 8.84409 12.8051 8.68733 12.7106 8.58812L12.5295 8.76054ZM11.4119 9.84877L11.2271 10.0171C11.2727 10.0672 11.3367 10.0966 11.4044 10.0987C11.4721 10.1007 11.5378 10.0751 11.5863 10.0279L11.4119 9.84877ZM8.00001 13.2311L7.82606 13.4107C7.92301 13.5046 8.07701 13.5046 8.17396 13.4107L8.00001 13.2311ZM6.11766 11.4076L5.90864 11.2704C5.84281 11.3707 5.85753 11.5037 5.94371 11.5872L6.11766 11.4076ZM9.88236 11.4076L10.0563 11.5872C10.1406 11.5055 10.1568 11.3761 10.0951 11.2762L9.88236 11.4076ZM8.00001 10.437L8.00582 10.6869L8.00582 10.6869L8.00001 10.437ZM3.35514 8.93966L4.47278 10.0279L4.82159 9.66966L3.70395 8.58142L3.35514 8.93966ZM7.96809 6.68702C5.64944 6.71143 3.93052 7.95409 3.34538 8.59147L3.7137 8.92961C4.22661 8.37091 5.82141 7.20965 7.97335 7.187L7.96809 6.68702ZM12.7106 8.58812C12.0883 7.93476 10.2905 6.66258 7.96809 6.68702L7.97335 7.187C10.1216 7.16438 11.7943 8.35102 12.3485 8.93295L12.7106 8.58812ZM11.5863 10.0279L12.7039 8.93966L12.3551 8.58142L11.2375 9.66966L11.5863 10.0279ZM7.97401 8.80463C9.68225 8.78216 10.8672 9.62218 11.2271 10.0171L11.5967 9.6804C11.1526 9.19302 9.83565 8.28009 7.96743 8.30468L7.97401 8.80463ZM4.83669 10.0118C5.15464 9.64232 6.26037 8.82718 7.97401 8.80463L7.96743 8.30468C6.1046 8.32919 4.86522 9.21209 4.45769 9.68571L4.83669 10.0118ZM8.17396 13.0516L6.2916 11.228L5.94371 11.5872L7.82606 13.4107L8.17396 13.0516ZM9.70841 11.228L7.82606 13.0516L8.17396 13.4107L10.0563 11.5872L9.70841 11.228ZM8.00582 10.6869C8.90279 10.6661 9.49485 11.2559 9.66966 11.539L10.0951 11.2762C9.8581 10.8926 9.12075 10.1609 7.9942 10.1871L8.00582 10.6869ZM6.32667 11.5448C6.49949 11.2814 7.09592 10.7081 8.00582 10.6869L7.9942 10.1871C6.88056 10.213 6.14758 10.9063 5.90864 11.2704L6.32667 11.5448Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default WifiMedium;