import * as React from "react";
import { IconProps } from "./types";

export const React = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.96385 4.79885C3.92098 4.59431 3.88615 4.39566 3.85944 4.2038C3.7622 3.5051 3.77569 2.91717 3.88559 2.46968C3.99515 2.02361 4.19007 1.75218 4.43145 1.61281C4.67284 1.47345 5.00537 1.44036 5.44645 1.56852C5.88894 1.69709 6.40484 1.97937 6.96132 2.41293C7.11415 2.53201 7.26879 2.66152 7.42452 2.80094C6.96207 3.27999 6.50298 3.82931 6.06185 4.43646C5.31537 4.51492 4.61002 4.63786 3.96385 4.79885ZM7.453 1.78186C7.63431 1.92312 7.81694 2.07696 7.99999 2.24259C8.18304 2.07696 8.36567 1.92313 8.54697 1.78188C9.15153 1.31085 9.75796 0.9666 10.3303 0.800301C10.9041 0.633596 11.4789 0.637306 11.9685 0.920007C12.4582 1.20271 12.7488 1.69865 12.8913 2.27889C13.0334 2.8577 13.0385 3.55501 12.9329 4.31409C12.9012 4.54172 12.8593 4.77678 12.8074 5.0181C13.0423 5.09379 13.2667 5.17501 13.4797 5.26137C14.1899 5.54942 14.7912 5.90248 15.2214 6.31499C15.6526 6.72853 15.9368 7.22818 15.9368 7.79358C15.9368 8.35898 15.6526 8.85864 15.2214 9.27217C14.7912 9.68468 14.1899 10.0377 13.4797 10.3258C13.2667 10.4122 13.0422 10.4934 12.8073 10.5691C12.8592 10.8104 12.9011 11.0454 12.9327 11.2731C13.0384 12.0321 13.0333 12.7294 12.8911 13.3083C12.7486 13.8885 12.458 14.3844 11.9684 14.6671C11.4787 14.9498 10.9039 14.9536 10.3302 14.7868C9.75782 14.6205 9.15139 14.2763 8.54683 13.8053C8.36557 13.6641 8.18299 13.5103 7.99999 13.3447C7.81698 13.5103 7.6344 13.6641 7.45314 13.8053C6.84858 14.2763 6.24215 14.6206 5.66981 14.7869C5.09606 14.9536 4.52125 14.9499 4.0316 14.6672C3.54194 14.3845 3.25133 13.8885 3.10882 13.3083C2.96667 12.7295 2.96158 12.0322 3.06722 11.2731C3.0989 11.0455 3.1408 10.8104 3.1927 10.5692C2.95772 10.4934 2.73316 10.4122 2.52016 10.3258C1.80996 10.0377 1.20862 9.68468 0.778427 9.27217C0.34718 8.85864 0.0629883 8.35898 0.0629883 7.79358C0.0629883 7.22818 0.347179 6.72853 0.778427 6.315C1.20862 5.90248 1.80996 5.54942 2.52016 5.26137C2.73312 5.175 2.95763 5.09376 3.19257 5.01806C3.14066 4.77674 3.09876 4.54169 3.06708 4.31407C2.96144 3.555 2.96653 2.85769 3.10868 2.27888C3.25118 1.69864 3.5418 1.2027 4.03145 0.919994C4.52111 0.637293 5.09592 0.633583 5.66967 0.800289C6.24201 0.966586 6.84844 1.31083 7.453 1.78186ZM7.12695 4.35656C7.41547 3.99351 7.70805 3.65911 7.99999 3.35667C8.29194 3.65911 8.58451 3.99352 8.87304 4.35657C8.58612 4.34343 8.29477 4.3367 7.99991 4.3367C7.7051 4.3367 7.41381 4.34343 7.12695 4.35656ZM4.15738 5.57509C4.56534 5.47346 5.00132 5.38727 5.46009 5.31891C5.30525 5.56083 5.15375 5.80978 5.00631 6.06514C4.85885 6.32055 4.71899 6.57627 4.58688 6.83136C4.41669 6.39988 4.27334 5.97921 4.15738 5.57509ZM5.69913 6.46514C5.44183 6.9108 5.20975 7.35549 5.00341 7.79372C5.20971 8.23186 5.44175 8.67645 5.69899 9.12201C5.95627 9.56762 6.22531 9.99092 6.50163 10.3887C6.98427 10.4291 7.48537 10.4505 7.99991 10.4505C8.51451 10.4505 9.01566 10.4291 9.49835 10.3887C9.77467 9.99091 10.0437 9.56763 10.301 9.12202C10.5582 8.67646 10.7903 8.23186 10.9966 7.79372C10.7902 7.35548 10.5581 6.91079 10.3008 6.46513C10.0436 6.01952 9.77453 5.59624 9.49821 5.19847C9.01557 5.15806 8.51446 5.1367 7.99991 5.1367C7.48542 5.1367 6.98437 5.15805 6.50177 5.19845C6.22545 5.59623 5.95641 6.01953 5.69913 6.46514ZM3.38837 5.79561C3.57204 6.4357 3.81825 7.10803 4.12354 7.79373C3.8183 8.47935 3.57214 9.15158 3.3885 9.7916C3.18988 9.72645 3.00039 9.65727 2.82084 9.58445C2.16713 9.31931 1.66471 9.01367 1.33213 8.69475C1.0006 8.37684 0.862988 8.07231 0.862988 7.79358C0.862988 7.51485 1.0006 7.21033 1.33213 6.89242C1.66471 6.57349 2.16713 6.26785 2.82084 6.00271C3.00035 5.92991 3.1898 5.86075 3.38837 5.79561ZM4.5869 8.7561C4.41676 9.18749 4.27345 9.60806 4.15751 10.0121C4.56539 10.1137 5.00128 10.1999 5.45994 10.2682C5.3051 10.0263 5.1536 9.77737 5.00617 9.52201C4.85877 9.26671 4.71896 9.01109 4.5869 8.7561ZM3.85959 11.3834C3.88629 11.1915 3.92112 10.9929 3.96399 10.7883C4.61007 10.9493 5.31533 11.0722 6.0617 11.1507C6.50288 11.7579 6.96201 12.3073 7.42451 12.7863C7.26883 12.9257 7.11424 13.0552 6.96146 13.1742C6.40499 13.6078 5.88909 13.8901 5.4466 14.0186C5.00551 14.1468 4.67298 14.1137 4.4316 13.9743C4.19021 13.835 3.99529 13.5635 3.88573 13.1175C3.77583 12.67 3.76235 12.0821 3.85959 11.3834ZM9.03851 13.1742C8.88573 13.0552 8.73114 12.9257 8.57547 12.7863C9.03797 12.3073 9.49711 11.7579 9.93829 11.1507C10.6847 11.0722 11.3899 10.9493 12.036 10.7883C12.0789 10.9928 12.1137 11.1915 12.1404 11.3833C12.2376 12.082 12.2241 12.67 12.1142 13.1175C12.0047 13.5635 11.8098 13.835 11.5684 13.9743C11.327 14.1137 10.9945 14.1468 10.5534 14.0186C10.1109 13.8901 9.59498 13.6078 9.03851 13.1742ZM7.99999 12.2306C8.29198 11.9282 8.5846 11.5937 8.87317 11.2306C8.58621 11.2437 8.29482 11.2505 7.99991 11.2505C7.70506 11.2505 7.41372 11.2437 7.12681 11.2306C7.41538 11.5937 7.708 11.9282 7.99999 12.2306ZM11.8425 10.0121C11.4346 10.1137 10.9987 10.1999 10.5401 10.2682C10.6949 10.0263 10.8464 9.77737 10.9938 9.52202C11.1412 9.26671 11.281 9.01109 11.4131 8.7561C11.5832 9.18748 11.7265 9.60804 11.8425 10.0121ZM12.6115 9.79155C12.4278 9.15155 12.1817 8.47933 11.8764 7.79373C12.1817 7.10805 12.4279 6.43573 12.6116 5.79565C12.8101 5.86078 12.9995 5.92992 13.179 6.00271C13.8327 6.26785 14.3351 6.57349 14.6677 6.89242C14.9992 7.21033 15.1368 7.51485 15.1368 7.79358C15.1368 8.07231 14.9992 8.37684 14.6677 8.69475C14.3351 9.01367 13.8327 9.31931 13.179 9.58445C12.9995 9.65725 12.81 9.72641 12.6115 9.79155ZM9.93815 4.43648C10.6846 4.51495 11.39 4.63789 12.0361 4.79889C12.079 4.59434 12.1138 4.39568 12.1405 4.20381C12.2378 3.50511 12.2243 2.91719 12.1144 2.4697C12.0048 2.02363 11.8099 1.75219 11.5685 1.61283C11.3271 1.47346 10.9946 1.44037 10.5535 1.56853C10.111 1.6971 9.59512 1.97938 9.03865 2.41294C8.88582 2.53202 8.73119 2.66152 8.57547 2.80094C9.03792 3.28 9.49701 3.82932 9.93815 4.43648ZM11.4131 6.83136C11.5833 6.39989 11.7266 5.97924 11.8426 5.57513C11.4346 5.47349 10.9987 5.3873 10.5399 5.31894C10.6947 5.56084 10.8462 5.80978 10.9937 6.06513C11.1411 6.32054 11.281 6.57626 11.4131 6.83136ZM7.9252 9.23496C8.72183 9.23496 9.36762 8.58917 9.36762 7.79254C9.36762 6.99592 8.72183 6.35012 7.9252 6.35012C7.12858 6.35012 6.48278 6.99592 6.48278 7.79254C6.48278 8.58917 7.12858 9.23496 7.9252 9.23496Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default React;
