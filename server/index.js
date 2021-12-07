const express = require("express");
const app = express();
const cors = require("cors");
const e = require("express");
const morgan = require("morgan");

const db = require("./database");
//settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Modulo 1: Administracion de Convenios
app.use(require("./routes/Modulo1/ConvenioC"));
app.use(require("./routes/Modulo1/ConvenioD"));
app.use(require("./routes/Modulo1/ConvenioF"));

// Modulo 2: Administracion de pagos
app.use(require("./routes/Modulo2/CRUDadmAfiliado"));
app.use(require("./routes/Modulo2/CRUDadmAsociacion"));
app.use(require("./routes/Modulo2/CRUDadmEgresos"));

// Modulo 3: 
app.use(require("./routes/Modulo3/FormAfiliate"));
app.use(require("./routes/Modulo3/FormDesafiliate"));
app.use(require("./routes/Modulo3/Login"));
app.use(require("./routes/Modulo3/CRUDafiliados"));


app.listen(3001, () => {
  console.log(`Server corriendo en ${app.get(`port`)}`);
});