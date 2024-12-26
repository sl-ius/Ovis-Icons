import * as React from "react";
import { IconProps } from "./types";

export const Airlines = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.568 2.19514C10.6626 2.0721 10.8091 2 10.9643 2H13.4719C13.748 2 13.9719 2.22386 13.9719 2.5V13.5C13.9719 13.7761 13.748 14 13.4719 14H10.9719H2.50276C2.08792 14 1.85352 13.524 2.10645 13.1951L10.568 2.19514ZM10.9643 1C10.4986 1 10.0593 1.21631 9.77536 1.58543L1.31383 12.5854C0.555034 13.5719 1.25825 15 2.50276 15H10.9719H13.4719C14.3003 15 14.9719 14.3284 14.9719 13.5V2.5C14.9719 1.67157 14.3003 1 13.4719 1H10.9643ZM9.97192 6.5C8.59121 6.5 7.47192 7.61929 7.47192 9C7.47192 10.3807 8.59121 11.5 9.97192 11.5C11.3526 11.5 12.4719 10.3807 12.4719 9C12.4719 7.61929 11.3526 6.5 9.97192 6.5ZM8.47192 9C8.47192 8.17157 9.1435 7.5 9.97192 7.5C10.8003 7.5 11.4719 8.17158 11.4719 9C11.4719 9.82842 10.8003 10.5 9.97192 10.5C9.1435 10.5 8.47192 9.82842 8.47192 9Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Airlines;
