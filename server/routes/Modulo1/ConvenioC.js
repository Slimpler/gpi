

const { Router } = require("express");
const router = Router();

const db = require("../../database");







//Convenio Descuento -----------------------------------------------------------------------------|
//Crear Convenio Descuento
router.post("/createConvenioD", (req, res) => {
    console.log(req.body);
    (id_convD = req.body.id_convD),
      (nombre_convD = req.body.nombre_convD),
      (fecha_convD = req.body.fecha_convD),
      db.query(
        "INSERT INTO convenio_descuento (id_convD, nombre_convD, fecha_convD) VALUES (?, ?, ?)",
        [id_convD, nombre_convD, fecha_convD],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Valores Insertados");
          }
        }
      );
  });
  //Mostrar convenios Descuento
  router.get("/showConvenioD", (req, res) => {
    db.query("SELECT * FROM convenio_descuento", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  //Editar convenios descuento
  router.put("/editConvenioD", (req, res) => {
    const id_convD = req.body.id_convD;
    const nombre_convD = req.body.nombre_convD;
    const fecha_convD = req.body.fecha_convD;
  
    db.query(
      "UPDATE convenio_descuento SET nombre_convD = ?, fecha_convD = ?  WHERE id_convD = ?",
      [nombre_convD, fecha_convD, id_convD],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores actualizados tabla convenio_comerical", id_convD);
        }
      }
    );
  });
  
  router.delete("/deleteConvenioD/:id_convD", (req, res) => {
    const id_convD = req.params.id_convD;
  
    db.query(
      "DELETE FROM convenio_descuento WHERE id_convD = ? ",
      [id_convD],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores eliminados de convenio_descuento", id_convD);
        }
      }
    );
  });
  //Convenio Descuento ----------------------------------------------------------------------------|
  

  module.exports = router;