
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
    (convenio_id_conv = '1'),
    (afiliado_rut_afiliado = '10698199-K'), 
    (nombre_convenio = 'COOPEUCH'),
    (comentario_postulacion = '    '),
    (estado_postulacion = 'Pendiente'),
    db.query(
        "INSERT INTO convenio_afiliado (convenio_id_conv, afiliado_rut_afiliado, nombre_convenio, comentario_postulacion, estado_postulacion) VALUES (?, ?, ?, ?, ?)",
        [convenio_id_conv, afiliado_rut_afiliado, nombre_convenio, comentario_postulacion, estado_postulacion],
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
    db.query("SELECT * FROM convenio_afiliado where estado_postulacion = 'pendiente'", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.get("/showMisConvenios", (req, res) => {
    db.query("SELECT * FROM convenio_afiliado", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.put("/AceptarPostulacion", (req, res) => {
    
    const estado_postulacion = 'aceptada';
    const convenio_id_conv = req.body.convenio_id_conv;
  
    db.query(
      "UPDATE convenio_afiliado SET estado_postulacion = ? WHERE convenio_id_conv = ?",
      [estado_postulacion, convenio_id_conv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Valores actualizados tabla convenio_afiliado", convenio_id_conv);
        }
      }
    );
  });

  //Convenio Comercial ----------------------------------------------------------------------------|

  module.exports = router;