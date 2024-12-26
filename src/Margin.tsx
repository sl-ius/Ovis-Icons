import * as React from "react";
import { IconProps } from "./types";

export const Margin = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.76923 2.53847C2.19407 2.53847 2.53847 2.19407 2.53847 1.76923C2.53847 1.3444 2.19407 1 1.76923 1C1.3444 1 1 1.3444 1 1.76923C1 2.19407 1.3444 2.53847 1.76923 2.53847ZM14.2308 2.53847C14.6556 2.53847 15 2.19407 15 1.76923C15 1.3444 14.6556 1 14.2308 1C13.8059 1 13.4615 1.3444 13.4615 1.76923C13.4615 2.19407 13.8059 2.53847 14.2308 2.53847ZM2.53847 4.84616C2.53847 5.271 2.19407 5.6154 1.76923 5.6154C1.3444 5.6154 1 5.271 1 4.84616C1 4.42133 1.3444 4.07693 1.76923 4.07693C2.19407 4.07693 2.53847 4.42133 2.53847 4.84616ZM14.2308 5.6154C14.6556 5.6154 15 5.271 15 4.84616C15 4.42133 14.6556 4.07693 14.2308 4.07693C13.8059 4.07693 13.4615 4.42133 13.4615 4.84616C13.4615 5.271 13.8059 5.6154 14.2308 5.6154ZM2.53847 7.9231C2.53847 8.34793 2.19407 8.69233 1.76923 8.69233C1.3444 8.69233 1 8.34793 1 7.9231C1 7.49826 1.3444 7.15386 1.76923 7.15386C2.19407 7.15386 2.53847 7.49826 2.53847 7.9231ZM14.2308 8.69233C14.6556 8.69233 15 8.34793 15 7.9231C15 7.49826 14.6556 7.15386 14.2308 7.15386C13.8059 7.15386 13.4615 7.49826 13.4615 7.9231C13.4615 8.34793 13.8059 8.69233 14.2308 8.69233ZM2.53847 11C2.53847 11.4249 2.19407 11.7693 1.76923 11.7693C1.3444 11.7693 1 11.4249 1 11C1 10.5752 1.3444 10.2308 1.76923 10.2308C2.19407 10.2308 2.53847 10.5752 2.53847 11ZM14.2308 11.7693C14.6556 11.7693 15 11.4249 15 11C15 10.5752 14.6556 10.2308 14.2308 10.2308C13.8059 10.2308 13.4615 10.5752 13.4615 11C13.4615 11.4249 13.8059 11.7693 14.2308 11.7693ZM2.53847 14.077C2.53847 14.5018 2.19407 14.8462 1.76923 14.8462C1.3444 14.8462 1 14.5018 1 14.077C1 13.6521 1.3444 13.3077 1.76923 13.3077C2.19407 13.3077 2.53847 13.6521 2.53847 14.077ZM14.2308 14.8462C14.6556 14.8462 15 14.5018 15 14.077C15 13.6521 14.6556 13.3077 14.2308 13.3077C13.8059 13.3077 13.4615 13.6521 13.4615 14.077C13.4615 14.5018 13.8059 14.8462 14.2308 14.8462ZM11.9231 14.077C11.9231 14.5018 11.5787 14.8462 11.1538 14.8462C10.729 14.8462 10.3846 14.5018 10.3846 14.077C10.3846 13.6521 10.729 13.3077 11.1538 13.3077C11.5787 13.3077 11.9231 13.6521 11.9231 14.077ZM11.1538 2.53847C11.5787 2.53847 11.9231 2.19407 11.9231 1.76923C11.9231 1.3444 11.5787 1 11.1538 1C10.729 1 10.3846 1.3444 10.3846 1.76923C10.3846 2.19407 10.729 2.53847 11.1538 2.53847ZM8.84614 14.077C8.84614 14.5018 8.50174 14.8462 8.0769 14.8462C7.65207 14.8462 7.30767 14.5018 7.30767 14.077C7.30767 13.6521 7.65207 13.3077 8.0769 13.3077C8.50174 13.3077 8.84614 13.6521 8.84614 14.077ZM8.0769 2.53847C8.50174 2.53847 8.84614 2.19407 8.84614 1.76923C8.84614 1.3444 8.50174 1 8.0769 1C7.65207 1 7.30767 1.3444 7.30767 1.76923C7.30767 2.19407 7.65207 2.53847 8.0769 2.53847ZM5.76921 14.077C5.76921 14.5018 5.42481 14.8462 4.99997 14.8462C4.57514 14.8462 4.23074 14.5018 4.23074 14.077C4.23074 13.6521 4.57514 13.3077 4.99997 13.3077C5.42481 13.3077 5.76921 13.6521 5.76921 14.077ZM4.99997 2.53847C5.42481 2.53847 5.76921 2.19407 5.76921 1.76923C5.76921 1.3444 5.42481 1 4.99997 1C4.57514 1 4.23074 1.3444 4.23074 1.76923C4.23074 2.19407 4.57514 2.53847 4.99997 2.53847ZM5.11279 5.5C5.11279 5.22386 5.33665 5 5.61279 5L10.2334 5C10.5095 5 10.7334 5.22386 10.7334 5.5V10.1206C10.7334 10.3967 10.5095 10.6206 10.2334 10.6206H5.61279C5.33665 10.6206 5.11279 10.3967 5.11279 10.1206V5.5ZM5.61279 4C4.78437 4 4.11279 4.67157 4.11279 5.5V10.1206C4.11279 10.949 4.78437 11.6206 5.61279 11.6206H10.2334C11.0618 11.6206 11.7334 10.949 11.7334 10.1206V5.5C11.7334 4.67158 11.0618 4 10.2334 4L5.61279 4Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Margin;
