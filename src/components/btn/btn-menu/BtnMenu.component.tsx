import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./btnMenu.style.scss";

interface IBtnMenu {
  text: string;
  isHome: boolean;
}

const BtnMenu: FC<IBtnMenu> = ({ text, isHome }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split("/")[1];

    if (path === text) setActive(true);
    else setActive(false);
  }, [pathname, text]);

  return (
    <Link
      to={`/${text}`}
      className={`btn-menu flex ai-c ${isHome ? "" : "not-home"}`}
    >
      <h3>{text}</h3>
      <span
        className={`btn-menu__act-1 ${active && isHome ? "max-height" : ""}`}
      ></span>
      <span
        className={`btn-menu__act-2 ${active && !isHome ? "max-width" : ""}`}
      ></span>
    </Link>
  );
};

export default BtnMenu;
