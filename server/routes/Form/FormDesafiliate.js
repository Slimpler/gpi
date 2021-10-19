const { Router } = require("express");
const router = Router();

const db = require("../../database");

//--------------------GET------------------------------
router.get('/formDesafiliacion', (req, res) => {
    db.query('SELECT * FROM solicitudd', (err, result) => {
        if(!err) {
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

//------------------POST--------------------------------
router.post("/createFormDesafiliacion", (req, res) => {
    console.log(req.body);
      (rut_afiliado = req.body.rut_afiliado),
      (nombre = req.body.nombre),
      (telefono = req.body.telefono),
      (celular = req.body.celular),
      (antiguedad_afiliado= req.body.antiguedad_afiliado),
      (motivo= req.body.antiguedad_motivo),
      db.query(
        "INSERT INTO solicitudd (rut_afiliado, nombre, telefono, celular, antiguedad_afiliado, motivo) VALUES (?, ?, ?, ?, ?, ?)",
        [rut_afiliado, nombre, telefono, celular, antiguedad_afiliado, motivo],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
  });

module.exports = router;