

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
      (estado = 'Activo'),
      db.query(
        "INSERT INTO convenio (id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d, estado],
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
    db.query("SELECT id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d, estado FROM convenio WHERE tipo_conv = 'Descuento'", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

   //Mostrar convenios de descuento disponibles
  router.get("/showConvenioDisponiblesD", (req, res) => {
    db.query("SELECT id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_d, numero_max_usos_d, estado FROM convenio WHERE tipo_conv = 'Descuento' and estado = 'activo'", (err, result) => {
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
    const descripcion_conv = req.body.descripcion_conv;
    const monto_max_compra_d = req.body.monto_max_compra_d;
    const numero_max_usos_d = req.body.numero_max_usos_d;
    const estado = req.body.estado;

    db.query(
      "UPDATE convenio SET nombre_conv = ?, descripcion_conv = ?, monto_max_compra_d = ?, numero_max_usos_d = ?, estado = ? WHERE id_conv = ?",
      [nombre_conv, descripcion_conv, monto_max_compra_d, numero_max_usos_d, estado, id_conv],
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
      "X ? ",
      [id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log("Valores eliminados de convenio", id_conv);
        }
      }
    );
  });
  //Convenio Descuento ----------------------------------------------------------------------------|
  

  module.exports = router;