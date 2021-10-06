import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./btnDropdown.style.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow_small.svg";
import MenuModal from "../../modal/menu-modal/MenuModal.component";

interface IBtnDropdown {
  text: string;
  isHome: boolean;
}

const BtnDropdown: FC<IBtnDropdown> = ({ text, isHome }) => {
  const [active, setActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split("/")[1];

    if (path === text) setActive(true);
    else setActive(false);
  }, [pathname, text]);

  return (
    <div
      className={`btn-dropdown flex ai-c ${isHome ? "" : "not-home"}`}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={`/${text}`}>
        <h3>{text}</h3>
        <span
          className={`btn-dropdown__act-1 ${
            active && isHome ? "max-height" : ""
          }`}
        ></span>
        <span
          className={`btn-dropdown__act-2 ${
            active && !isHome ? "max-width" : ""
          }`}
        ></span>
      </Link>
      <Arrow
        className="btn-dropdown__arrow"
        onMouseEnter={() => setIsHover(true)}
      ></Arrow>
      <MenuModal isHover={isHover}></MenuModal>
    </div>
  );
};

export default BtnDropdown;
