const {Router} = require("express");
const router = Router();
const { validateRUT, getCheckDigit } = require('validar-rut');

const db = require('../../database')

//--------------------GET------------------------------
//Mostrar los afiliados 
router.get('/getAfiliados', (req, res) => {
    db.query('SELECT * FROM afiliado', (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

// -------------------------------------------- Delete -------------------------------
// --------------------- Eliminar afiliados ---------------------
router.delete("/eliminarAfiliado/:rut_afiliado", (req, res) => {
    const rut_afiliado = req.params.rut_afiliado;
  
    db.query("DELETE FROM afiliado WHERE rut_afiliado = ?", 
      [rut_afiliado], 
      (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("afiliado eliminado");
        res.send(result);
      }
    });
  });

  // --------------------------------------------------------- Put -----------------------------------------------
// ------------------ Editar Afiliado -------------------------
router.put("/editAfiliado", (req, res) => {
    const rut_afiliado = req.body.rut_afiliado;
    // const rutAfiliado = req.body.rutAfiliado;
    const nombre = req.body.nombre;
    const celular = req.body.celular;
    const telefono = req.body.telefono;
    const antiguedad_afiliado = req.body.antiguedad_afiliado;
    const estado_afi = req.body.estado_afi;
  
    db.query(
      "UPDATE afiliado SET nombre = ?, celular = ?, telefono = ?, antiguedad_afiliado= ?, estado_afi = ? WHERE rut_afiliado = ?",
      [nombre, celular, telefono, antiguedad_afiliado, estado_afi, rut_afiliado],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Afiliado actualizado");
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