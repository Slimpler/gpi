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
router.get("/showPagosAsociacion", (req, res) => {
  db.query(
    "SELECT c.nombre_conv, i.monto, i.fecha, i.estado FROM convenio c JOIN ingresos i JOIN ingreso_convenio ic WHERE i.id_ingreso = ic.id_ingreso AND c.id_conv = ic.id_conv",
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
  const id_pago = req.body.id_pago;
  const monto_pago = req.body.monto_pago;
  const fecha_pago = req.body.fecha_pago;
  const estado_pago = req.body.estado_pago;
  const tipo_pago = "Pago asociacion";
  const descripcion = req.body.descripcion;

  db.query(
    "UPDATE pagos SET monto_pago = ?, fecha_pago = ?, estado_pago = ?, tipo_pago = ?, descripcion = ? WHERE id_pago = ?",
    [monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Valores actualizados en la tabla pagos desde asociacion",
          id_pago
        );
      }
    }
  );
});

module.exports = router;
