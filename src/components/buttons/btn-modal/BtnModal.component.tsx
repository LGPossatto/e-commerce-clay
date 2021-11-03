import { FC } from "react";
import "./btnModal.style.scss";

interface props {
  onclick?: Function;
  SvgComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const BtnModal: FC<props> = ({ SvgComponent, onclick }) => {
  return (
    <div
      className="btn-modal"
      onClick={() => {
        if (onclick) {
          onclick();
        }
      }}
    >
      <SvgComponent></SvgComponent>
    </div>
  );
};

export default BtnModal;
