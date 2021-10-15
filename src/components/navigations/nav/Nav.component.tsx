import { useState } from "react";

import "./nav.style.scss";
import { ReactComponent as Insta } from "../../../assets/icons/instagram_icn _1.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter_icn_1.svg";
import { ReactComponent as Face } from "../../../assets/icons/facebook_icn_1.svg";
import { ReactComponent as Search } from "../../../assets/icons/search_icn_black.svg";
import { ReactComponent as User } from "../../../assets/icons/user_icn.svg";
import { ReactComponent as Cart } from "../../../assets/icons/cart_icn.svg";

import LinkLogo from "../../links/link-logo/LinkLogo.component";
import LinkMenu from "../../links/link-menu/LinkMenu.component";
import LinkIcon from "../../links/link-icon/LinkIcon.component";
import LinkMenuDrop from "../../links/link-menu-drop/LinkMenuDrop.component";
import BtnModal from "../../buttons/btn-modal/BtnModal.component";
import DropdownMenu from "../../dropdown/dropdown-menu/DropdownMenu.component";
import DropdownShop from "../../dropdown/dropdown-shop/DropdownShop.component";

const Nav = () => {
  const [dropShop, setDropShop] = useState(false);

  return (
    <nav className="nav hide-on-mobile">
      <section className="nav-top container flex ai-c jc-sb">
        <div className="nav__logo">
          <LinkLogo></LinkLogo>
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
        <LinkMenuDrop
          text="Shop"
          drop={dropShop}
          setDrop={setDropShop}
        ></LinkMenuDrop>
        <LinkMenu text="Blog"></LinkMenu>
        <LinkMenu text="Contact"></LinkMenu>
      </section>
      <DropdownMenu isActive={dropShop} onLeave={() => setDropShop(false)}>
        <DropdownShop onLinkClick={() => setDropShop(false)}></DropdownShop>
      </DropdownMenu>
    </nav>
  );
};

export default Nav;
