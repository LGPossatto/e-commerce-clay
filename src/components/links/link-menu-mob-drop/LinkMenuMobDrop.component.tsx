import { FC } from "react";
import { Link } from "react-router-dom";

import "./linkMenuMobDrop.style.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow_small.svg";

interface props {
  text: string;
  slide: boolean;
  setSlide: Function;
}

const LinkMenuMobDrop: FC<props> = ({ text, slide, setSlide }) => {
  return (
    <div className="link-menu-mob-drop flex ai-c">
      <Link to={`/${text}`} className="">
        <h2>{text}</h2>
      </Link>
      <Arrow
        onClick={() => setSlide(!slide)}
        className={`${slide ? "svg-invert" : ""}`}
      ></Arrow>
    </div>
  );
};

export default LinkMenuMobDrop;
