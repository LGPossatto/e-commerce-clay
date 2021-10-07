import { FC } from "react";
import { NavLink } from "react-router-dom";

import "./linkMenu.style.scss";

interface props {
  text: string;
}

const LinkMenu: FC<props> = ({ text }) => {
  return (
    <NavLink to={`/${text}`} className="link-menu">
      <h3>{text}</h3>
      <span className="link-menu__active"></span>
    </NavLink>
  );
};

export default LinkMenu;
