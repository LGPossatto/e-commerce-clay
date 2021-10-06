import { FC } from "react";

import "./menuModal.style.scss";

interface IMenuModal {
  isHover: boolean;
}

const MenuModal: FC<IMenuModal> = ({ isHover }) => {
  return (
    <div className={`menu-modal ${isHover ? "menu-modal-active" : ""}`}>
      <p>test 1</p>
      <p>test 2</p>
      <p>test 3</p>
      <p>test 4</p>
      <p>test 5</p>
    </div>
  );
};

export default MenuModal;
