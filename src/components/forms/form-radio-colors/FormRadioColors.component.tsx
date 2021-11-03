import { FC } from "react";
import "./formRadioColors.style.scss";

interface props {
  text: string;
  options: string[];
  setColor?: React.Dispatch<React.SetStateAction<string>>;
}

const FormRadio: FC<props> = ({ text, options, setColor }) => {
  return (
    <div className="form-radio-colors">
      <p className="font-subtitle-regular">{text}</p>
      <div className="flex ai-c">
        {options.map((option, i) => {
          const styles = {
            backgroundColor: `#${option}`,
          };

          return (
            <div
              key={i}
              className="radio-box flex jc-c ai-c"
              onClick={() => {
                if (setColor) {
                  setColor(option);
                }
              }}
            >
              <input
                type="radio"
                id={option}
                name={options[1] + " ipt-radio"}
                value={option}
              ></input>
              <label
                htmlFor={option}
                style={styles}
                className="font-subtitle-regular flex ai-c jc-c"
              ></label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormRadio;
