import { FC } from "react";
import "./btnModal.style.scss";

interface props {
  SvgComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const BtnModal: FC<props> = ({ SvgComponent }) => {
  return (
    <div className="btn-modal">
      <SvgComponent></SvgComponent>
    </div>
  );
};

export default BtnModal;
