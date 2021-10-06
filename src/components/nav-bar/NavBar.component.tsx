import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
import BtnDropdown from "../btn/btn-dropdown/BtnDropdown.component";

const NavBar = () => {
  const [isHome, setIsHome] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split("/")[1];

    if (["Home", "Blog", "Contact"].includes(path)) setIsHome(true);
    else setIsHome(false);
  }, [pathname]);

  return (
    <nav className={`nav container ${isHome ? "" : "not-home-nav"}`}>
      <div className="nav-top flex jc-sb">
        <div className="nav__logo">
          <Link to="/" className="flex ai-c">
            <Logo></Logo>
            <h3>Clay Shop</h3>
          </Link>
        </div>
        <div className="nav__soc flex">
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
      <div className="nav-bot flex jc-c ai-c">
        <BtnMenu text="Home" isHome={isHome}></BtnMenu>
        <BtnDropdown text={"Shop"} isHome={isHome}></BtnDropdown>
        <BtnMenu text="Blog" isHome={isHome}></BtnMenu>
        <BtnMenu text="Contact" isHome={isHome}></BtnMenu>
      </div>
    </nav>
  );
};

export default NavBar;
