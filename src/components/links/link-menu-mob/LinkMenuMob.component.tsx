import { FC } from "react";
import { Link } from "react-router-dom";

import "./linkMenuMob.style.scss";

interface props {
  text: string;
  onclick?: Function;
}

const LinkMenuMob: FC<props> = ({ text, onclick }) => {
  return (
    <Link
      to={`/${text}`}
      className="link-menu-mob"
      onClick={() => {
        if (onclick) {
          onclick();
        }
      }}
    >
      <h2>{text}</h2>
    </Link>
  );
};

export default LinkMenuMob;
