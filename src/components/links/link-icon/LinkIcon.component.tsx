import { FC } from "react";
import { Link } from "react-router-dom";

import "./linkIcon.style.scss";

interface props {
  href: string;
  SvgComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const LinkIcon: FC<props> = ({ href, SvgComponent }) => {
  return (
    <Link to={href} className="btn-icon">
      <SvgComponent></SvgComponent>
    </Link>
  );
};

export default LinkIcon;
