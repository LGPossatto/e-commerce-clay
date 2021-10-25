import { FC } from "react";
import "./formRadio.style.scss";

interface props {
  text: string;
  options: string[];
}

const FormRadio: FC<props> = ({ text, options }) => {
  return (
    <div className="form-radio">
      <p className="font-subtitle-regular">{text}</p>
      <div className="flex jc-sb ai-c">
        {options.map((option, i) => (
          <div key={i} className="radio-box">
            <input
              type="radio"
              id={option}
              name="radios"
              value={option}
            ></input>
            <label
              htmlFor={option}
              className="font-subtitle-regular flex ai-c jc-c"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRadio;
