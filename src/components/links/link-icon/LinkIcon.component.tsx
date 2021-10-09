import { FC } from "react";
import { Link } from "react-router-dom";

import "./linkIcon.style.scss";

interface props {
  href: string;
  circle?: boolean;
  SvgComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const LinkIcon: FC<props> = ({ href, SvgComponent, circle }) => {
  return (
    <Link to={href} className={`btn-icon ${circle ? "btn-icon-circle" : ""}`}>
      <SvgComponent></SvgComponent>
    </Link>
  );
};

export default LinkIcon;
