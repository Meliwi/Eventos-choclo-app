import React from "react";
import { Question } from "./Question.js";

export const Registroinfo = () => {
  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Envio INFO</h3>
      <form>
        <Question
          question="¿Qué tipo de comida prefiere?"
          options_values={[
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
          ]}
        ></Question>
      </form>
      <button className="btn btn-primary" type="button">
        Enviar
      </button>
    </div>
  );
};
