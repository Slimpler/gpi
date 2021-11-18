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
    (rut_dir = req.body.rut_dir),
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
router.post("/agregarEgresoAfiliado/:rut_afiliado", (req, res) => {
  console.log(req.body);
  const rut_afiliado = req.params.rut_afiliado;
    db.query(
      "INSERT INTO egresos_afiliados (id, rut_afiliado) VALUES ((SELECT MAX(id) FROM egresos), ?)",
      [rut_afiliado],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Bono ingresado para", rut_afiliado);
        }
      }
    );
});

// ---------------- Mostrar bonos -------------------------------
router.get("/showEgresosAfiliados", (req, res) => {
  db.query(
    "SELECT e.id, ea.rut_afiliado, e.monto, e.fecha, e.estado, e.descripcion, e.rut_dir FROM egresos e JOIN egresos_afiliados ea ON e.id = ea.id",
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
