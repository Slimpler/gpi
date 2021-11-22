
const { Router } = require("express");
const router = Router();
const db = require("../../database");

// ------------------------------- Queries --------------------------------------

//Convenio Financiero ----------------------------------------------------------------------------|
//Crear Convenio Financiero
router.post("/createConvenioF", (req, res) => {
    console.log(req.body);
      (id_conv = req.body.id_conv),
      (nombre_conv = req.body.nombre_conv),
      (fecha_conv = req.body.fecha_conv),
      (descripcion_conv = req.body.descripcion_conv),
      (tipo_conv = 'Financiero'),
      (monto_max_credito_f = req.body.monto_max_credito_f),
      (numero_max_cuotas_f = req.body.numero_max_cuotas_f),
      (estado = 'Activo'),
      db.query(
        "INSERT INTO convenio (id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_credito_f, numero_max_cuotas_f, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_credito_f, numero_max_cuotas_f, estado],
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
    db.query("SELECT * FROM convenio where tipo_conv = 'financiero'", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

    //Mostrar convenios financieros
    router.get("/showConvenioDisponiblesF", (req, res) => {
      db.query("SELECT * FROM convenio where tipo_conv = 'financiero' and estado =  'activo'", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });

  
  //Editar convenios financieros
  router.put("/editConvenioF", (req, res) => {
    const id_conv = req.body.id_conv;
    const nombre_conv = req.body.nombre_conv;
    const descripcion_conv = req.body.descripcion_conv;
    const monto_max_credito_f = req.body.monto_max_credito_f;
    const numero_max_cuotas_f = req.body.numero_max_cuotas_f;
    const estado = req.body.estado;
   
    db.query(
      "UPDATE convenio SET nombre_conv = ?, descripcion_conv = ?, monto_max_credito_f = ?, numero_max_cuotas_f = ?, estado = ?  WHERE id_conv = ?",
      [nombre_conv, descripcion_conv, monto_max_credito_f, numero_max_cuotas_f, estado, id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          
          console.log("Valores actualizados tabla convenio id:", id_conv);
        }
      }
    );
  });
  
  router.delete("/deleteConvenioF/:id_conv", (req, res) => {
    const id_convF = req.params.id_conv;
    db.query(
      "DELETE FROM convenio WHERE id_conv = ?",
      [id_conv],
        (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log("Valores eliminados de convenio_financiero", id_conv);
        } 
      }
    );
  });

  module.exports = router;