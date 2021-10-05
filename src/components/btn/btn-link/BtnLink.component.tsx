import { FC } from "react";

import "./btnLink.style.scss";

interface IBtnLink {
  href: string;
  SvgIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const BtnLink: FC<IBtnLink> = ({ href, SvgIcon }) => {
  return (
    <a href={href} className="btn-link">
      <SvgIcon></SvgIcon>
    </a>
  );
};

export default BtnLink;
