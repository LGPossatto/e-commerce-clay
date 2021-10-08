import { useState } from "react";
import "./btnBurg.style.scss";

const BtnBurg = () => {
  const [burgActive, setBtnActive] = useState(false);

  return (
    <div
      className={`btn-burg flex flex-fd-c jc-sb ${
        burgActive ? "burg-active " : ""
      }`}
      onClick={() => setBtnActive(!burgActive)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BtnBurg;
