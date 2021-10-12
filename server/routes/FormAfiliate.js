const {Router} = require("express");
const router = Router();

const db = require('../database')

router.get('/datosFormAfiliado', (req, res) => {
    db.query('SELECT * FROM solicitud_afiliados', (err, result) => {
        if(!err) {
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post("/createFormulario", (req, res) => {
    console.log(req.body);
      (rut_func = req.body.rut_func),
      (nombre_func = req.body.nombre_func),
      (telefono = req.body.telefono),
      (celular = req.body.celular),
      (sueldo_func = req.body.sueldo_func),
      (antiguedad_func = req.body.antiguedad_func),
      db.query(
        "INSERT INTO solicitud_afiliados (rut_func, nombre_func, telefono, celular, sueldo_func, antiguedad_func) VALUES (?, ?, ?, ?, ?, ?)",
        [rut_func, nombre_func, telefono, celular, sueldo_func, antiguedad_func],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Valores Insertados");
          }
        }
      );
  });

module.exports = router;