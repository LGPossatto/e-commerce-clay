import { FC } from "react";
import "./btnCta.style.scss";

interface props {
  text: string;
  onClick: Function;
  whiteBorder?: boolean;
  pinkBorder?: boolean;
}

const BtnCta: FC<props> = ({ text, onClick, whiteBorder, pinkBorder }) => {
  return (
    <div
      className={`btn-cta ${whiteBorder ? "btn-cta-white" : ""} ${
        pinkBorder ? "btn-cta-pink" : ""
      }`}
      onClick={() => onClick()}
    >
      <h4 className={`fc-reverse`}>{text}</h4>
    </div>
  );
};

export default BtnCta;
