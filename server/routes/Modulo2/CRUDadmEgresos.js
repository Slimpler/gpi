const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------
// --------------------------------- Agregar egreso ------------------------------
router.post("/agregarEgreso", (req, res) => {
  console.log(req.body);
    (id = req.body.id),
    (monto = req.body.monto),
    (fecha = req.body.fecha),
    (estado = req.body.estado),
    (descripcion = req.body.descripcion),
    (rut_dir = "Pendiente"),
    db.query(
      "INSERT INTO egresos (monto, fecha, estado, descripcion, rut_dir) VALUES (?, ?, ?, ?, ?)",
      [monto, fecha, estado, descripcion, rut_dir],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Admitido");
        }
      }
    );
});

// -------------------------- Actualizar tabla intermedia afiliado agreso ---------------------
router.post("/agregarEgresoAfiliado/:rut_afiliado/:monto_egreso", (req, res) => {
  console.log("a",req.params);
  const rut_afiliado = req.params.rut_afiliado;
  const monto_egreso = req.params.monto_egreso;
    db.query(
      "INSERT INTO egresos_afiliados (id, rut_afiliado, monto_egreso) VALUES ((SELECT MAX(id) FROM egresos), ?, ?)",
      [rut_afiliado, monto_egreso],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Bono ingresado para", rut_afiliado);
        }
      }
    );
});

// ------------------------------------------ Get ------------------------------------------------
// ---------------- Mostrar bonos de afiliados -------------------------------
router.get("/showEgresosAfiliados", (req, res) => {
  db.query(
    "SELECT e.id, ea.rut_afiliado, a.nombre, ea.monto_egreso, e.fecha, e.estado, e.descripcion, e.rut_dir FROM egresos e JOIN egresos_afiliados ea ON e.id = ea.id JOIN afiliado a ON ea.rut_afiliado = a.rut_afiliado",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ---------------- Mostrar bonos --------------------------------
router.get("/getBonos", (req, res) => {
  db.query("SELECT * from egresos WHERE descripcion = 'Bono Fiestas Patrias' or descripcion = 'Bono Navidad'",
   (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


// ---------------. Afiliados y antiguedad -----------------------
router.get("/getRUTAntafiliados", (req, res) => {
  db.query("SELECT rut_afiliado, antiguedad_afiliado from afiliado", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// -------------------- Directiva ----------------------------------
router.get("/getDirectiva", (req, res) => {
  db.query(
    "SELECT rut_dir FROM directiva",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// ------------------------------------------- Put ------------------------------------------------
// --------------- Editar bonos -------------------
router.put("/editBono", (req, res) => {
  const id = req.body.id;
  const estado = req.body.estado;
  const rut_dir = req.body.rut_dir;

  db.query(
    "UPDATE egresos SET estado = ?, rut_dir = ? WHERE id = ?",
    [estado, rut_dir, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Bono actualizado");
      }
    }
  );
});

// ------------------------------------------- Delete ----------------------------------------------
router.delete("/eliminarEgreso", (req, res) => {
  db.query(
    "DELETE FROM egresos WHERE id = (SELECT * FROM (SELECT MAX(id) FROM egresos) as t)",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;