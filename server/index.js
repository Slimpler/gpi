const express = require("express");
const app = express();
const cors = require("cors");
const e = require("express");
const morgan = require('morgan');

const db = require('./database')
//settings
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//routes
app.use(require('./routes/FormAfiliate'));


// ------------------------------- Queries --------------------------------------


// ------------------------------------------- Post ----------------------------------------
// ------- ingresar un pago de afiliado ----------
app.post("/createPagoAfiliado", (req, res) => {
  console.log(req.body);
  (id_pago = req.body.id_pago),
  (monto_pago = req.body.monto_pago),
  (fecha_pago = req.body.fecha_pago),
  (estado_pago = req.body.estado_pago),
  (descripcion = req.body.descripcion),
  (tipo_pago = "Pago afiliado"),
  db.query(
      "INSERT INTO pagos (monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion) VALUES (?, ?, ?, ?, ?)",
      [monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion, "insertados");
      }
    }
  )});  
  
// ------- Ingresar un pago de la asociacion ----------
app.post("/createPagoAsociacion", (req, res) => {
  console.log(req.body);
  (id_pago = req.body.id_pago),
  (monto_pago = req.body.monto_pago),
  (fecha_pago = req.body.fecha_pago),
  (estado_pago = req.body.estado_pago),
  (descripcion = req.body.descripcion),
  (tipo_pago = "Pago asociacion"),
  db.query(
      "INSERT INTO pagos (monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion) VALUES (?, ?, ?, ?, ?)",
      [monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion,"insertados");
      }
    }
  )});

// ----------- Actualizar tabla intermedia de pagos y afiliados -----------------------
app.post("/createPagosAfiliados", (req, res) => {
  (rut_afiliado = req.body.rut_afiliado), 
  db.query(
    "INSERT INTO pagos_afiliados (id_pago, rut_afiliado) VALUES ((SELECT MAX(id_pago) FROM pagos), (SELECT rut_afiliado FROM afiliado where rut_afiliado = ?))",
    [rut_afiliado],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(rut_afiliado, "insertado");
      }
    }
  )});

// ----------------- Ingresar bono -------------------------


// -------------------------------------------------------- Get ------------------------------------------------
// ----------------- Mostrar pagos afiliados -------------------------
app.get("/showPagosAfiliados", (req, res) => {
  db.query("select p.id_pago, pa.rut_afiliado, p.monto_pago, p.fecha_pago, p.estado_pago, p.tipo_pago, p.descripcion from pagos p join pagos_afiliados pa on p.id_pago = pa.id_pago",
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ---------------- Mostrar pagos asociacion -----------------------
app.get("/showPagosAsociacion", (req, res) => {
  db.query("SELECT id_pago, tipo_pago, monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion FROM pagos where tipo_pago = 'Pago asociacion'",
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ---------------- Mostrar bonos -------------------------------
app.get("/showBonosAfiliados", (req, res) => {
  db.query("SELECT p.id_pago, pa.rut_afiliado, p.tipo_pago, p.monto_pago, p.fecha_pago, p.estado_pago, p.tipo_pago, p.descripcion FROM pagos p JOIN pagos_afiliados pa on p.id_pago = pa.id_pago where descripcion = 'Bono Fiestas Patrias' or descripcion = 'Bono navidad'",
  (err, result) => {
    if(err){
      console.log(err);
    } else {
    res.send(result);
    }
  });
});

// --------------------------------------------------------- Put -----------------------------------------------
// ------------------ Editar pagos -------------------------
app.put("/editPagoAfiliado", (req, res) => {
  const id_pago = req.body.id_pago;
  const monto_pago = req.body.monto_pago;
  const fecha_pago = req.body.fecha_pago;
  const estado_pago = req.body.estado_pago;
  const tipo_pago = req.body.tipo_pago;
  const descripcion = req.body.descripcion;

  db.query(
    "UPDATE pagos SET monto_pago = ?, fecha_pago = ?, estado_pago = ?, tipo_pago = ?, descripcion = ? WHERE id_pago = ?",
    [monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores actualizados en la tabla pagos", id_pago);
      }
    }
  )});

// --------------------- Editar pagos afiliados ---------------------
app.put("/editPagosAfiliados", (req, res) => {
  const id_pago = req.body.id_pago;
  const rut_afiliado = req.body.rut_afiliado;

  db.query(
    "UPDATE pagos_afiliados SET rut_afiliado = ? WHERE id_pago = ?",
    [rut_afiliado, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else{
        console.log("Valores actualizados en la tabla pagos_afiliados", id_pago)
      }
    }
  )});
  app.put("/editPagoAfiliado", (req, res) => {
  const id_pago = req.body.id_pago;
  const monto_pago = req.body.monto_pago;
  const fecha_pago = req.body.fecha_pago;
  const estado_pago = req.body.estado_pago;
  const tipo_pago = req.body.tipo_pago;
  const descripcion = req.body.descripcion;

  db.query(
    "UPDATE pagos SET monto_pago = ?, fecha_pago = ?, estado_pago = ?, tipo_pago = ?, descripcion = ? WHERE id_pago = ?",
    [monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores actualizados en la tabla pagos", id_pago);
      }
    }
  )});



app.delete("/deletePagos/:id", (req, res) => {
  const id_pago = req.params.id_pago;

  db.query("DELETE FROM pagos WHERE id_pago = ?", id_pago, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
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
//Mostrar convenios financioeros
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
