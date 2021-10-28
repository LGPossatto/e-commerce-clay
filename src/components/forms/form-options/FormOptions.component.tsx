import { FC } from "react";
import "./formOptions.style.scss";

interface props {
  id: string;
  label: string;
  options: string[];
  bold?: boolean;
}

const FormOptions: FC<props> = ({ id, label, options, bold }) => {
  return (
    <div className={`form-options ${bold ? "form-options-bold" : ""}`}>
      <label htmlFor={id} className="font-subtitle-regular">
        {bold ? <h4>{label}</h4> : label}
      </label>
      <select
        name={id}
        id={id}
        className={`${bold ? "font-subtitle-regular" : "font-regular-gray"}`}
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormOptions;
