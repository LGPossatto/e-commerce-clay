import { useState } from "react";
import { Link } from "react-router-dom";

import "./navMobile.style.scss";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Search } from "../../../assets/icons/search_icn_black.svg";
import { ReactComponent as User } from "../../../assets/icons/user_icn.svg";
import { ReactComponent as Cart } from "../../../assets/icons/cart_icn.svg";

import BtnModal from "../../buttons/btn-modal/BtnModal.component";
import BtnBurg from "../../buttons/btn-burg/BtnBurg.component";
import DropdownMobile from "../../dropdown/dropdown-mobile/DropdownMobile.component";

const NavMobile = () => {
  const [dropMob, setDropMob] = useState(false);

  return (
    <nav className="nav-mobile hide-on-desktop">
      <section className="nav-mobile-top container flex ai-c jc-sb">
        <div className="nav-mobile__burg flex">
          <BtnBurg drop={dropMob} setDrop={setDropMob}></BtnBurg>
        </div>
        <div className="nav-mobile__logo">
          <Link to="/" className="flex ai-c">
            <Logo></Logo>
            <h3>Clay Shop</h3>
          </Link>
        </div>
        <div className="nav-mobile__opt flex">
          <BtnModal SvgComponent={Search}></BtnModal>
          <BtnModal SvgComponent={User}></BtnModal>
          <BtnModal SvgComponent={Cart}></BtnModal>
        </div>
      </section>
      <div className={`nav-mobile__drop ${dropMob ? "drop-mob-active" : ""}`}>
        <DropdownMobile onLinkClick={() => setDropMob(false)}></DropdownMobile>
      </div>
    </nav>
  );
};

export default NavMobile;
