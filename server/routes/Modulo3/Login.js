const { Router } = require("express");
const router = Router();
const { validateRUT, getCheckDigit } = require('validar-rut');

const db = require("../../database");

router.post("/loginAfiliado", (req, res) => {
    const rut_afiliado = req.body.rut_afiliado;
    const pass_afi = req.body.pass_afi;

    db.query(
        "SELECT * FROM afiliado WHERE rut_afiliado = ? AND pass_afi = ?",
        [rut_afiliado, pass_afi],
        (err, result) => {
            if(err){
                res.send({err: err})
            }
            if(result.length > 0 ){
                res.send(result);
            }else{
                res.send({message: "Rut o clave incorrecta"});
            }
        }
    );
});

router.post("/loginDirectiva", (req, res) => {
    const rut_dir = req.body.rut_dir;
    const pass_dir = req.body.pass_dir;

    db.query(
        "SELECT * FROM directiva WHERE rut_dir = ? AND pass_dir = ?",
        [rut_dir, pass_dir],
        (err, result) => {
            if(err){
                res.send({err: err})
            }
            if(result.length > 0 ){
                res.send(result);
            }else{
                res.send({message: "Rut o clave incorrecta"});
            }
        }
    );
});

module.exports = router;