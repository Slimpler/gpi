const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const e = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Bolano12",
  database: "quintero_vf",
});


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

//Convenios
app.post("/createConvenio", (req, res) => {
  console.log(req.body);
  (id_convenio = req.body.id_convenio),
    (nombre_convenio = req.body.nombre_convenio),
    (fecha_ingreso = req.body.fecha_ingreso),
    db.query(
      "INSERT INTO convenio (id_convenio, nombre_convenio, fecha_ingreso) VALUES (?, ?, ?)",
      [id_convenio, nombre_convenio, fecha_ingreso],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valores Insertados");
        }
      }
    );
});

app.get("/showConvenios", (req, res) => {
  db.query("SELECT * FROM convenio", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/editConvenio", (req, res) => {
  const id_convenio = req.body.id_convenio;
  const nombre_convenio = req.body.nombre_convenio;
  const fecha_ingreso = req.body.fecha_ingreso;

  db.query(
    "UPDATE convenio SET id_convenio = ?, nombre_convenio = ?, fecha_ingreso  WHERE id_convenio = ?",
    [id_convenio, nombre_convenio, fecha_ingreso],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores actualizados");
      }
    }
  );
});

app.delete("/deleteConvenio/:id", (req, res) => {
  const id_convenio = req.params.id_convenio;

  db.query(
    "DELETE FROM convenio WHERE id_convenio = ? ",
    id_convenio,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server corriendo en 3001");
});
