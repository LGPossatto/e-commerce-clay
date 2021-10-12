import { FC } from "react";
import { Link } from "react-router-dom";

import "./cardShowcaseSmall.style.scss";
import Pill from "../../pill/Pill.component";

interface props {
  title: string;
  subTitle?: string;
  pillText?: string;
  imgCard?: string;
  secondaryColor?: boolean;
}

const CardShowcaseSmall: FC<props> = ({
  title,
  subTitle,
  pillText,
  imgCard,
  secondaryColor,
}) => {
  return (
    <Link
      to="/"
      className={`card-showcase-small ${imgCard ? "card-small-bg" : ""} ${
        secondaryColor ? "card-small-sec-color" : ""
      }`}
    >
      <div className="card-showcase-small__text flex flex-fd-c jc-sb">
        {pillText && <Pill text={pillText}></Pill>}
        <div>
          {subTitle && (
            <h4 className={`${imgCard ? "fc-reverse" : ""}`}>{subTitle}</h4>
          )}
          <h2 className={`${imgCard ? "fc-reverse" : ""}`}>{title}</h2>
        </div>
      </div>
      <div className="card-showcase-small__img">
        {imgCard && <img src={imgCard} alt="card" />}
      </div>
      <span className="card-showcase-small__gradient"></span>
    </Link>
  );
};

export default CardShowcaseSmall;
