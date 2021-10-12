const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------

// ------- Ingresar un pago de la asociacion ----------
router.post("/createPagoAsociacion", (req, res) => {
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
          console.log(
            monto_pago,
            fecha_pago,
            estado_pago,
            tipo_pago,
            descripcion,
            "insertados"
          );
        }
      }
    );
});

// ---------------- Mostrar pagos asociacion -----------------------
router.get("/showPagosAsociacion", (req, res) => {
  db.query(
    "SELECT id_pago, tipo_pago, monto_pago, fecha_pago, estado_pago, tipo_pago, descripcion FROM pagos where tipo_pago = 'Pago asociacion'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// --------------------- Editar pagos asociacion ---------------------

router.put("/editPagosAsociacion", (req, res) => {
  const id_pago = req.body.id_pago;
  const monto_pago = req.body.monto_pago;
  const fecha_pago = req.body.fecha_pago;
  const estado_pago = req.body.estado_pago;
  const tipo_pago = req.body.tipo_pago;
  const descripcion = req.body.descripcion;

  db.query(
    "UPDATE pagos SET monto_pago = ?, fecha_pago = ?, estado_pago = ?, tipo_pago = ?, descripcion = ? WHERE id_pago = ?",
    [descripcion, monto_pago, fecha_pago, estado_pago, tipo_pago, id_pago],
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
