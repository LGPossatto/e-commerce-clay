import { FC } from "react";
import "./formInput.style.scss";

interface props {
  id: string;
  text: string;
  placeholder: string;
  type?: string;
}

const FormInput: FC<props> = ({ id, text, placeholder, type }) => {
  return (
    <div className="form-input">
      <label htmlFor={id} className="">
        <h4>{text}</h4>
      </label>
      <input
        type={`${type ? type : "text"}`}
        id={id}
        name={id}
        placeholder={placeholder}
        className="font-subtitle-regular"
      />
    </div>
  );
};

export default FormInput;
