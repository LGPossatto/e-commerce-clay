import { FC } from "react";
import { Link } from "react-router-dom";
import "./linkCluster.style.scss";

interface props {
  title: string;
  links: { text: string; href: string }[];
  onLinkClick: Function;
}

const LinkCluster: FC<props> = ({ title, links, onLinkClick }) => {
  return (
    <ul className="link-cluster">
      <h3>{title}</h3>
      {links.map(({ text, href }) => (
        <li key={text}>
          <Link
            onClick={() => onLinkClick()}
            to={href}
            className="link-cluster__link font-subtitle-regular fc-gray-6"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkCluster;
