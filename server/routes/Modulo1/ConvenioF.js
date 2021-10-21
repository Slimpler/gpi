
const { Router } = require("express");
const router = Router();

const db = require("../../database");




// ------------------------------- Queries --------------------------------------

//Convenio Financiero ----------------------------------------------------------------------------|
//Crear Convenio Financiero
router.post("/createConvenioF", (req, res) => {
    console.log(req.body);
    (id_convF = req.body.id_convF),
      (nombre_convF = req.body.nombre_convF),
      (fecha_convF = req.body.fecha_convF),
      db.query(
        "INSERT INTO convenio_financiero (id_convF, nombre_convF, fecha_convF) VALUES (?, ?, ?)",
        [id_convF, nombre_convF, fecha_convF],
        (err, result) => {
          if (err) {
            console.log(err);
          } else { 
            res.send("Valores Insertados");
          }
        }
      );
  });
  //Mostrar convenios financieros
   router.get("/showConvenioF", (req, res) => {
    db.query("SELECT * FROM convenio_financiero", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  //Editar convenios financieros
  router.put("/editConvenioF", (req, res) => {
    const id_convF = req.body.id_convF;
    const nombre_convF = req.body.nombre_convF;
    const fecha_convF = req.body.fecha_convF;
  
    db.query(
      "UPDATE convenio_financiero SET nombre_convF = ?, fecha_convF = ?  WHERE id_convF = ?",
      [nombre_convF, fecha_convF, id_convF],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores actualizados tabla convenio_financiero id:", id_convF);
        }
      }
    );
  });
  
  router.delete("/deleteConvenioF/:id_convF", (req, res) => {
    const id_convF = req.params.id_convF;
    db.query(
      "DELETE FROM convenio_financiero WHERE id_convF = ?",
      [id_convF],
        (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log("Valores eliminados de convenio_financiero", id_convF);
        } 
      }
    );
  });

  module.exports = router;