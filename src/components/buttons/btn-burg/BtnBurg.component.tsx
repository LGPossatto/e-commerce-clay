import { FC } from "react";
import "./btnBurg.style.scss";

interface props {
  drop: boolean;
  setDrop: Function;
}

const BtnBurg: FC<props> = ({ drop, setDrop }) => {
  return (
    <div
      className={`btn-burg flex flex-fd-c jc-sb ${drop ? "burg-active " : ""}`}
      onClick={() => setDrop(!drop)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BtnBurg;
