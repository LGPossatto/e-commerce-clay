import { FC } from "react";
import { NavLink } from "react-router-dom";

import "./linkMenuDrop.style.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow_small.svg";

interface props {
  text: string;
  drop: boolean;
  setDrop: Function;
}

const LinkMenuDrop: FC<props> = ({ text, drop, setDrop }) => {
  return (
    <div className="link-menu-drop flex ai-c">
      <NavLink to={`/${text}`} className="">
        <h3>{text}</h3>
        <span className="link-menu-drop__active"></span>
      </NavLink>
      <Arrow
        onClick={() => setDrop(!drop)}
        className={`${drop ? "svg-invert" : ""}`}
      ></Arrow>
    </div>
  );
};

export default LinkMenuDrop;
