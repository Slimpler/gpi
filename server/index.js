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

//routes
app.use(require("./routes/FormAfiliate"));

// Modulo 2: Administracion de pagos
app.use(require("./routes/Modulo2/CRUDadmAfiliado"));
app.use(require("./routes/Modulo2/CRUDadmAsociacion"));
app.use(require("./routes/Modulo2/CRUDadmBonos"));

// ------------------------------- Queries --------------------------------------

//Convenio Financiero ----------------------------------------------------------------------------|
//Crear Convenio Financiero
app.post("/createConvenioF", (req, res) => {
  console.log(req.body);
  (id_convF = req.body.id_convF),
    (nombre_convF = req.body.nombre_convF),
    (fecha_convF = req.body.fecha_convF),
    db.query(
      "INSERT INTO convenio_financiero (id_convF, nombre_convF, fecha_convF) VALUES (?, ?, ?)",
      [id_convF, nombre_convF, fecha_convF],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valores Insertados");
        }
      }
    );
});
//Mostrar convenios financieros
 app.get("/showConvenioF", (req, res) => {
  db.query("SELECT * FROM convenio_financiero", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Editar convenios financieros
app.put("/editConvenioF", (req, res) => {
  const id_convF = req.body.id_convF;
  const nombre_convF = req.body.nombre_convF;
  const fecha_convF = req.body.fecha_convF;

  db.query(
    "UPDATE convenio_financiero SET nombre_convF = ?, fecha_convF = ?  WHERE id_convF = ?",
    [nombre_convF, fecha_convF, id_convF],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores actualizados tabla convenio_financiero", id_convF);
      }
    }
  );
});

app.delete("/deleteConvenioF/:id", (req, res) => {
  const id_convF = req.params.id_convF;

  db.query(
    "DELETE * FROM convenio_financiero WHERE id_convF = ? ",
    [nombre_convF, fecha_convF, id_convF],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores eliminados de convenio_financiero", id_convF);
      }
    }
  );
});
//Convenio Financiero ----------------------------------------------------------------------------|

//Convenio Comercial -----------------------------------------------------------------------------|
//Crear Convenio Comercial
app.post("/createConvenioC", (req, res) => {
  console.log(req.body);
  (id_convC = req.body.id_convC),
    (nombre_convC = req.body.nombre_convC),
    (fecha_convC = req.body.fecha_convC),
    db.query(
      "INSERT INTO convenio_comercial (id_convC, nombre_convC, fecha_convC) VALUES (?, ?, ?)",
      [id_convC, nombre_convC, fecha_convC],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valores Insertados");
        }
      }
    );
});
//Mostrar convenios comercial
app.get("/showConvenioC", (req, res) => {
  db.query("SELECT * FROM convenio_comercial", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Editar convenios financieros
app.put("/editConvenioC", (req, res) => {
  const id_convC = req.body.id_convC;
  const nombre_convC = req.body.nombre_convC;
  const fecha_convC = req.body.fecha_convC;

  db.query(
    "UPDATE convenio_comercial SET nombre_convC = ?, fecha_convC = ?  WHERE id_convC = ?",
    [nombre_convC, fecha_convC, id_convC],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores actualizados tabla convenio_comerical", id_convC);
      }
    }
  );
});

app.delete("/deleteConvenioC/:id", (req, res) => {
  const id_convC = req.params.id_convC;

  db.query(
    "DELETE * FROM convenio_comercial WHERE id_convC = ? ",
    [nombre_convC, fecha_convC, id_convC],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores eliminados de convenio_comercial", id_convC);
      }
    }
  );
});
//Convenio Comercial ----------------------------------------------------------------------------|

//Convenio Descuento -----------------------------------------------------------------------------|
//Crear Convenio Descuento
app.post("/createConvenioD", (req, res) => {
  console.log(req.body);
  (id_convD = req.body.id_convD),
    (nombre_convD = req.body.nombre_convD),
    (fecha_convD = req.body.fecha_convD),
    db.query(
      "INSERT INTO convenio_descuento (id_convD, nombre_convD, fecha_convD) VALUES (?, ?, ?)",
      [id_convD, nombre_convD, fecha_convD],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valores Insertados");
        }
      }
    );
});
//Mostrar convenios Descuento
app.get("/showConvenioD", (req, res) => {
  db.query("SELECT * FROM convenio_descuento", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Editar convenios descuento
app.put("/editConvenioD", (req, res) => {
  const id_convD = req.body.id_convD;
  const nombre_convD = req.body.nombre_convD;
  const fecha_convD = req.body.fecha_convD;

  db.query(
    "UPDATE convenio_descuento SET nombre_convD = ?, fecha_convD = ?  WHERE id_convD = ?",
    [nombre_convD, fecha_convD, id_convD],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores actualizados tabla convenio_comerical", id_convD);
      }
    }
  );
});

app.delete("/deleteConvenioD/:id", (req, res) => {
  const id_convD = req.params.id_convD;

  db.query(
    "DELETE * FROM convenio_descuento WHERE id_convD = ? ",
    [nombre_convD, fecha_convD, id_convD],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores eliminados de convenio_descuento", id_convD);
      }
    }
  );
});
//Convenio Descuento ----------------------------------------------------------------------------|

app.listen(3001, () => {
  console.log(`Server corriendo en ${app.get(`port`)}`);
});
