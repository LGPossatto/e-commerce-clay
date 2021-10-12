import { FC } from "react";
import "./pill.style.scss";

interface props {
  text: string;
}

const Pill: FC<props> = ({ text }) => {
  return <div className="pill font-subtitle-bold fc-reverse">{text}</div>;
};

export default Pill;
