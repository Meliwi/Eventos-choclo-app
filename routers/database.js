const { Client } = require("pg");
const Router = require("express-promise-router");
var keys = require("../confi/keys");

const client = new Client({
  connectionString: keys.postgresurl,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

const verification = (evento_string) => {
  if (evento_string == "Una vez a la semana") {
    return 1;
  }
  if (evento_string == "Una vez al mes") {
    return 2;
  }
  if (evento_string == "Una vez cada seis meses") {
    return 3;
  }
  if (evento_string == "Una vez al año") {
    return 4;
  }
  if (evento_string == "Nunca") {
    return 5;
  }
};

const verifyDayWeek = (week_name) => {
  if (week_name == "Lunes") {
    return 1;
  }
  if (week_name == "Martes") {
    return 2;
  }
  if (week_name == "Miércoles") {
    return 3;
  }
  if (week_name == "Jueves") {
    return 4;
  }
  if (week_name == "Viernes") {
    return 5;
  }
  if (week_name == "Sábado") {
    return 6;
  }
  if (week_name == "Domingo") {
    return 7;
  }
};

const verifyHourDay = (hour_day) => {
  if (hour_day == "Mañana") {
    return 1;
  }
  if (hour_day == "Tarde") {
    return 2;
  }
  if (hour_day == "Noche") {
    return 3;
  }
  if (hour_day == "Madrugada") {
    return 4;
  }
};

const verifyEventPref = (event_pref) => {
  if (event_pref == "Obras de teatro") {
    return 1;
  }
  if (event_pref == "Ópera") {
    return 2;
  }
  if (event_pref == "Feria gastronómica") {
    return 3;
  }
  if (event_pref == "Feria del libro") {
    return 4;
  }
  if (event_pref == "Evento deportivo") {
    return 5;
  }
  if (event_pref == "Feria de diseño") {
    return 6;
  }
  if (event_pref == "Evento con música en vivo") {
    return 7;
  }
  if (event_pref == "Carnaval") {
    return 8;
  }
  if (event_pref == "Feria cinematográfica") {
    return 9;
  }
  if (event_pref == "Feria artesanal") {
    return 10;
  }
  if (event_pref == "Otro") {
    return 11;
  }
  if (event_pref == "Danza") {
    return 12;
  }
};

const verifyPayRange = (pay_range) => {
  if (pay_range == "De 5 mil a 10 mil pesos") {
    return 1;
  }
  if (pay_range == "De 10 mil a 20 mil pesos") {
    return 2;
  }
  if (pay_range == "De 20 mil a 30 mil pesos") {
    return 3;
  }
  if (pay_range == "Hasta 50 mil pesos") {
    return 4;
  }
  if (pay_range == "Hasta 100 mil pesos") {
    return 5;
  }
  if (pay_range == "Más de 100 mil pesos") {
    return 6;
  }
};

const verifyReasonsAsis = (Reason_asis) => {
  if (Reason_asis == "Diversión") {
    return 1;
  }
  if (Reason_asis == "Esparcimiento cultural") {
    return 2;
  }
  if (Reason_asis == "Ser más culto") {
    return 3;
  }
  if (Reason_asis == "Relacionarse con los demás") {
    return 4;
  }
  if (Reason_asis == "Pasar el tiempo") {
    return 5;
  }
  if (Reason_asis == "Encontrar inspiración") {
    return 6;
  }
  if (Reason_asis == "Otro") {
    return 7;
  }
};

const verifyReasonInasis = (Reason_inasis) => {
  if (Reason_inasis == "No me interesa") {
    return 1;
  }
  if (Reason_inasis == "Falta de dinero") {
    return 2;
  }
  if (Reason_inasis == "Falta de iniciativa") {
    return 3;
  }
  if (Reason_inasis == "Falta de información") {
    return 4;
  }
  if (Reason_inasis == "Falta de compañía") {
    return 5;
  }
  if (Reason_inasis == "Falta de tiempo") {
    return 6;
  }
  if (Reason_inasis == "Otro") {
    return 7;
  }
};

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;
var id_last_persona = 0;

//Este query inserta los datos de la persona encuestada
router.post("/insertarencuestado", async (req, res) => {
  const values = req.body;
  await client.query(
    `INSERT INTO persona(edad, zona, deporte_favorito, comida_preferida, genero_cine_fav, genero_mus_fav,
      id_horario_dia, id_dia_semana,id_evento_pref,id_rango_pago) 
      VALUES(${values.edad},'${values.zona}','${values.deporte_favorito}','${
      values.comida_preferida
    }',
      '${values.genero_cine_fav}', '${values.genero_mus_fav}', 
      ${verifyHourDay(values.id_horario_dia)}, 
      ${verifyDayWeek(values.id_dia_semana)}, 
      ${verifyEventPref(values.id_evento_pref)}, 
      ${verifyPayRange(values.id_rango_pago)})`
  );

  res.send("INSERTADO");
});

//consultar el id de la persona registrada
router.get("/consultaidpersona", async (req, res) => {
  id_last_persona = await client.query(
    "SELECT id_persona FROM persona ORDER BY id_persona DESC LIMIT 1"
  );
  res.send(id_last_persona);
});

//Insertar registros en tabla persona frecuencia eventos
router.post("/insertarfrecuenciaeventos", async (req, res) => {
  const {
    id_frecuencia5,
    id_frecuencia6,
    id_frecuencia7,
    id_frecuencia8,
    id_frecuencia9,
    id_frecuencia10,
    id_frecuencia11,
    id_frecuencia12,
    id_frecuencia13,
    id_frecuencia14,
  } = req.body;
  await client.query(
    `INSERT INTO persona_frecuencia_eventos(id_persona, id_frecuencia, id_evento)
    VALUES
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia5
    )}, ${1}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia6
    )}, ${7}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia7
    )}, ${10}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia8
    )}, ${4}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia9
    )}, ${5}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia10
    )}, ${12}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia11
    )}, ${3}),    
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia12
    )}, ${6}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia13
    )}, ${8}),
    (${id_last_persona["rows"][0]["id_persona"]}, ${verification(
      id_frecuencia14
    )}, ${9})`
  );
  res.send("Insertada frecuencias");
});

//Insertar registros en tabla persona motivo asistencia
router.post("/insertarmotivoasistencia", async (req, res) => {
  const { id_motivo_asistencia } = req.body;
  await client.query(
    `INSERT INTO persona_motivo_asistencia_evento(id_persona, id_motivo)
    VALUES(${id_last_persona["rows"][0]["id_persona"]}, 
    ${verifyReasonsAsis(id_motivo_asistencia)})`
  );
  res.send("motivos asistencia");
});

//Insertar registros en tabla persona motivo inasistencia
router.post("/insertarmotivoinasistencia", async (req, res) => {
  const { id_motivo_inasistencia } = req.body;
  await client.query(
    `INSERT INTO persona_motivo_inasistencia_evento(id_persona, id_motivo)
    VALUES(${id_last_persona["rows"][0]["id_persona"]}, 
    ${verifyReasonInasis(id_motivo_inasistencia)})`
  );
  res.send("motivos inasistencia");
});
