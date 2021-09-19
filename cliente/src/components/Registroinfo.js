import axios from "axios";
import React, { useState } from "react";

export const Registroinfo = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const guardabase = async () => {
    const res = await axios.post("/basedatos/insertarpacientes", {
      numid: documento,
      nombre: nombre,
      apellido: apellido,
    });
    // console.log(res.data);
    //Limpiando los inputs
    setDocumento("");
    setNombre("");
    setApellido("");
  };

  const onChangedc = (e) => {
    setDocumento(e.currentTarget.value);
    // console.log(documento);
  };

  const onChangenm = (e) => {
    setNombre(e.currentTarget.value);
    // console.log(nombre);
  };

  const onChangeap = (e) => {
    setApellido(e.currentTarget.value);
  };

  const inserta = () => {
    console.log("Se hizo click");
    guardabase();
  };
  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Encuesta</h3>
      <form>
        <div className="pregunta_container">
          <div className="pregunta">1.¿Qué tipo de comida prefiere?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
            <label for="cbox2">Comida rápida</label>
            <br />
            <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
            <label for="cbox2">Comida típica colombiana</label>
            <br />
            <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
            <label for="cbox2">Comida asiática</label>
            <br />
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Repostería</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">2.¿Cual es tu género cinematográfico favorito?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Terror</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Drama</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Romántico</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Ciencia ficción</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Suspenso</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Histórico</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Acción</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Comedia</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>

        </div>
        <div className="pregunta_container">
          <div className="pregunta">3.¿Cual es tu género músical favorito?</div>
          <div className="respuestas"><input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Reggaeton</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Salsa</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Rock</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Bachata</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Ballenato</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Merengue</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Pop</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Electrónica</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">4.¿Cual es tu deporte favorito?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Fútbol</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Baloncesto</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Lucha libre</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Ciclismo</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Boxeo</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Patinaje</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Natación</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Tenis</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Atletismo</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">5.¿Con qué frecuencia asistes o participas en eventos artísticos o culturales?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">6.¿Con qué frecuencia asiste a conciertos, recitales, eventos, presentaciones o espectáculos de música en vivo, en espacios abiertos o cerrados?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">7.¿Con qué frecuencia asiste a ferias o exposiciones artesanales?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">8.¿Con qué frecuencia asiste a ferias de libros?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">9.¿Con qué frecuencia asistes a eventos deportivos?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">10.¿Con qué frecuencia asiste a obras de teatro, de ópera o danza?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">11.¿Con qué frecuencia asiste a festivales gastronómicos o de cocina?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">12.¿Con qué frecuencia asiste a ferias de diseño (moda, textil, joyas, de producto)?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">13.¿Con qué frecuencia asiste a carnavales?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">14.¿Con qué frecuencia asiste al cine?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez a la semana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al mes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez cada seis meses</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Una vez al año</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Nunca</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">15.¿A cuál de estos eventos preferiría asistir?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Obras de teatro</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Ópera</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Danza</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Feria gastronómica</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Feria del libro</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Evento con música en vivo</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Carnaval</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Feria cinematográfica</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Feria artesanal</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">16.¿Cuáles son los motivos por los que asistes o participas en eventos y actividades culturales?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Diversión</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Esparcimiento cultural</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Ser más culto</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Relacionarse con los demás</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Pasar el tiempo</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Encontrar inspiración</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">17.¿Cuáles son las razones por las que no asistes o participas en más eventos artísticos o culturales?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">No me interesa</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Falta de dinero</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Falta de iniciativa</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Falta de información</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Falta de compañía</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Falta de tiempo</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Otro</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">18.¿Cuánto estaría dispuesto a pagar por la boleta de un evento cultural?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">De 5 mil a 10 mil pesos</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">De 10 mil a 20 mil pesos</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">De 20 mil a 30 mil pesos</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Hasta 50 mil pesos</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Hasta 100 mil pesos</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Más de 100 mil pesos</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">19.¿En cuál día de la semana preferiría asistir a un evento?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Lunes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Martes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Miércoles</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Jueves</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Viernes</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Sábado</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Domingo</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">20.¿En cuál horario del día preferiría asistir a un evento?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Mañana</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Tarde</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Noche</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Madrugada</label>
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">21.Edad</div>
          <div className="respuestas">
            <input
                type="text"
                name="documento"
                value={documento}
                autoComplete="off"
                onChange={onChangedc}
            />
            <br/>
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta">22.¿En qué parte de la ciudad reside?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Norte</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Oeste</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Centro</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Sur</label>
            <br/>
            <input type="checkbox" id="cbox2" value="second_checkbox"/>{" "}
            <label htmlFor="cbox2">Oriente</label>
            <br/>
          </div>
        </div>
        <button className="btn btn-primary" type="button" onClick={() => inserta()}>
          Enviar
        </button>
      </form>
    </div>
  );
};
