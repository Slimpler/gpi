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
    (estado = "Pendiente"),
    (descripcion = req.body.descripcion),
    (rut_dir = req.body.rut_dir),
    (activo = "Si"),
    db.query(
      "INSERT INTO egresos (monto, fecha, estado, descripcion, rut_dir, activo) VALUES (?, ?, ?, ?, ?, ?)",
      [monto, fecha, estado, descripcion, rut_dir, activo],
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
  console.log("aaaa",req.params);
  const rut_afiliado = req.params.rut_afiliado;
  const monto_egreso = req.params.monto_egreso;
    db.query(
      "INSERT INTO egresos_afiliados (id, rut_afiliado, monto_egreso) VALUES ((SELECT MAX(id) FROM egresos), ?, ?)",
      [rut_afiliado, monto_egreso],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(301).send(result)
          console.log("Bono ingresado para", rut_afiliado);
        }
      }
    );
});

// ------------------------------------------ Get ------------------------------------------------
// ---------------- Mostrar bonos de afiliados -------------------------------
router.get("/showEgresosAfiliados", (req, res) => {
  db.query(
    "SELECT e.id, ea.rut_afiliado, a.nombre, ea.monto_egreso, e.fecha, e.estado, e.descripcion, e.rut_dir FROM egresos e JOIN egresos_afiliados ea ON e.id = ea.id JOIN afiliado a ON ea.rut_afiliado = a.rut_afiliado WHERE e.activo = 'Si'",
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
  db.query("SELECT * FROM egresos WHERE activo = 'Si' AND descripcion = 'Bono Fiestas Patrias' OR activo = 'Si' AND descripcion = 'Bono Navidad'",
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

// --------------- Desactivar bonos ---------------
router.put("/desactivarEgreso", (req, res) => {
  console.log("eeeeeeeeeeeeee",req.body)
  const id = req.body.id;
  const activo = "No";

  db.query(
    "UPDATE egresos SET activo = ? WHERE id = ?",
    [activo, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Bono desactivado");
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