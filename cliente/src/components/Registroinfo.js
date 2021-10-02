import React, { useState } from "react";
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
    answer: "",
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
        name: "Ciencia ficción",
      },
      {
        id: 4,
        name: "Suspenso",
      },
      {
        id: 5,
        name: "Histórico",
      },
      {
        id: 6,
        name: "Acción",
      },
      {
        id: 7,
        name: "Comedia",
      },
      {
        id: 8,
        name: "Otro",
      },
    ],
    answer: "",
  },
  {
    id: 2,
    name: "3. ¿Cual es tu género músical favorito?",
    opciones: [
      {
        id: 0,
        name: "Reggaeton",
      },
      {
        id: 1,
        name: "Salsa",
      },
      {
        id: 2,
        name: "Rock",
      },
      {
        id: 3,
        name: "Bachata",
      },
      {
        id: 4,
        name: "Ballenato",
      },
      {
        id: 5,
        name: "Merengue",
      },
      {
        id: 6,
        name: "Pop",
      },
      {
        id: 7,
        name: "Electrónica",
      },
      {
        id: 8,
        name: "Otro",
      },
    ],
    answer: "",
  },
  {
    id: 3,
    name: "4. ¿Cual es tu deporte favorito?",
    opciones: [
      {
        id: 0,
        name: "Fútbol",
      },
      {
        id: 1,
        name: "Baloncesto",
      },
      {
        id: 2,
        name: "Lucha libre",
      },
      {
        id: 3,
        name: "Ciclismo",
      },
      {
        id: 4,
        name: "Boxeo",
      },
      {
        id: 5,
        name: "Patinaje",
      },
      {
        id: 6,
        name: "Natación",
      },
      {
        id: 7,
        name: "Tenis",
      },
      {
        id: 8,
        name: "Atletismo",
      },
      {
        id: 9,
        name: "Otro",
      },
    ],
    answer: "",
  },
  {
    id: 4,
    name: "5. ¿Con qué frecuencia asistes o participas en eventos artísticos o culturales?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 5,
    name: "6. ¿Con qué frecuencia asiste a conciertos, recitales, eventos, presentaciones o espectáculos de música en vivo, en espacios abiertos o cerrados?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 6,
    name: "7. ¿Con qué frecuencia asiste a ferias o exposiciones artesanales?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 7,
    name: "8. ¿Con qué frecuencia asiste a ferias de libros?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 8,
    name: "9. ¿Con qué frecuencia asistes a eventos deportivos?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 9,
    name: "10. ¿Con qué frecuencia asiste a obras de teatro, de ópera o danza?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 10,
    name: "11. ¿Con qué frecuencia asiste a festivales gastronómicos o de cocina?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 11,
    name: "12. ¿Con qué frecuencia asiste a ferias de diseño (moda, textil, joyas, de producto)?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 12,
    name: "13. ¿Con qué frecuencia asiste a carnavales?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 13,
    name: "14. ¿Con qué frecuencia asiste al cine?",
    opciones: [
      {
        id: 0,
        name: "Una vez a la semana",
      },
      {
        id: 1,
        name: "Una vez al mes",
      },
      {
        id: 2,
        name: "Una vez cada seis meses",
      },
      {
        id: 3,
        name: "Una vez al año",
      },
      {
        id: 4,
        name: "Nunca",
      },
    ],
    answer: "",
  },
  {
    id: 14,
    name: "15. ¿A cuál de estos eventos preferiría asistir?",
    opciones: [
      {
        id: 0,
        name: "Obras de teatro",
      },
      {
        id: 1,
        name: "Ópera",
      },
      {
        id: 2,
        name: "Danza",
      },
      {
        id: 3,
        name: "Feria gastronómica",
      },
      {
        id: 4,
        name: "Feria del libro",
      },
      {
        id: 5,
        name: "Evento deportivo",
      },
      {
        id: 6,
        name: "Feria de diseño",
      },
      {
        id: 7,
        name: "Evento con música en vivo",
      },
      {
        id: 8,
        name: "Carnaval",
      },
      {
        id: 9,
        name: "Feria cinematográfica",
      },
      {
        id: 10,
        name: "Feria artesanal",
      },
      {
        id: 11,
        name: "Otro",
      },
    ],
    answer: "",
  },
  {
    id: 15,
    name: "16. ¿Cuáles son los motivos por los que asistes o participas en eventos y actividades culturales?",
    opciones: [
      {
        id: 0,
        name: "Diversión",
      },
      {
        id: 1,
        name: "Esparcimiento cultural",
      },
      {
        id: 2,
        name: "Ser más culto",
      },
      {
        id: 3,
        name: "Relacionarse con los demás",
      },
      {
        id: 4,
        name: "Pasar el tiempo",
      },
      {
        id: 5,
        name: "Encontrar inspiración",
      },
      {
        id: 6,
        name: "Otro",
      },
    ],
    answer: "",
  },
  {
    id: 16,
    name: "17. ¿Cuáles son las razones por las que no asistes o participas en más eventos artísticos o culturales?",
    opciones: [
      {
        id: 0,
        name: "No me interesa",
      },
      {
        id: 1,
        name: "Falta de dinero",
      },
      {
        id: 2,
        name: "Falta de iniciativa",
      },
      {
        id: 3,
        name: "Falta de información",
      },
      {
        id: 4,
        name: "Falta de compañía",
      },
      {
        id: 5,
        name: "Falta de tiempo",
      },
      {
        id: 6,
        name: "Otro",
      },
    ],
    answer: "",
  },
  {
    id: 17,
    name: "18. ¿Cuánto estaría dispuesto a pagar por la boleta de un evento cultural?",
    opciones: [
      {
        id: 0,
        name: "De 5 mil a 10 mil pesos",
      },
      {
        id: 1,
        name: "De 10 mil a 20 mil pesos",
      },
      {
        id: 2,
        name: " 20 mil a 30 mil pesos",
      },
      {
        id: 3,
        name: "Hasta 50 mil pesos",
      },
      {
        id: 4,
        name: "Hasta 100 mil pesos",
      },
      {
        id: 5,
        name: "Más de 100 mil pesos",
      },
    ],
    answer: "",
  },
  {
    id: 18,
    name: "19. ¿En cuál día de la semana preferiría asistir a un evento?",
    opciones: [
      {
        id: 0,
        name: "Lunes",
      },
      {
        id: 1,
        name: "Martes",
      },
      {
        id: 2,
        name: "Miércoles",
      },
      {
        id: 3,
        name: "Jueves",
      },
      {
        id: 4,
        name: "Viernes",
      },
      {
        id: 5,
        name: "Sábado",
      },
      {
        id: 6,
        name: "Domingo",
      },
    ],
    answer: "",
  },
  {
    id: 19,
    name: "20. ¿En cuál horario del día preferiría asistir a un evento?",
    opciones: [
      {
        id: 0,
        name: "Mañana",
      },
      {
        id: 1,
        name: "Tarde",
      },
      {
        id: 2,
        name: " Noche",
      },
      {
        id: 3,
        name: "Madrugada",
      },
    ],
    answer: "",
  },
  {
    id: 20,
    name: "21. Edad",
    opciones: [],
    answer: "",
  },
  {
    id: 21,
    name: "22. ¿En qué parte de la ciudad reside?",
    opciones: [
      {
        id: 0,
        name: "Norte",
      },
      {
        id: 1,
        name: "Oeste",
      },
      {
        id: 2,
        name: "Centro",
      },
      {
        id: 3,
        name: "Sur",
      },
      {
        id: 4,
        name: "Oriente",
      },
    ],
    answer: "",
  },
];

export const Registroinfo = () => {
  const [respuestas, setRespuestas] = useState({});
  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Envio INFO</h3>
      <form className="main__form">
        {questions.map((question) => (
          <Question
            question={question.name}
            options_values={question.opciones}
            setRespuestas={setRespuestas}
          ></Question>
        ))}

        {console.log(respuestas)}
        {/* <Question question={questions[0].name} options_values={questions[0].opciones}></Question> */}
      </form>
      <button className="btn btn-primary" type="button">
        Enviar
      </button>
    </div>
  );
};
