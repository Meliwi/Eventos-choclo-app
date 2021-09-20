import React from "react";
import { useForm } from "../Hooks/useForm";

export const Question = ({ question, options_values, setRespuestas }) => {
  let { optionValue, handleChange } = useForm();
  console.log(optionValue);
  // useEffect(() => {
  //   if (respuesta.querySelector("checked").value) {
  //   }
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);
  // setRespuestas((initialState) => [...initialState, respuesta.current]);

  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="options">
        {options_values.map((option, key) => {
          return (
            <div key={key}>
              <form actio="">
                <label>
                  <input
                    type="checkbox"
                    value={option.name}
                    checked={optionValue === option.name}
                    onChange={handleChange}
                    onClick={(e) => {
                      e.target.value === option.name &&
                        setRespuestas((initialState) => [...initialState, option.name]);
                    }}
                  />
                  {"  " + option.name}
                  {/* {setRespuestas((initialState) => [initialState.flat(), option.name])} */}
                </label>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export const respuesta = optionValue;
