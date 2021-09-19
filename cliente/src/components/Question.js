import React from "react";
import { useForm } from "../Hooks/useForm";

export const Question = ({ question, options_values }) => {
  const { optionValue, handleChange } = useForm();
  return (
    <div>
      <h3>{question}</h3>
      {options_values.map((option, key) => (
        <div key={key}>
          <label>
            <input
              type="checkbox"
              value={option.name}
              checked={optionValue === option.name}
              onChange={handleChange}
            />
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};
