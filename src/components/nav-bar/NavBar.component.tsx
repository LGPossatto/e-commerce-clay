import { useState } from "react";
import { Link } from "react-router-dom";

import "./navBar.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Insta } from "../../assets/icons/instagram_icn _1.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter_icn_1.svg";
import { ReactComponent as Face } from "../../assets/icons/facebook_icn_1.svg";
import { ReactComponent as Search } from "../../assets/icons/search_icn_black.svg";
import { ReactComponent as User } from "../../assets/icons/user_icn.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart_icn.svg";

import BtnLink from "../btn/btn-link/BtnLink.component";
import BtnSearch from "../btn/btn-search/BtnSearch.component";
import BtnMenu from "../btn/btn-menu/BtnMenu.component";

const NavBar = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <nav className="nav container">
      <div className="nav-top flex jc-sb">
        <Link to="/" className="nav__logo flex ai-c">
          <Logo></Logo>
          <h3>Clay Shop</h3>
        </Link>
        <div className={`nav__soc flex ${isHome ? "" : "not-home-soc"}`}>
          <BtnLink href="/" SvgIcon={Insta}></BtnLink>
          <BtnLink href="/" SvgIcon={Twitter}></BtnLink>
          <BtnLink href="/" SvgIcon={Face}></BtnLink>
        </div>
        <div className="nav__opt flex">
          <BtnSearch SvgIcon={Search}></BtnSearch>
          <BtnSearch SvgIcon={User}></BtnSearch>
          <BtnSearch SvgIcon={Cart}></BtnSearch>
        </div>
      </div>
      <div className={`nav-bot flex jc-c ${isHome ? "" : "not-home-bot"}`}>
        <BtnMenu text="Home" active isHome={isHome}></BtnMenu>
        <BtnMenu text="Shop" expand isHome={isHome}></BtnMenu>
        <BtnMenu text="Blog" isHome={isHome}></BtnMenu>
        <BtnMenu text="Contact" isHome={isHome}></BtnMenu>
      </div>
    </nav>
  );
};

export default NavBar;
