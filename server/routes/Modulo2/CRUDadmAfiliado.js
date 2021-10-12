const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------
// ------- ingresar un pago de afiliado ----------
router.post("/createPagoAfiliado", (req, res) => {
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

// ----------- Actualizar tabla intermedia de pagos y afiliados -----------------------
router.post("/createPagosAfiliados", (req, res) => {
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
    );
});

// -------------------------------------------------------- Get ------------------------------------------------
// ----------------- Mostrar pagos afiliados -------------------------
router.get("/showPagosAfiliados", (req, res) => {
  db.query(
    "select p.id_pago, pa.rut_afiliado, p.monto_pago, p.fecha_pago, p.estado_pago, p.tipo_pago, p.descripcion from pagos p join pagos_afiliados pa on p.id_pago = pa.id_pago",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// --------------------------------------------------------- Put -----------------------------------------------
// ------------------ Editar pagos -------------------------
router.put("/editPagoAfiliado", (req, res) => {
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
  );
});

// --------------------- Editar pagos afiliados ---------------------
router.put("/editPagosAfiliados", (req, res) => {
  const id_pago = req.body.id_pago;
  const rut_afiliado = req.body.rut_afiliado;

  db.query(
    "UPDATE pagos_afiliados SET rut_afiliado = ? WHERE id_pago = ?",
    [rut_afiliado, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Valores actualizados en la tabla pagos_afiliados",
          id_pago
        );
      }
    }
  );
});

// --------------------- Eliminar pagos afiliados ---------------------
router.delete("/deletePagos/:id", (req, res) => {
  const id_pago = req.params.id_pago;

  db.query("DELETE FROM pagos WHERE id_pago = ?", id_pago, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
