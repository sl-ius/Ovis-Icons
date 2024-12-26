import * as React from "react";
import { IconProps } from "./types";

export const Redo = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.2469 7.86539C11.0451 8.0539 10.7287 8.04313 10.5402 7.84134C10.3517 7.63955 10.3625 7.32315 10.5643 7.13464L12.1876 5.61813H12.1866H12.1773H12.168H12.1587H12.1493H12.1398H12.1302H12.1207H12.111H12.1013H12.0915H12.0817H12.0718H12.0618H12.0518H12.0417H12.0316H12.0214H12.0112H12.0008H11.9905H11.98H11.9695H11.959H11.9483H11.9377H11.9269H11.9161H11.9052H11.8943H11.8833H11.8723H11.8612H11.85H11.8387H11.8274H11.8161H11.8047H11.7932H11.7816H11.77H11.7583H11.7466H11.7348H11.7229H11.711H11.699H11.6869H11.6748H11.6626H11.6504H11.6381H11.6257H11.6133H11.6008H11.5882H11.5756H11.5629H11.5501H11.5373H11.5244H11.5114H11.4984H11.4853H11.4722H11.4589H11.4457H11.4323H11.4189H11.4054H11.3919H11.3783H11.3646H11.3509H11.3371H11.3232H11.3092H11.2952H11.2812H11.267H11.2528H11.2385H11.2242H11.2098H11.1953H11.1808H11.1662H11.1515H11.1368H11.1219H11.1071H11.0921H11.0771H11.062H11.0469H11.0317H11.0164H11.001H10.9856H10.9701H10.9545H10.9389H10.9232H10.9074H10.8916H10.8757H10.8597H10.8437H10.8276H10.8114H10.7951H10.7788H10.7624H10.746H10.7294H10.7128H10.6962H10.6794H10.6626H10.6457H10.6288H10.6117H10.5946H10.5775H10.5602H10.5429H10.5255H10.5081H10.4906H10.473H10.4553H10.4376H10.4198H10.4019H10.3839H10.3659H10.3478H10.3296H10.3114H10.2931H10.2747H10.2562H10.2377H10.2191H10.2004H10.1817H10.1628H10.1439H10.125H10.1059H10.0868H10.0676H10.0483H10.029H10.0096H9.99011H9.97055H9.95091H9.9312H9.91142H9.89156H9.87162H9.85162H9.83153H9.81137H9.79114H9.77083H9.75045H9.72999H9.70946H9.68885H9.66816H9.6474H9.62656H9.60565H9.58466H9.5636H9.54246H9.52124H9.49994H9.47857H9.45713H9.4356H9.414H9.39233H9.37057H9.34874H9.32683H9.30485H9.28278H9.26064H9.23843H9.21613H9.19376H9.17131H9.14878H9.12617H9.10348H9.08072H9.05788H9.03496H9.01196H8.98888H8.96572H8.94249H8.91918H8.89578H8.87231H8.84876H8.82513H8.80142H8.77763H8.75376H8.72981H8.70578H8.68167H8.65748H8.63321H8.60887H8.58444H8.55993H8.53534H8.51067H8.48591H8.46108H8.43617H8.41117H8.3861H8.36094H8.3357H8.31039H8.28499H8.2595H8.23394H8.20829H8.18257H8.15676H8.13087H8.10489H8.07884H8.0527H8.02648H8.00017H7.97379H7.94732H7.92077H7.89413H7.86742H7.84062H7.81373H7.78677H7.75971H7.73258H7.70536H7.67806H7.65068H7.62321H7.59565H7.56802H7.54029H7.51249H7.4846H7.45662H7.42857H7.40042H7.37219H7.34388H7.31548H7.287H7.25843H7.22977H7.20103H7.17221H7.1433H7.1143H7.08522H7.05605H7.0268H6.99746H6.96803H6.93852H6.90892H6.87923H6.84946H6.8196H6.78966H6.75963H6.72951H6.6993H6.66901H6.63863H6.60816H6.5776H6.54696H6.51623H6.48541H6.4545H6.42351H6.39243H6.36126H6.33H6.29865H6.26722H6.23569H6.20408C5.00879 5.61813 4.15296 6.04095 3.59355 6.6404C3.02727 7.2472 2.73597 8.06617 2.73597 8.89776C2.73597 9.72935 3.02727 10.5483 3.59355 11.1551C4.15296 11.7546 5.00879 12.1774 6.20408 12.1774H11.5257C11.8019 12.1774 12.0257 12.4012 12.0257 12.6774C12.0257 12.9535 11.8019 13.1774 11.5257 13.1774H6.20408C4.75397 13.1774 3.62574 12.6553 2.86245 11.8374C2.10602 11.0268 1.73597 9.95599 1.73597 8.89776C1.73597 7.83954 2.10602 6.76869 2.86245 5.95813C3.62574 5.14022 4.75397 4.61813 6.20408 4.61813H6.23569H6.26722H6.29865H6.33H6.36126H6.39243H6.42351H6.4545H6.48541H6.51623H6.54696H6.5776H6.60816H6.63863H6.66901H6.6993H6.72951H6.75963H6.78966H6.8196H6.84946H6.87923H6.90892H6.93852H6.96803H6.99746H7.0268H7.05605H7.08522H7.1143H7.1433H7.17221H7.20103H7.22977H7.25843H7.287H7.31548H7.34388H7.37219H7.40042H7.42857H7.45662H7.4846H7.51249H7.54029H7.56802H7.59565H7.62321H7.65068H7.67806H7.70536H7.73258H7.75971H7.78677H7.81373H7.84062H7.86742H7.89413H7.92077H7.94732H7.97379H8.00017H8.02648H8.0527H8.07884H8.10489H8.13087H8.15676H8.18257H8.20829H8.23394H8.2595H8.28499H8.31039H8.3357H8.36094H8.3861H8.41117H8.43617H8.46108H8.48591H8.51067H8.53534H8.55993H8.58444H8.60887H8.63321H8.65748H8.68167H8.70578H8.72981H8.75376H8.77763H8.80142H8.82513H8.84876H8.87231H8.89578H8.91918H8.94249H8.96572H8.98888H9.01196H9.03496H9.05788H9.08072H9.10348H9.12617H9.14878H9.17131H9.19376H9.21613H9.23843H9.26064H9.28278H9.30485H9.32683H9.34874H9.37057H9.39233H9.414H9.4356H9.45713H9.47857H9.49994H9.52124H9.54246H9.5636H9.58466H9.60565H9.62656H9.6474H9.66816H9.68885H9.70946H9.72999H9.75045H9.77083H9.79114H9.81137H9.83153H9.85162H9.87162H9.89156H9.91142H9.9312H9.95091H9.97055H9.99011H10.0096H10.029H10.0483H10.0676H10.0868H10.1059H10.125H10.1439H10.1628H10.1817H10.2004H10.2191H10.2377H10.2562H10.2747H10.2931H10.3114H10.3296H10.3478H10.3659H10.3839H10.4019H10.4198H10.4376H10.4553H10.473H10.4906H10.5081H10.5255H10.5429H10.5602H10.5775H10.5946H10.6117H10.6288H10.6457H10.6626H10.6794H10.6962H10.7128H10.7294H10.746H10.7624H10.7788H10.7951H10.8114H10.8276H10.8437H10.8597H10.8757H10.8916H10.9074H10.9232H10.9389H10.9545H10.9701H10.9856H11.001H11.0164H11.0317H11.0469H11.062H11.0771H11.0921H11.1071H11.1219H11.1368H11.1515H11.1662H11.1808H11.1953H11.2098H11.2242H11.2385H11.2528H11.267H11.2812H11.2952H11.3092H11.3232H11.3371H11.3509H11.3646H11.3783H11.3919H11.4054H11.4189H11.4323H11.4457H11.4589H11.4722H11.4853H11.4984H11.5114H11.5244H11.5373H11.5501H11.5629H11.5756H11.5882H11.6008H11.6133H11.6257H11.6381H11.6504H11.6626H11.6748H11.6869H11.699H11.711H11.7229H11.7348H11.7466H11.7583H11.77H11.7816H11.7932H11.8047H11.8161H11.8274H11.8387H11.85H11.8612H11.8723H11.8833H11.8943H11.9052H11.9161H11.9269H11.9377H11.9483H11.959H11.9695H11.98H11.9905H12.0008H12.0112H12.0214H12.0316H12.0417H12.0518H12.0618H12.0718H12.0817H12.0915H12.1013H12.111H12.1207H12.1302H12.1398H12.1493H12.1587H12.168H12.1773H12.1866H12.1957H12.2049H12.2139H12.2229H12.2319H12.2408H12.2496H12.2584H12.2671H12.2704L10.5474 2.84885C10.3547 2.65102 10.3589 2.33446 10.5567 2.1418C10.7545 1.94914 11.0711 1.95333 11.2638 2.15115L13.8135 4.76929C13.9073 4.86558 13.9584 4.99557 13.9552 5.12995C13.952 5.26432 13.8949 5.39176 13.7966 5.48351L11.2469 7.86539Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Redo;