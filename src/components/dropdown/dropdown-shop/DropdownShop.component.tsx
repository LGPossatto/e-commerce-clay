import { FC } from "react";

import "./dropdownShop.style.scss";
import imgCard from "../../../assets/images/img-card-drop.jpg";

import LinkCluster from "../../links/link-cluster/LinkCluster.component";
import CardImg from "../../cards/card-img/CardImg.component";

interface props {
  onLinkClick: Function;
}

const DropdownShop: FC<props> = ({ onLinkClick }) => {
  return (
    <div className="dropdown-shop flex jc-sb">
      <LinkCluster
        onLinkClick={onLinkClick}
        title="Products"
        links={[
          { text: "test1", href: "/" },
          { text: "test2", href: "/" },
          { text: "test3", href: "/" },
        ]}
      ></LinkCluster>
      <LinkCluster
        onLinkClick={onLinkClick}
        title="Designers"
        links={[
          { text: "test1", href: "/" },
          { text: "test2", href: "/" },
          { text: "test3", href: "/" },
        ]}
      ></LinkCluster>
      <LinkCluster
        onLinkClick={onLinkClick}
        title="Archived collections"
        links={[
          { text: "test1", href: "/" },
          { text: "test2", href: "/" },
          { text: "test3", href: "/" },
        ]}
      ></LinkCluster>
      <CardImg
        onLinkClick={onLinkClick}
        text="Sales on Chanel Accessories"
        img={imgCard}
        href="/"
      ></CardImg>
    </div>
  );
};

export default DropdownShop;
