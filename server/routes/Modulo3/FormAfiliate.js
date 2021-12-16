const {Router} = require("express");
const router = Router();
const { validateRUT, getCheckDigit } = require('validar-rut');

const db = require('../../database')

//--------------------GET------------------------------
//Mostrar los funcionarios que rellenaron el formulario afiliación
router.get('/formAfiliacion', (req, res) => {
    db.query('SELECT * FROM solicitudafiliacion', (err, result) => {
        if(!err) {
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

//------------------POST--------------------------------
//Enviar datos de los funcionarios que rellenaron el formulario afiliación
router.post("/createFormAfiliacion", (req, res) => {
      (rut_func = req.body.rut_func);
      (digito = req.body.digito);
      result = getCheckDigit(rut_func);
      if(digito === result){
        rut_func = rut_func + '-' + result;
        if (validateRUT(rut_func) === true){
          console.log(req.body);
          (nombre_func = req.body.nombre_func),
          (telefono = req.body.telefono),
          (celular = req.body.celular),
          (antiguedad_func = req.body.antiguedad_func),

          db.query(
            "INSERT INTO solicitudafiliacion (rut_func, nombre_func, telefono, celular, antiguedad_func, estado_sa, rut_dir) VALUES (?, ?, ?, ?, ?, '"+ "Pendiente" +"', '"+ '11518418-0' +"')",
            [rut_func, nombre_func, telefono, celular, antiguedad_func],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send(result);
              }
            }
          );
        }
      }else {
        console.log("RUT INVALIDO");
      }     
  });

module.exports = router;