import { Link } from "react-router-dom";

import "./linkLogo.style.scss";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";

const LinkLogo = () => {
  return (
    <Link to="/" className="link-logo flex ai-c">
      <Logo></Logo>
      <h3>Clay Shop</h3>
    </Link>
  );
};

export default LinkLogo;
