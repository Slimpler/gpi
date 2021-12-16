const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------
// ------- ingresar un pago externo ----------
router.post("/createIngresoExterno", (req, res) => {
  (id_ingreso = req.body.id_ingreso),
    (monto = req.body.monto),
    (fecha = req.body.fecha),
    (estado = req.body.estado),
    (tipo = "Pago externo"),
    db.query(
      "INSERT INTO ingresos (monto, fecha, estado, tipo) VALUES (?, ?, ?, ?)",
      [monto, fecha, estado, tipo],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Ingreso admitido");
        }
      }
    );
});


// -------- Actualizar tabla intemedia entre convenio e ingreso -----------------
router.post("/agregarIngresoConvenio", (req, res) => {
    console.log(req.body);
    (id_conv = req.body.id_conv),
    db.query(
      "INSERT INTO ingreso_convenio (id_ingreso, id_conv) VALUES ((SELECT MAX(id_ingreso) FROM ingresos), ?)",
      [id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Tabla intemedia entre convenios e ingresos actualizada");
        }
      }
    );
});

// -------------------------------------------- Get --------------------------------------------------
// ---------------- Mostrar pagos asociacion -----------------------
router.get("/showIngresosExternos", (req, res) => {
  db.query(
    "SELECT id_ingreso, monto, fecha, estado, tipo FROM ingresos where tipo = 'Pago externo'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


// ---------------- Mostrar convenios -------------------------------
router.get("/getConvenios", (req, res) => {
  db.query(
    "SELECT id_conv, nombre_conv, descripcion_conv, tipo_conv from convenio",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


// -------------------------------------------- Put --------------------------------------------------
// --------------------- Editar pagos asociacion ---------------------

router.put("/editPagosAsociacion", (req, res) => {
  console.log(req.body);
  const id_ingreso = req.body.id_ingreso;
  const monto = req.body.monto;
  const fecha = req.body.fecha;
  const estado = req.body.estado;

  db.query(
    "UPDATE ingresos SET monto = ?, fecha = ?, estado = ? WHERE id_ingreso = ?",
    [monto, fecha, estado, id_ingreso],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Ingreso actualizado");
      }
    }
  );
});

module.exports = router;
