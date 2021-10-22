const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------
// ------- ingresar un pago de afiliado ----------
router.post("/createIngresoAfiliado", (req, res) => {
  console.log(req.body);
  (id_ingreso = req.body.id_ingreso),
    (monto = req.body.monto),
    (fecha = req.body.fecha),
    (estado = req.body.estado),
    (tipo = "Pago afiliado"),
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

// ----------- Actualizar tabla intermedia de ingresos y afiliados -----------------------
router.post("/createIngresosAfiliados", (req, res) => {
  (rut_afiliado = req.body.rut_afiliado),
    db.query(
      "INSERT INTO pagos_afiliados (id_ingreso, rut_afiliado) VALUES ((SELECT MAX(id_ingreso) FROM ingresos), (SELECT rut_afiliado FROM afiliado where rut_afiliado = ?))",
      [rut_afiliado],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Tabla intermedia de ingresos y afiliados actualizada");
        }
      }
    );
});

// ------------- Actualizar tabla intermedia entre ingresos y deuda ----------------------
router.post("/createIngresosDeudas", (req, res) => {
  console.log(req.body),
  (id_deuda = req.body.id_deuda),
    db.query(
      "INSERT into pagos_deudas (id_ingreso, id_deuda) VALUES ((SELECT MAX(id_ingreso) FROM ingresos), (SELECT id_deuda FROM deudas where id_deuda = ?))",
      [id_deuda],
      (err, result) => {
        if(err) {
          console.log(err);
        } else {
          res.send(result);
          console.log("Tabla intermedia de ingresos y deudas actualizada");
        }
      }
    );
});

// -------------------------------------------------------- Get ------------------------------------------------
// ----------------- Mostrar pagos afiliados -------------------------
router.get("/showIngresosAfiliados", (req, res) => {
  db.query(
    "SELECT i.id_ingreso, pa.rut_afiliado, i.monto, i.fecha, i.estado, i.tipo FROM ingresos i JOIN pagos_afiliados pa ON i.id_ingreso = pa.id_ingreso",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ------------------- Obtener deudas --------------------------------
router.get("/getDeudas/:rut_afiliado", (req, res) => {
  const rut_afiliado = req.params.rut_afiliado;
  db.query(
    "SELECT id_deuda, deuda_total, remanente_deuda, cuotas_totales, cuotas_pagadas, descripcion FROM deudas WHERE rut_afiliado = ?",
    [rut_afiliado],
    (err, result) => {
      if(err) {
        console.log(err);
      } else{
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

// --------------- Editar pagos afiliados -----------------
router.put("/editPagosAfiliados", (req, res) => {
  const id_pago = req.body.id_pago;
  const rut_afiliado = req.body.rut_afiliado;

  db.query(
    "UPDATE pagos_afiliados SET id_pago = ?, rut_afiliado = ? WHERE id_pago = ?",
    [id_pago, rut_afiliado, id_pago],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Valores actualizados en la tabla pagos_afiliados", id_pago);
      }
    }
  );
});

// ----------------- Actualizar deuda ----------------------
router.put("/actualizarDeuda", (req, res) => {
  const id_deuda = req.body.id_deuda;
  const monto = req.body.monto;

  db.query(
    "UPDATE deudas SET remanente_deuda = (remanente_deuda - ?), cuotas_pagadas = (cuotas_pagadas + 1) WHERE id_deuda = ?",
    [monto, id_deuda],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Deuda actualizada por el monto", monto);
      }
    }
  )
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
