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
      <h3 className="auth__title">Envio INFO</h3>
      <form>
        <div className="pregunta_container">
          <div className="pregunta">¿Qué tipo de comida prefiere?</div>
          <div className="respuestas">
            <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
            <label for="cbox2">Este es mi segundo checkbox</label>
            <br />
            <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
            <label for="cbox2">Este es mi segundo checkbox</label>
            <br />
            <input type="checkbox" id="cbox2" value="second_checkbox" />{" "}
            <label for="cbox2">Este es mi segundo checkbox</label>
            <br />
          </div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <div className="pregunta_container">
          <div className="pregunta"></div>
          <div className="respuestas"></div>
        </div>
        <input
          className="auth__input"
          type="text"
          placeholder="documento"
          name="documento"
          value={documento}
          autoComplete="off"
          onChange={onChangedc}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="nombre"
          name="nombre"
          value={nombre}
          autoComplete="off"
          onChange={onChangenm}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="apellido"
          name="apellido"
          value={apellido}
          onChange={onChangeap}
          autoComplete="off"
        />
        <button className="btn btn-primary" type="button" onClick={() => inserta()}>
          enviar info
        </button>
      </form>
    </div>
  );
};
