import "./dropdownMobile.style.scss";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Insta } from "../../../assets/icons/instagram_icn _1.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter_icn_1.svg";
import { ReactComponent as Face } from "../../../assets/icons/facebook_icn_1.svg";

import LinkIcon from "../../links/link-icon/LinkIcon.component";
import LinkMenuMob from "../../links/link-menu-mob/LinkMenuMob.component";
import { Link } from "react-router-dom";
import LinkMenuMobDrop from "../../links/link-menu-mob-drop/LinkMenuMobDrop.component";
import DropdownShop from "../dropdown-shop/DropdownShop.component";

const DropdownMobile = () => {
  return (
    <div className="dropdown-mobile container">
      <section className="dropdown-mobile__menu">
        <Link to="/" className="mob-logo flex ai-c">
          <Logo></Logo>
          <h3>Clay Shop</h3>
        </Link>
        <LinkMenuMob text="Home"></LinkMenuMob>
        <LinkMenuMobDrop
          text="Shop"
          slide={true}
          setSlide={() => console.log("ok")}
        ></LinkMenuMobDrop>
        <LinkMenuMob text="Blog"></LinkMenuMob>
        <LinkMenuMob text="Contact"></LinkMenuMob>
        <div className="dropdown-mobile__soc flex jc-c">
          <LinkIcon href="/" SvgComponent={Insta} circle></LinkIcon>
          <LinkIcon href="/" SvgComponent={Face} circle></LinkIcon>
          <LinkIcon href="/" SvgComponent={Twitter} circle></LinkIcon>
        </div>
      </section>
      <section className="dropdown-mobile__slide">
        <DropdownShop onLinkClick={() => console.log("ok")}></DropdownShop>
      </section>
    </div>
  );
};

export default DropdownMobile;
