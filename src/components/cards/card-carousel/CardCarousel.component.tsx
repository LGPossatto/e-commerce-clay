import { Link } from "react-router-dom";

import "./cardCarousel.style.scss";
import { FC } from "react";

interface props {
  text: string;
  href: string;
  imgCarousel: string;
}

const CardCarousel: FC<props> = ({ text, href, imgCarousel }) => {
  return (
    <Link to={href} className="card-carousel flex flex-fd-c jc-sb">
      <div className="card-carousel__img flex ai-c jc-c">
        <img src={imgCarousel} alt="product" />
      </div>
      <h4>{text}</h4>
    </Link>
  );
};

export default CardCarousel;
