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
  password: "password",
  database: "quintero",
});

app.post("/createPagos", (req, res) => {
  console.log(req.body);
  (id_pago = req.body.id_pago),
    (monto_pago = req.body.monto_pago),
    (fecha_pago = req.body.fecha_pago),
    (estado_pago = req.body.estado_pago),
    (rut_afiliado = req.body.rut_afiliado),
    db.query(
      "INSERT INTO pagos (id_pago, monto_pago, fecha_pago, estado_pago, rut_afiliado) VALUES (?, ?, ?, ?, ?)",
      [id_pago, monto_pago, fecha_pago, estado_pago, rut_afiliado],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Valores Insertados");
        }
      }
    );
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

app.listen(3001, () => {
  console.log("server corriendo en 3001");
});
