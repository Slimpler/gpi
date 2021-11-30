
const { Router } = require("express");
const router = Router();
const { validateRUT, getCheckDigit } = require('validar-rut');

const db = require("../../database");



router.post("/loginAfiliado", (req, res) => {
    const { rut_afiliado, pass_afi } = req.body
	const values = [rut_afiliado, pass_afi]
    
  
    db.query(
        "SELECT * FROM afiliado where rut_afiliado = ? and pass_afi = ?",
        values,
        (err, result) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if (result.length > 0) {
                    res.status(200).send(result[0])
                } else {
                    res.status(400).send('Usuario no existe');
                    
                    
                }
            }
        }
    );
});

router.get('/', (req, res)=>{
    if(req.session.loggedin){
        res.render('perfil',{
            login:true,
            name: req.session.name
        });
    }else {
        res.render('perfil', {
            login: false,
            name: 'Debe iniciar sesión'
        })
    }
})



module.exports = router;