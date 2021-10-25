import { FC } from "react";
import "./formOptions.style.scss";

interface props {
  label: string;
  options: string[];
}

const FormOptions: FC<props> = ({ label, options }) => {
  return (
    <div className="form-options">
      <label htmlFor={label} className="font-subtitle-regular">
        {label}
      </label>
      <select name={label} id={label} className="font-regular-gray">
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
