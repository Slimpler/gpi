const { Router } = require("express");
const router = Router();

const db = require("../../database");

// ------------------------------------------- Post ----------------------------------------

// ----------------- Ingresar bono -------------------------

// ? FALTA UNA QUERY?

// ---------------- Mostrar bonos -------------------------------
router.get("/showBonosAfiliados", (req, res) => {
  db.query(
    "SELECT p.id_pago, pa.rut_afiliado, p.tipo_pago, p.monto_pago, p.fecha_pago, p.estado_pago, p.tipo_pago, p.descripcion FROM pagos p JOIN pagos_afiliados pa on p.id_pago = pa.id_pago where descripcion = 'Bono Fiestas Patrias' or descripcion = 'Bono navidad'",
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
