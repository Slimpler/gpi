
const { Router } = require("express");
const router = Router();

const db = require("../../database");

//Convenio Comercial -----------------------------------------------------------------------------|
//Crear Convenio Comercial
router.post("/createConvenioC", (req, res) => {
    console.log(req.body);
    (id_conv = req.body.id_conv),
      (nombre_conv = req.body.nombre_conv),
      (fecha_conv = req.body.fecha_conv),
      (descripcion_conv = req.body.descripcion_conv),
      (tipo_conv = 'Comercial'),
      (monto_max_compra_c = req.body.monto_max_compra_c),
      (numero_max_cuotas_c = req.body.numero_max_cuotas_c),
      db.query(
        "INSERT INTO convenio (id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_c, numero_max_cuotas_c) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_c, numero_max_cuotas_c],
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
    db.query("SELECT * FROM convenio where tipo_conv = 'Comercial'", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  //Editar convenios comercial
  router.put("/editConvenioC", (req, res) => {
    const id_conv = req.body.id_conv;
    const nombre_conv = req.body.nombre_conv;
    const fecha_conv = req.body.fecha_conv;
    const descripcion_conv = req.body.descripcion_conv;
    /* 
    const monto_max_compra_c = req.body.monto_max_compra_c;
    const numero_max_cuotas_c = req.body.numero_max_cuotas_c */
   
    db.query(
      "UPDATE convenio SET nombre_conv = ?, fecha_conv = ?, descripcion_conv = ? WHERE id_conv = ?",
      [nombre_conv, fecha_conv, descripcion_conv, id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores actualizados tabla convenio_comercial", id_conv);
        }
      }
    );
  });
  
  router.delete("/deleteConvenioC/:id_conv", (req, res) => {
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
  //Convenio Comercial ----------------------------------------------------------------------------|

  module.exports = router;