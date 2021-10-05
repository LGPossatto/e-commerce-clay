import { FC } from "react";

import "./btnSearch.style.scss";

interface IBtnSearch {
  SvgIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const BtnSearch: FC<IBtnSearch> = ({ SvgIcon }) => {
  return (
    <div className="btn-search">
      <SvgIcon></SvgIcon>
    </div>
  );
};

export default BtnSearch;
