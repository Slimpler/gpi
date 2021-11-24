const { Router } = require("express");
const router = Router();

const { validateRUT, getCheckDigit, generateRandomRUT } = require('validar-rut');

const db = require("../../database");

//--------------------GET------------------------------
//Mostrar los datos del afiliado que relleno el formulario desafiliaciónn
// router.get('/formDesafiliacion', (req, res) => {
//     db.query('SELECT * FROM solicitudd', (err, result) => {
//         if(!err) {
//             res.json(result);
//         }else{
//             console.log(err);
//         }
//     });
// });

//Mostrar datos del afiliado en el formulario
router.get("/datosAfiliadoForm", (req,res) => {
  db.query('SELECT rut_afiliado, nombre, telefono, celular, antiguedad_afiliado FROM afiliado WHERE rut_afiliado = "9851342-6"', (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//------------------POST--------------------------------
//Enviar los datos del afiliado que relleno el formulario desafiliación
router.post("/createFormDesafiliacion", (req, res) => {
    console.log(req.body);
      (rut_afiliado = req.body.rut_afiliado),
      (nombre = req.body.nombre),
      (telefono = req.body.telefono),
      (celular = req.body.celular),
      (antiguedad_afiliado= req.body.antiguedad_afiliado),
      (motivo= req.body.antiguedad_motivo),
      db.query(
        "INSERT INTO solicitudd (rut_afiliado, nombre, telefono, celular, antiguedad_afiliado, motivo) VALUES ('9851342-6', 'Francisco Javier Benavides Collao', '320333333', '903333333', '2011-09-13', ?)",
        [rut_afiliado, nombre, telefono, celular, antiguedad_afiliado,motivo],
        (err, result) => {
          if (err) {
            console.log("DATOS INCORRECTOS");
          } else {
            res.send(result);
          }
        }
      );
  });

module.exports = router;