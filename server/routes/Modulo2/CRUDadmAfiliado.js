const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------
// ------- ingresar un pago de afiliado ----------
router.post("/createIngresoAfiliado", (req, res) => {
  (id_ingreso = req.body.id_ingreso),
    (monto = req.body.monto),
    (fecha = req.body.fecha),
    (estado = "Pendiente"),
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
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log("Tabla intermedia de ingresos y deudas actualizada");
        }
      }
    );
});

router.post("/createDeudaAfiliado", (req, res) => {
  console.log(req.body);
  (id_deuda = req.body.id_deuda),
    (deuda_total = req.body.deuda_total),
    (remanente_deuda = req.body.remanente_deuda),
    (cuotas_totales = req.body.cuotas_totales),
    (cuotas_pagadas = 0),
    (descripcion = req.body.descripcion),
    (rut_afiliado = req.body.rut_afiliado),
    db.query(
      "INSERT INTO deudas (deuda_total, remanente_deuda,cuotas_totales, cuotas_pagadas, descripcion, rut_afiliado) VALUES (?, ?, ?, ?, ?, ?)",
      [
        deuda_total,
        remanente_deuda,
        cuotas_totales,
        cuotas_pagadas,
        descripcion,
        rut_afiliado,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Deuda admitida");
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
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ------------------- Ruts de afiliados --------------------------------
router.get("/getRUTafiliados", (req, res) => {
  db.query("SELECT rut_afiliado from afiliado", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ------------------- Deuda asociada a un ingreso --------------------------
router.get("/getDeudaIngreso/:id_ingreso", (req, res) => {
  const id_ingreso = req.params.id_ingreso;
  db.query(
    "SELECT pd.id_deuda, d.remanente_deuda from pagos_deudas pd JOIN deudas d ON pd.id_deuda = d.id_deuda WHERE pd.id_ingreso = ?",
    [id_ingreso],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// -------------------- Todas las deudas --------------------------------
router.get("/getDeudas", (req, res) => {
  db.query("SELECT * from deudas", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// --------------------------------------------------------- Put -----------------------------------------------
// ------------------ Editar pagos -------------------------
router.put("/editIngresoAfiliado", (req, res) => {
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

// --------------- Editar pagos afiliados -----------------
router.put("/editIngresosAfiliados", (req, res) => {
  const id_ingreso = req.body.id_ingreso;
  const rut_afiliado = req.body.rut_afiliado;

  db.query(
    "UPDATE pagos_afiliados SET rut_afiliado = ? WHERE id_ingreso = ?",
    [rut_afiliado, id_ingreso],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("RUT del ingreso actualizado");
      }
    }
  );
});

// --------------- Actualizar deuda desde un editar ---------
router.put("/actualizarDeudaEdit", (req, res) => {
  console.log(req.body);
  const remanente = req.body.remanente;
  const id_deuda = req.body.id_deuda;
  const oldMonto = req.body.oldMonto;
  const monto = req.body.monto;

  db.query(
    "UPDATE deudas SET remanente_deuda = ? - (? - ?) WHERE id_deuda = ?",
    [remanente, monto, oldMonto, id_deuda],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Deuda actualizada por el monto", monto);
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
  );
});

// ---------------------- Actualizar deuda de pago eliminado -----------------------
router.put("/actualizarDeudaEliminado", (req, res) => {
  console.log(req.body)
  const id_deuda = req.body.id_deuda;
  const oldMonto = req.body.oldMonto;
  const remanente = req.body.remanente;

  db.query(
    "UPDATE deudas SET remanente_deuda = (? + ?), cuotas_pagadas = (cuotas_pagadas - 1) WHERE id_deuda = ?",
    [remanente, oldMonto, id_deuda],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Deuda actualizada para pago eliminado");
      }
    }
  )
});

// -------------------------------------------- Delete -------------------------------
// --------------------- Eliminar pagos afiliados ---------------------
router.delete("/eliminarIngreso/:id_ingreso", (req, res) => {
  const id_ingreso = req.params.id_ingreso;

  db.query("DELETE FROM ingresos WHERE id_ingreso = ?", 
    [id_ingreso], 
    (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Pago eliminado");
      res.send(result);
    }
  });
});

module.exports = router;
