import { useState } from "react";

export const Options = ({ options_values }) => {
  const [selectOption, setSelectOption] = useState("");

  const onValueChange = (event) => {
    setSelectOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      {options_values.map((option, key) => (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              value={option.name}
              checked={selectOption === option.name}
              onChange={onValueChange}
            />
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};
