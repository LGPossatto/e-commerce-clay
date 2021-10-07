import { Link } from "react-router-dom";

import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Insta } from "../../assets/icons/instagram_icn _1.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter_icn_1.svg";
import { ReactComponent as Face } from "../../assets/icons/facebook_icn_1.svg";
import { ReactComponent as Search } from "../../assets/icons/search_icn_black.svg";
import { ReactComponent as User } from "../../assets/icons/user_icn.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart_icn.svg";

import LinkIcon from "../links/link-icon/LinkIcon.component";
import LinkMenu from "../links/link-menu/LinkMenu.component";
import BtnModal from "../buttons/btn-modal/BtnModal.component";

const Navigation = () => {
  return (
    <nav className="nav">
      <section className="nav-top container flex ai-c jc-sb">
        <div className="nav__logo">
          <Link to="/" className="flex ai-c">
            <Logo></Logo>
            <h3>Clay Shop</h3>
          </Link>
        </div>
        <div className="nav__soc">
          <LinkIcon href="/" SvgComponent={Insta}></LinkIcon>
          <LinkIcon href="/" SvgComponent={Face}></LinkIcon>
          <LinkIcon href="/" SvgComponent={Twitter}></LinkIcon>
        </div>
        <div className="nav__opt flex">
          <BtnModal SvgComponent={Search}></BtnModal>
          <BtnModal SvgComponent={User}></BtnModal>
          <BtnModal SvgComponent={Cart}></BtnModal>
        </div>
      </section>
      <section className="nav-bot container flex ai-c jc-c">
        <LinkMenu text="Home"></LinkMenu>
        <LinkMenu text="Shop"></LinkMenu>
        <LinkMenu text="Blog"></LinkMenu>
        <LinkMenu text="Contact"></LinkMenu>
      </section>
    </nav>
  );
};

export default Navigation;
