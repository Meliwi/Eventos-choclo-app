import React, { useState } from "react";

//*Propiedades para guardar las respuestas
export const Registroinfo = () => {
  const [values, setValues] = useState({
    edad: "",
    zona: "",
    deporte_favorito: "",
    comida_preferida: "",
    genero_cine_fav: "",
    genero_mus_fav: "",
    id_horario_dia: "",
    id_dia_semana: "",
    id_evento_pref: "",
    id_rango_pago: "",
    id_frecuencia5: "",
    id_frecuencia6: "",
    id_frecuencia7: "",
    id_frecuencia8: "",
    id_frecuencia9: "",
    id_frecuencia10: "",
    id_frecuencia11: "",
    id_frecuencia12: "",
    id_frecuencia13: "",
    id_frecuencia14: "",
    id_motivo_asistencia: "",
    id_motivo_inasistencia: "",
  });

  //* Opciones de cada respuesta
  const opciones1 = [
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
  const opciones2 = [
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
      name: "Accion",
    },
  ];

  const opciones3 = [
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
  ];

  const opciones4 = [
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
  ];

  const frecuenciasValues = [
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
  ];
  const opciones15 = [
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
  ];
  const opciones16 = [
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
  ];
  const opciones17 = [
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
  ];
  const opciones18 = [
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
  ];
  const opciones19 = [
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
  ];
  const opciones20 = [
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
  ];

  const opciones22 = [
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
  ];

  // const [respuestas, setRespuestas] = useState({});
  // console.log(questions[20].opciones);

  // Handles
  const handleChange1 = (e) => {
    setValues({
      ...values,
      comida_preferida: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setValues({
      ...values,
      genero_cine_fav: e.target.value,
    });
  };

  const handleChange3 = (e) => {
    setValues({
      ...values,
      genero_mus_fav: e.target.value,
    });
  };

  const handleChange4 = (e) => {
    setValues({
      ...values,
      deporte_favorito: e.target.value,
    });
  };

  const handleChange5 = (e) => {
    setValues({
      ...values,
      id_frecuencia5: e.target.value,
    });
  };

  const handleChange6 = (e) => {
    setValues({
      ...values,
      id_frecuencia6: e.target.value,
    });
  };

  const handleChange7 = (e) => {
    setValues({
      ...values,
      id_frecuencia7: e.target.value,
    });
  };

  const handleChange8 = (e) => {
    setValues({
      ...values,
      id_frecuencia8: e.target.value,
    });
  };

  const handleChange9 = (e) => {
    setValues({
      ...values,
      id_frecuencia9: e.target.value,
    });
  };

  const handleChange10 = (e) => {
    setValues({
      ...values,
      id_frecuencia10: e.target.value,
    });
  };

  const handleChange11 = (e) => {
    setValues({
      ...values,
      id_frecuencia11: e.target.value,
    });
  };

  const handleChange12 = (e) => {
    setValues({
      ...values,
      id_frecuencia12: e.target.value,
    });
  };

  const handleChange13 = (e) => {
    setValues({
      ...values,
      id_frecuencia13: e.target.value,
    });
  };

  const handleChange14 = (e) => {
    setValues({
      ...values,
      id_frecuencia14: e.target.value,
    });
  };

  const handleChange15 = (e) => {
    setValues({
      ...values,
      id_evento_pref: e.target.value,
    });
  };

  const handleChange16 = (e) => {
    setValues({
      ...values,
      id_motivo_asistencia: e.target.value,
    });
  };

  const handleChange17 = (e) => {
    setValues({
      ...values,
      id_motivo_inasistencia: e.target.value,
    });
  };

  const handleChange18 = (e) => {
    setValues({
      ...values,
      id_rango_pago: e.target.value,
    });
  };

  const handleChange19 = (e) => {
    setValues({
      ...values,
      id_dia_semana: e.target.value,
    });
  };

  const handleChange20 = (e) => {
    setValues({
      ...values,
      id_horario_dia: e.target.value,
    });
  };

  const handleChange21 = (e) => {
    setValues({
      ...values,
      edad: e.target.value,
    });
  };

  const handleChange22 = (e) => {
    setValues({
      ...values,
      zona: e.target.value,
    });
  };

  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">
        Investigación de mercado para medir el consumo cultural en la ciudad de
        Cali
      </h3>
      <p className="obj__text">
        El propósito de la siguiente encuesta es determinar el evento cultural
        de mayor interés, sus respuestas serán valiosas para tomar decisiones
        por lo que le rogamos objetividad.
      </p>
      <form className="main__form">
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"1. ¿Qué tipo de comida prefiere?"}
          </h3>
          {opciones1.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.comida_preferida === option.name}
                  onChange={handleChange1}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"2. ¿Cual es tu género cinematográfico favorito?"}
          </h3>
          {opciones2.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.genero_cine_fav === option.name}
                  onChange={handleChange2}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"3. ¿Cual es tu género músical favorito?"}
          </h3>
          {opciones3.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.genero_mus_fav === option.name}
                  onChange={handleChange3}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"4. ¿Cual es tu deporte favorito?"}
          </h3>
          {opciones4.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.deporte_favorito === option.name}
                  onChange={handleChange4}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "5. ¿Con qué frecuencia asistes o participas en eventos artísticos o culturales?"
            }
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia5 === option.name}
                  onChange={handleChange5}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "6. ¿Con qué frecuencia asiste a conciertos, recitales, eventos, presentaciones o espectáculos de música en vivo, en espacios abiertos o cerrados?"
            }
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia6 === option.name}
                  onChange={handleChange6}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "7. ¿Con qué frecuencia asiste a ferias o exposiciones artesanales?"
            }
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia7 === option.name}
                  onChange={handleChange7}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"8. ¿Con qué frecuencia asiste a ferias de libros?"}
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia8 === option.name}
                  onChange={handleChange8}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"9. ¿Con qué frecuencia asistes a eventos deportivos?"}
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia9 === option.name}
                  onChange={handleChange9}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "10. ¿Con qué frecuencia asiste a obras de teatro, de ópera o danza?"
            }
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia10 === option.name}
                  onChange={handleChange10}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "11. ¿Con qué frecuencia asiste a festivales gastronómicos o de cocina?"
            }
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia11 === option.name}
                  onChange={handleChange11}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "12. ¿Con qué frecuencia asiste a ferias de diseño (moda, textil, joyas, de producto)?"
            }
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia12 === option.name}
                  onChange={handleChange12}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"13. ¿Con qué frecuencia asiste a carnavales?"}
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia13 === option.name}
                  onChange={handleChange13}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"14. ¿Con qué frecuencia asiste al cine?"}
          </h3>
          {frecuenciasValues.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_frecuencia14 === option.name}
                  onChange={handleChange14}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"15. ¿A cuál de estos eventos preferiría asistir?"}
          </h3>
          {opciones15.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_evento_pref === option.name}
                  onChange={handleChange15}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "16. ¿Cuáles son los motivos por los que asistes o participas en eventos y actividades culturales?"
            }
          </h3>
          {opciones16.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_motivo_asistencia === option.name}
                  onChange={handleChange16}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "17. ¿Cuáles son las razones por las que no asistes o participas en más eventos artísticos o culturales?"
            }
          </h3>
          {opciones17.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_motivo_inasistencia === option.name}
                  onChange={handleChange17}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {
              "18. ¿Cuánto estaría dispuesto a pagar por la boleta de un evento cultural?"
            }
          </h3>
          {opciones18.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_rango_pago === option.name}
                  onChange={handleChange18}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"19. ¿En cuál día de la semana preferiría asistir a un evento?"}
          </h3>
          {opciones19.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_dia_semana === option.name}
                  onChange={handleChange19}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"20. ¿En cuál horario del día preferiría asistir a un evento?"}
          </h3>
          {opciones20.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.id_horario_dia === option.name}
                  onChange={handleChange20}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">{"21. Edad"}</h3>
          <div>
            <input
              className="main__form-checkbox"
              type="number"
              name="Edad"
              id="Edad"
              value={values.edad}
              onChange={handleChange21}
            />
          </div>
          {console.log(values)}
        </div>
        <div className="main__form-question">
          <h3 className="main__form-qtext">
            {"22. ¿En qué parte de la ciudad reside?"}
          </h3>
          {opciones22.map((option, key) => (
            <div key={key}>
              <label>
                <input
                  className="main__form-checkbox"
                  type="checkbox"
                  value={option.name}
                  checked={values.zona === option.name}
                  onChange={handleChange22}
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
