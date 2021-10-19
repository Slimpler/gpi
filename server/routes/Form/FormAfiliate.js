const {Router} = require("express");
const router = Router();

const db = require('../../database')

//--------------------GET------------------------------
router.get('/formAfiliacion', (req, res) => {
    db.query('SELECT * FROM solicituda', (err, result) => {
        if(!err) {
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

//------------------POST--------------------------------
router.post("/createFormAfiliacion", (req, res) => {
    console.log(req.body);
      (rut_func = req.body.rut_func),
      (nombre_func = req.body.nombre_func),
      (telefono = req.body.telefono),
      (celular = req.body.celular),
      (sueldo_func = req.body.sueldo_func),
      (antiguedad_func = req.body.antiguedad_func),
      db.query(
        "INSERT INTO solicituda (rut_func, nombre_func, telefono, celular, sueldo_func, antiguedad_func) VALUES (?, ?, ?, ?, ?, ?)",
        [rut_func, nombre_func, telefono, celular, sueldo_func, antiguedad_func],
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