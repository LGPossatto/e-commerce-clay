import "./footer.style.scss";
import { ReactComponent as Insta } from "../../assets/icons/instagram_icn _1.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter_icn_1.svg";
import { ReactComponent as Face } from "../../assets/icons/facebook_icn_1.svg";

import LinkLogo from "../links/link-logo/LinkLogo.component";
import LinkCluster from "../links/link-cluster/LinkCluster.component";
import LinkIcon from "../links/link-icon/LinkIcon.component";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links container flex jc-sb">
        <div className="footer-moto">
          <LinkLogo></LinkLogo>
          <p className="font-subtitle-regular-gray">
            Fashion is a popular aesthetic expression at a particular time,
            place and in a specific context, especially in clothing, footwear,
            lifestyle, accessories, makeup.
          </p>
        </div>
        <div className="footer-link-clusters flex jc-se">
          <LinkCluster
            onLinkClick={() => {}}
            title="Hot links"
            links={[
              { text: "Home", href: "/Home" },
              { text: "Shop", href: "/Shop" },
              { text: "Blog", href: "/Blog" },
              { text: "Contact", href: "/Contact" },
            ]}
          ></LinkCluster>
          <LinkCluster
            onLinkClick={() => {}}
            title="More info"
            links={[
              { text: "How it works", href: "/" },
              { text: "About us", href: "/" },
              { text: "Decline rules", href: "/" },
              { text: "Terms & Conditions", href: "/" },
            ]}
          ></LinkCluster>
          <LinkCluster
            onLinkClick={() => {}}
            title="Customer"
            links={[
              { text: "FAQ", href: "/" },
              { text: "Terms of use", href: "/" },
              { text: "Privacy Policy", href: "/" },
              { text: "Discount system", href: "/" },
            ]}
          ></LinkCluster>
        </div>
      </div>
      <div className="footer__bot">
        <div className="container flex ai-c jc-sb">
          <p className="font-subtitle-regular-gray">
            © Clay Shop all rights reserved
          </p>
          <div className="footer__soc flex">
            <LinkIcon href="/" SvgComponent={Insta}></LinkIcon>
            <LinkIcon href="/" SvgComponent={Face}></LinkIcon>
            <LinkIcon href="/" SvgComponent={Twitter}></LinkIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
