import { FC } from "react";
import { Link } from "react-router-dom";

import "./linkMenuMob.style.scss";

interface props {
  text: string;
}

const LinkMenuMob: FC<props> = ({ text }) => {
  return (
    <Link to={`/${text}`} className="link-menu-mob">
      <h2>{text}</h2>
    </Link>
  );
};

export default LinkMenuMob;
