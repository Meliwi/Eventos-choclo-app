import React, { useState } from "react";

import axios from "axios";
export const Registroinfo = () => {
  const [edad, setEdad] = useState(0);
  const [zona, setZona] = useState("");
  const [deporte_favorito, setDeporteFavorito] = useState("");
  const [comida_preferida, setComidaPreferida] = useState("");
  const [genero_cine_fav, setGeneroCineFav] = useState("");
  const [genero_mus_fav, setGeneroMusicalFav] = useState("");
  const [id_horario_dia, setIdHorarioDia] = useState(0);
  const [id_dia_semana, setidDiaSemana] = useState(0);
  const [id_evento_pref, setidEventoPref] = useState(0);
  const [id_rango_pago, setIdRangoPago] = useState(0);
  const [id_frecuencia, setIdFrecuencia] = useState(0);
  const [id_evento, setIdevento] = useState(0);
  const [id_motivo_asistencia, setMotivoAsistencia] = useState(0);
  const [id_motivo_inasistencia, setMotivoInasistencia] = useState(0);

  const guardabase = async () => {
    const res_persona = await axios.post("/database/insertarencuestado", {
      edad,
      zona,
      deporte_favorito,
      comida_preferida,
      genero_cine_fav,
      genero_mus_fav,
      id_horario_dia,
      id_dia_semana,
      id_evento_pref,
      id_rango_pago,
    });
    console.log(res_persona.data);
    const res_id_persona = await axios.get("/database/consultaidpersona");
    console.log(res_id_persona);

    const res_frec_evento = await axios.post(
      "/database/insertarfrecuenciaeventos",
      {
        id_frecuencia,
        id_evento,
      }
    );
    console.log(res_frec_evento);

    const res_motivo_asis = await axios.post(
      "/database/insertarmotivoasistencia",
      {
        id_motivo_asistencia,
      }
    );
    console.log(res_motivo_asis);

    const res_motivo_inasis = await axios.post(
      "/database/insertarmotivoinasistencia",
      {
        id_motivo_inasistencia,
      }
    );
    console.log(res_motivo_inasis);
  };

  const onChangeedad = (e) => {
    setEdad(e.currentTarget.value);
    console.log(edad);
  };

  const onChangezona = (e) => {
    setZona(e.currentTarget.value);
    console.log(zona);
  };

  const onChangedp = (e) => {
    setDeporteFavorito(e.currentTarget.value);
    console.log(deporte_favorito);
  };

  const onChangecf = (e) => {
    setComidaPreferida(e.currentTarget.value);
    console.log(comida_preferida);
  };

  const onChangecinef = (e) => {
    setGeneroCineFav(e.currentTarget.value);
    console.log(genero_cine_fav);
  };

  const onChangemf = (e) => {
    setGeneroMusicalFav(e.currentTarget.value);
    console.log(genero_mus_fav);
  };

  const onChangediaf = (e) => {
    setidDiaSemana(e.currentTarget.value);
    console.log(id_dia_semana);
  };

  const onChangesemf = (e) => {
    setIdHorarioDia(e.currentTarget.value);
    console.log(id_horario_dia);
  };

  const onChangeef = (e) => {
    setidEventoPref(e.currentTarget.value);
    console.log(id_evento_pref);
  };

  const onChangerp = (e) => {
    setIdRangoPago(e.currentTarget.value);
    console.log(id_rango_pago);
  };

  const onChangefr = (e) => {
    setIdFrecuencia(e.currentTarget.value);
    console.log(id_frecuencia);
  };

  const onChangeevento = (e) => {
    setIdevento(e.currentTarget.value);
    console.log(id_evento);
  };

  const onChangeasis = (e) => {
    setMotivoAsistencia(e.currentTarget.value);
    console.log(id_motivo_asistencia);
  };

  const onChangeina = (e) => {
    setMotivoInasistencia(e.currentTarget.value);
    console.log(id_motivo_inasistencia);
  };

  const inserta = () => {
    console.log("Se hizo click");
    guardabase();
  };
  return (
    <div className="formdb__box-containter">
      <h3 className="auth__title">Envio INFO</h3>
      <form>
        <input
          className="auth__input"
          type="number"
          placeholder="edad"
          name="edad"
          value={edad}
          autoComplete="off"
          onChange={onChangeedad}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="zona"
          name="zona"
          value={zona}
          autoComplete="off"
          onChange={onChangezona}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Deporte Favorito"
          name="deporte_favorito"
          value={deporte_favorito}
          autoComplete="off"
          onChange={onChangedp}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Comida Favorita"
          name="comida_favorita"
          value={comida_preferida}
          autoComplete="off"
          onChange={onChangecf}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Genero cinematográfico favorito"
          name="genero_cine_fav"
          value={genero_cine_fav}
          onChange={onChangecinef}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Genero Musical favorito"
          name="genero_mus_fav"
          value={genero_mus_fav}
          onChange={onChangemf}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="horario del día preferido evento"
          name="horario_evento"
          value={id_horario_dia}
          onChange={onChangesemf}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="Día preferido de la semana"
          name="horario_semana_evento"
          value={id_dia_semana}
          onChange={onChangediaf}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="Evento preferido"
          name="horario_evento_preferido"
          value={id_evento_pref}
          onChange={onChangeef}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="id rango pago"
          name="id_rango_pago"
          value={id_rango_pago}
          onChange={onChangerp}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder=""
          name="Id-frecuencia"
          value={id_frecuencia}
          onChange={onChangefr}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="Id evento"
          name="id-evento"
          value={id_evento}
          onChange={onChangeevento}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="Motivo asistencia"
          name="Motivo_asistencia"
          value={id_motivo_asistencia}
          onChange={onChangeasis}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="number"
          placeholder="motivo inasistencia"
          name="Motivo_inasistencia"
          value={id_motivo_inasistencia}
          onChange={onChangeina}
          autoComplete="off"
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => inserta()}
        >
          enviar info
        </button>
      </form>
    </div>
  );
};
