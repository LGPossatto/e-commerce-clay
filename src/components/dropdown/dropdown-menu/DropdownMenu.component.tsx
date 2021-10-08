import { FC } from "react";
import "./dropdownMenu.style.scss";

interface props {
  isActive: boolean;
  onLeave: Function;
}

const DropdownMenu: FC<props> = ({ children, isActive, onLeave }) => {
  return (
    <div
      className={`dropdown-menu ${isActive ? "drop-active" : ""}`}
      onMouseLeave={() => onLeave(false)}
    >
      <div className="dropdown-menu__helper container">{children}</div>
    </div>
  );
};

export default DropdownMenu;
