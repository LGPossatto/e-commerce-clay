import { FC } from "react";
import { Link } from "react-router-dom";

import "./cardShowcase.style.scss";
import Pill from "../../pill/Pill.component";

interface props {
  title: string;
  subTitle: string;
  pillText: string;
  imgCard: string;
}

const CardShowcase: FC<props> = ({ title, subTitle, pillText, imgCard }) => {
  return (
    <Link to="/" className="card-showcase">
      <div className="card-showcase__text">
        <h2 className="fc-reverse">{title}</h2>
        <h4 className="fc-reverse">{subTitle}</h4>
        <Pill text={pillText}></Pill>
      </div>
      <div className="card-showcase__img">
        <img src={imgCard} alt="card" />
      </div>
      <span className="card-showcase__gradient"></span>
    </Link>
  );
};

export default CardShowcase;
