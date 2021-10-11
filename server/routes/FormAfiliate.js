const {Router} = require("express");
const router = Router();

const db = require('../database')

router.get('/datosFormAfiliado', (req, res) => {
    db.query('SELECT * FROM afiliado', (err, result) => {
        if(!err) {
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.post("/createFormulario", (req, res) => {
    console.log(req.body);
      (rut_afiliado = req.body.rut_afiliado),
      (nombre = req.body.nombre),
      (telefono = req.body.telefono),
      (celular = req.body.celular),
      (sueldo_afiliado = req.body.sueldo_afiliado),
      (antiguedad_afiliado = req.body.antiguedad_afiliado),
      db.query(
        "INSERT INTO afiliado (rut_afiliado, nombre, telefono, celular, sueldo_afiliado, antiguedad_afiliado) VALUES (?, ?, ?, ?, ?, ?)",
        [rut_afiliado, nombre, telefono, celular, sueldo_afiliado, antiguedad_afiliado],
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