

const { Router } = require("express");
const router = Router();

const db = require("../../database");


//Convenio Descuento -----------------------------------------------------------------------------|
//Crear Convenio Descuento
router.post("/createConvenioD", (req, res) => {
    console.log(req.body);
      (id_conv = req.body.id_conv),
      (nombre_conv = req.body.nombre_conv),
      (fecha_conv = req.body.fecha_conv),
      (descripcion_conv = req.body.descripcion_conv),
      (tipo_conv = 'Descuento'),
      (monto_max_compra_d = req.body.monto_max_compra_d),
      (numero_max_usos_d = req.body.numero_max_usos_d),
      db.query(
        "INSERT INTO convenio (id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d],
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
    db.query("SELECT id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d FROM convenio WHERE tipo_conv = 'Descuento'", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  //Editar convenios descuento
  router.put("/editConvenioD", (req, res) => {
    const id_conv = req.body.id_conv;
    const nombre_conv = req.body.nombre_conv;
    const fecha_conv = req.body.fecha_conv;
  
    db.query(
      "UPDATE convenio SET nombre_conv = ?, fecha_conv = ?  WHERE id_conv = ?",
      [nombre_conv, fecha_conv, id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores actualizados tabla convenio", id_conv);
        }
      }
    );
  });
  
  router.delete("/deleteConvenioD/:id_conv", (req, res) => {
    const id_conv = req.params.id_conv;
    db.query(
      "DELETE FROM convenio WHERE id_conv = ? ",
      [id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores eliminados de convenio", id_conv);
        }
      }
    );
  });
  //Convenio Descuento ----------------------------------------------------------------------------|
  

  module.exports = router;