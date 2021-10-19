
const { Router } = require("express");
const router = Router();

const db = require("../../database");







//Convenio Comercial -----------------------------------------------------------------------------|
//Crear Convenio Comercial
router.post("/createConvenioC", (req, res) => {
    console.log(req.body);
    (id_convC = req.body.id_convC),
      (nombre_convC = req.body.nombre_convC),
      (fecha_convC = req.body.fecha_convC),
      db.query(
        "INSERT INTO convenio_comercial (id_convC, nombre_convC, fecha_convC) VALUES (?, ?, ?)",
        [id_convC, nombre_convC, fecha_convC],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Valores Insertados");
          }
        }
      );
  });
  //Mostrar convenios comercial
  router.get("/showConvenioC", (req, res) => {
    db.query("SELECT * FROM convenio_comercial", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  //Editar convenios comercial
  router.put("/editConvenioC", (req, res) => {
    const id_convC = req.body.id_convC;
    const nombre_convC = req.body.nombre_convC;
    const fecha_convC = req.body.fecha_convC;
  
    db.query(
      "UPDATE convenio_comercial SET nombre_convC = ?, fecha_convC = ?  WHERE id_convC = ?",
      [nombre_convC, fecha_convC, id_convC],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores actualizados tabla convenio_comercial", id_convC);
        }
      }
    );
  });
  
  router.delete("/deleteConvenioC/:id_convC", (req, res) => {
    const id_convC = req.params.id_convC;
    db.query(
      "DELETE FROM convenio_financiero WHERE id_convF = ?",
      [id_convC],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log("Valores eliminados de convenio_comercial", id_convC);
        }
      }
    );
  });
  //Convenio Comercial ----------------------------------------------------------------------------|

  module.exports = router;