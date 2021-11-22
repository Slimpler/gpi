
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
      (estado = 'Activo')
      db.query(
        "INSERT INTO convenio (id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_c, numero_max_cuotas_c, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [id_conv, nombre_conv, fecha_conv, descripcion_conv, tipo_conv, monto_max_compra_c, numero_max_cuotas_c, estado],
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

  //Mostrar convenios comerciales disponibles
  router.get("/showConvenioDisponiblesC", (req, res) => {
    db.query("SELECT * FROM convenio where tipo_conv = 'Comercial' and estado = 'activo'", (err, result) => {
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
    const descripcion_conv = req.body.descripcion_conv;
    const monto_max_compra_c = req.body.monto_max_compra_c;
    const numero_max_cuotas_c = req.body.numero_max_cuotas_c;
    const estado = req.body.estado; 
   
    db.query(
      "UPDATE convenio SET nombre_conv = ?, descripcion_conv = ?, monto_max_compra_c = ?, numero_max_cuotas_c = ?, estado = ? WHERE id_conv = ?",
      [nombre_conv, descripcion_conv, monto_max_compra_c, numero_max_cuotas_c, estado, id_conv],
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
          res.send(result);
          console.log("Valores eliminados de convenio", id_conv);
        }
      }
    );
  });

  router.post("/createPostulacion", (req, res) => {
    console.log(req.body);
    (afiliado_rut_afiliado = '19771819-8'), 
    (convenio_id_conv = '8'),
    (nombre_convenio = 'convenio 1'),
    (comentario_postulacion = '    '),
    db.query(
        "INSERT INTO convenio_afiliado (afiliado_rut_afiliado, convenio_id_conv, nombre_convenio, comentario_postulacion) VALUES (?, ?, ?, ?)",
        [afiliado_rut_afiliado, convenio_id_conv, nombre_convenio, comentario_postulacion],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Valores Insertados");
          }
        }
      );
  });

  router.get("/showPostulaciones", (req, res) => {
    db.query("SELECT * FROM convenio_afiliado", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  //Convenio Comercial ----------------------------------------------------------------------------|

  module.exports = router;