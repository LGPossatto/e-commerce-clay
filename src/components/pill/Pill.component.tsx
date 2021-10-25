import { FC } from "react";
import "./pill.style.scss";

interface props {
  text: string;
  productPill?: boolean;
}

const Pill: FC<props> = ({ text, productPill }) => {
  return (
    <div
      className={`pill font-subtitle-bold ${
        productPill ? "product-pill" : "fc-reverse"
      }`}
    >
      {text}
    </div>
  );
};

export default Pill;
