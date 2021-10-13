import { FC } from "react";
import "./bullet.style.scss";

interface props {
  active?: boolean;
}

const Bullet: FC<props> = ({ active }) => {
  return (
    <span className={`bullet flex jc-c ai-c ${active ? " bullet-active" : ""}`}>
      <span className=""></span>
    </span>
  );
};

export default Bullet;
