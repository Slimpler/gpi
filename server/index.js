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
  password: "clave123",
  database: "quintero_vf",
});
 
   app.post("/createPagos", (req, res) => {
  console.log(req.body);
  (id_pago = req.body.id_pago),
    (monto_pago = req.body.monto_pago),
    (fecha_pago = req.body.fecha_pago),
    (estado_pago = req.body.estado_pago),
    (tipo_pago = req.body.tipo_pago),
    (rut_afiliado = req.body.rut_afiliado),
    db.query(
      "INSERT INTO pagos (monto_pago, fecha_pago, estado_pago, tipo_pago ) VALUES (?, ?, ?, ?)",
      [monto_pago, fecha_pago, estado_pago, tipo_pago],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valores Insertados");
        }
      }
    );

  /*   query2() = db.query(
    "INSERT INTO pagos_afiliados (id_pago, rut_afiliado) VALUES ((SELECT id_pago FROM pagos WHERE id_pago=?), ( SELECT  rut_afiliado FROM afiliado WHERE rut_afiliado = ?))",
    [id_pago, rut_afiliado],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores insertados");
      }
    }
  ); */
});

app.get("/showPagos", (req, res) => {
  db.query("SELECT * FROM pagos", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/editPagos", (req, res) => {
  const id_pago = req.body.id_pago;
  const rut_afiliado = req.body.rut_afiliado;
  const monto_pago = req.body.monto_pago;
  const fecha_pago = req.body.fecha_pago;
  const estado_pago = req.body.estado_pago;

  db.query(
    "UPDATE pagos SET rut_afiliado = ?, monto_pago = ?, fecha_pago = ?, estado_pago = ? WHERE id_pago = ?",
    [rut_afiliado, monto_pago, fecha_pago, estado_pago, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores actualizados");
      }
    }
  );
});

app.delete("/deletePagos/:id", (req, res) => {
  const id_pago = req.params.id_pago;

  db.query("DELETE FROM pagos WHERE id_pago = ? ", id_pago, (err, result) => {
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
  
    db.query("DELETE FROM convenio WHERE id_convenio = ? ", id_convenio, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  
});  

app.listen(3001, () => {
  console.log("server corriendo en 3001");
}); 
