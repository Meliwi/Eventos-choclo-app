import React from "react";
import { useForm } from "../Hooks/useForm";

export const Question = ({ question, options_values, setRespuestas }) => {
  const { optionValue, handleChange } = useForm();
  // setRespuestas((initialState) => [...initialState, optionValue]);
  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="options">
        {options_values.map((option, key) => (
          <div key={key}>
            <label>
              <input
                type="checkbox"
                value={option.name}
                checked={optionValue === option.name}
                onChange={handleChange}
                id={key}
              />
              {"  " + option.name}
              {/* {setRespuestas((initialState) => [initialState.flat(), option.name])} */}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

// export const respuesta = optionValue;
