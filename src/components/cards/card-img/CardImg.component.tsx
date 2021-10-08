import { FC } from "react";
import { Link } from "react-router-dom";
import "./cardImg.style.scss";

interface props {
  text: string;
  href: string;
  img: string;
  onLinkClick: Function;
}

const CardImg: FC<props> = ({ text, img, href, onLinkClick }) => {
  return (
    <Link to={href} className="card-img" onClick={() => onLinkClick(false)}>
      <div className="img-box">
        <img src={img} alt="sales" />
      </div>
      <h3>{text}</h3>
    </Link>
  );
};

export default CardImg;
