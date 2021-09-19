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

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;
let id_last_persona = 0;

//Este query inserta los datos de la persona encuestada
router.post("/insertarencuestado", async (req, res) => {
  const {
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
  } = req.body;
  await client.query(
    `INSERT INTO persona(edad, zona, deporte_favorito, comida_preferida, genero_cine_fav, genero_mus_fav,
      id_horario_dia, id_dia_semana,id_evento_pref,id_rango_pago) 
      VALUES(${edad},'${zona}','${deporte_favorito}','${comida_preferida}','${genero_cine_fav}', 
      '${genero_mus_fav}', ${id_horario_dia}, ${id_dia_semana}, 
      ${id_evento_pref}, ${id_rango_pago})`
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
  const { id_frecuencia, id_evento } = req.body;
  await client.query(
    `INSERT INTO persona_frecuencia_eventos(id_persona, id_frecuencia, id_evento)
    VALUES(${id_last_persona["rows"][0]["id_persona"]}, ${id_frecuencia}, ${id_evento})`
  );
  res.send("Insertada frecuencia");
});

//Insertar registros en tabla persona motivo asistencia
router.post("/insertarmotivoasistencia", async (req, res) => {
  const { id_motivo_asistencia } = req.body;
  await client.query(
    `INSERT INTO persona_motivo_asistencia_evento(id_persona, id_motivo)
    VALUES(${id_last_persona["rows"][0]["id_persona"]}, ${id_motivo_asistencia})`
  );
  res.send("motivos asistencia");
});

//Insertar registros en tabla persona motivo inasistencia
router.post("/insertarmotivoinasistencia", async (req, res) => {
  const { id_motivo_inasistencia } = req.body;
  await client.query(
    `INSERT INTO persona_motivo_inasistencia_evento(id_persona, id_motivo)
    VALUES(${id_last_persona["rows"][0]["id_persona"]}, ${id_motivo_inasistencia})`
  );
  res.send("motivos inasistencia");
});
