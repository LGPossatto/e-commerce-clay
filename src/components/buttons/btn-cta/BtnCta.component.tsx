import { FC } from "react";
import "./btnCta.style.scss";

interface props {
  text: string;
  onClick: Function;
  whiteBorder?: boolean;
}

const BtnCta: FC<props> = ({ text, onClick, whiteBorder }) => {
  return (
    <div
      className={`btn-cta ${whiteBorder ? "btn-cta-white" : ""}`}
      onClick={() => onClick()}
    >
      <h4 className={`${whiteBorder ? "fc-reverse" : ""}`}>{text}</h4>
    </div>
  );
};

export default BtnCta;
