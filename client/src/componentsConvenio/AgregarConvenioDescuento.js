//Diálogo que aparece al agregar un nuevo pago

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
 
import { useState } from "react";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //-----------------------------------------//
  //Ubicación del botón
  const mystyle = {
    height: 80,
    width: "100%",
    padding: "0px",
    margin: "80px 15px 15px 0px",
  };

   // Estados para datos de tabla convenios
   const [id_conv, setid_conv] = useState(0);
   const [nombre_conv, setnombre_conv] = useState(0);
   const [fecha_conv, setfecha_conv] = useState("");
   const [descripcion_conv, setdescripcion_conv] = useState(0);
   const [tipo_conv,settipo_conv] = useState();
   const [monto_max_compra_d, setnmonto_max_compra_d] = useState(0);
   const [numero_max_usos_d, setnumero_max_usos_d] = useState(0);
 
  const agregarConvenioD = () => {
    setOpen(false);
    Axios.post("http://localhost:3001/createConvenioD", {
      id_conv: id_conv,
      nombre_conv: nombre_conv,
      fecha_conv: fecha_conv,
      descripcion_conv: descripcion_conv,
      tipo_conv: tipo_conv,
      monto_max_compra_d: monto_max_compra_d,
      numero_max_usos_d: numero_max_usos_d,


    }).then(() => {
      console.log("exitoso");
    });
  };

  return (
    <div>
    <div>
      <h1 style={{ marginInline: "4%", marginTop: "3%" }}>
       Convenio Financiero

      </h1>
      <h3 style={{ marginInline: "4%" }}>
      A continuación podrá ingresar convenios financieros al sistema, con el objetivo de que los afiliados puedan postular a estos. En la siguiente tabla se muestran los convenios existentes, tendrá la opción de editarlos.
      </h3>

      <Box
        display="flex"
        justifyContent="right"
        marginBottom="0%"
        marginTop="2%"
        marginX="1%"
      >
        <Button
          style={{ backgroundColor: "#23BB77" }}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          Agregar convenio
        </Button>
      </Box>
    </div>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar convenio de descuento</DialogTitle>
        <DialogContent  style={{height:'425px'}}>
          <DialogContentText>
          Para agregar un nuevo convenio debe completar los siguientes campos:
          </DialogContentText>
          <p> Datos del Convenio </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="nombre_conv"
            label="Nombre convenio"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setnombre_conv(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="fecha_conv"
            variant="outlined"
            size="medium"
            type="date"
            onChange={(e) => {
              setfecha_conv(e.target.value);
            }}
          />

<p />
          <TextField
            style ={{width: '70%'}}
            multiline={true}
            rows={2}
            autofocus
            margin="dense"
            id="descripcion_conv"
            label="Descripción"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setdescripcion_conv(e.target.value);
            }}
          />
          <p />
          
          <p />
          <TextField
            style ={{width: '43%'}}
            autofocus
            margin="dense"
            id="monto_max_compra_d"
            label="Monto máximo de compra"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setnmonto_max_compra_d(e.target.value);
            }}
          />
          <p />

          <p />
          <TextField
            autofocus
            margin="dense"
            id="numero_max_usos_d"
            label="N° máximo de usos"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setnumero_max_usos_d(e.target.value);
            }}
          />
          <p />

          

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={agregarConvenioD} color="primary">
            Agregar Convenio 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
