import React from "react";
import { Question } from "./Question.js";

const questions = [
  {
    id: 0,
    name: "1. ¿Qué tipo de comida prefiere?",
    opciones: [
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
    ],
  },
  {
    id: 1,
    name: "2. ¿Cual es tu género cinematográfico favorito??",
    opciones: [
      {
        id: 0,
        name: "Terror",
      },
      {
        id: 1,
        name: "Drama",
      },
      {
        id: 2,
        name: "Romantico",
      },
      {
        id: 3,
        name: "Suspense",
      },
      {
        id: 4,
        name: "Accion",
      },
    ],
  },
];

console.log(questions[0].opciones);

export const Registroinfo = () => {
  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Envio INFO</h3>
      <form>
        {questions.map((question) => (
          <Question question={question.name} options_values={question.opciones}></Question>
        ))}
        {/* <Question question={questions[0].name} options_values={questions[0].opciones}></Question> */}
      </form>
      <button className="btn btn-primary" type="button">
        Enviar
      </button>
    </div>
  );
};
