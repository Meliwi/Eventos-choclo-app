const basedatos = require("./database");
module.exports = (app) => {
  app.use("/database", basedatos);
};
