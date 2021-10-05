import { FC } from "react";

import "./btnMenu.style.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow_small.svg";

interface IBtnMenu {
  text: string;
  expand?: boolean;
  active?: boolean;
  isHome?: boolean;
}

const BtnMenu: FC<IBtnMenu> = ({ text, expand, active, isHome }) => {
  return (
    <div className={`btn-menu flex ai-c ${isHome ? "" : "not-home"}`}>
      <h3>{text}</h3>
      {expand && <Arrow className="btn-menu__arrow"></Arrow>}
      {active && <span className="btn-menu__act-1"></span>}
    </div>
  );
};

export default BtnMenu;
