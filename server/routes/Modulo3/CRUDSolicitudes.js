const {Router} = require("express");
const router = Router();
const { validateRUT, getCheckDigit } = require('validar-rut');

const db = require('../../database')

//--------------------GET------------------------------
//Mostrar los afiliados 
router.get('/getSolicitud', (req, res) => {
    db.query('SELECT * FROM solicitudafiliacion', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

// -------------------------------------------- Delete -------------------------------
// --------------------- Eliminar afiliados ---------------------
router.delete("/eliminarSolicitud/:rut_func", (req, res) => {
  const rut_func = req.params.rut_func;

  db.query("DELETE FROM solicitudafiliacion WHERE rut_func = ?", 
    [rut_func], 
    (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Solicitud eliminado");
      res.send(result);
    }
  });
});

// --------------------------------------------------------- Put -----------------------------------------------
// ------------------ Editar Afiliado -------------------------
router.put("/editSolicitud", (req, res) => {
  const rut_func = req.body.rut_func;
  // const rutAfiliado = req.body.rutAfiliado;
  const nombre_func = req.body.nombre_func;
  const celular = req.body.celular;
  const telefono = req.body.telefono;
  const antiguedad_func = req.body.antiguedad_func;
  const estado_sa = req.body.estado_sa;

  db.query(
    "UPDATE solicitudafiliacion SET nombre_func = ?, celular = ?, telefono = ?, antiguedad_func= ?, estado_sa= ?  WHERE rut_func = ?",
    [nombre_func, celular, telefono, antiguedad_func, estado_sa, rut_func],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Solicitud actualizado");
      }
    }
  );
});


//------------------POST--------------------------------
//Ingresar un afiliado
router.post("/ingresarAfiliado", (req, res) => {
        (rut_afiliado = req.body.rut_afiliado);
        (nombre = req.body.nombre),
        (telefono = req.body.telefono),
        (celular = req.body.celular),
        (antiguedad_afiliado = req.body.antiguedad_afiliado),
        (pass_afi = req.body.pass_afi),
        db.query(
          "INSERT INTO afiliado (rut_afiliado, nombre, telefono, celular, pass_afi, antiguedad_afiliado, estado_afi) VALUES (?, ?, ?, ?, ?, ?, '"+ "asociado" +"')",
          [rut_afiliado, nombre, telefono, celular, pass_afi, antiguedad_afiliado],
          (err, result) => {
              if (err) {
              console.log(err);
            } else {
              // alert('Afiliado ingresado con exito');
              console.log("Afiliado ingresado");
            }
          }
        );
});



module.exports = router;