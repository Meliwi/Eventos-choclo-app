import React, { useState } from "react";

export const Registroinfo = () => {
  const [values, setValues] = useState({
    food_fav: "",
    gen_fav: "",
  });

  const options_values = [
    {
      id: 0,
      name: "Comida rápida",
    },
    {
      id: 1,
      name: "Comida típica colombiana",
    },
    {
      id: 2,
      name: "Comida asiática",
    },
    {
      id: 3,
      name: "Repostería",
    },
    {
      id: 4,
      name: "Otro",
    },
  ];

  const handleChange = (e) => {
    setValues({
      ...values,
      food_fav: e.target.value,
    });
  };

  // const handleChange2 = (e) => {
  //   setValues({
  //     ...values,
  //     gen_fav: e.target.value,
  //   });
  // };

  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Envio INFO</h3>
      <form>
        <div>
          <h3>{"¿Qué tipo de comida prefiere?"}</h3>
          {options_values.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  value={option.name}
                  checked={values.food_fav === option.name}
                  onChange={handleChange}
                />
                {option.name}
              </label>
            </div>
          ))}
          {console.log(values)}
        </div>
      </form>
      <button className="btn btn-primary" type="button">
        Enviar
      </button>
    </div>
  );
};
