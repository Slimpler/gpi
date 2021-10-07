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
  const [id_convenio, setId_convenio] = useState(0);
  const [nombre_convenio, setNombre_convenio] = useState(0);
  const [fecha_ingreso, setFecha_ingreso] = useState("");

  //estados
/*   const [estado_pago, setEstado_pago] = useState("");

  const cambioEstado = (event) => {
    setEstado_pago(event.target.value);
  }; */

  /*   const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [rutAfiliado, setRutafiliado] = useState(0);
  const [estado, setEstado] = useState("");

  const cambioEstado = (e) => {
    setEstado(e.target.value);
  }; */

  //--------------------------------
  const agregarConvenio = () => {
    Axios.post("http://localhost:3001/createConvenio", {
      id_convenio: id_convenio,
      nombre_convenio: nombre_convenio,
      fecha_ingreso: fecha_ingreso,
    }).then(() => {
      console.log("exitoso");
    });
  };

  return (
    <div>
      <div style={mystyle}>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Agregar Convenio
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">agregar pago</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un convenio llenar los siguientes campos:
          </DialogContentText>
          <p> Datos del Convenio </p>

          <TextField
            autofocus
            margin="dense"
            id="id"
            label="id convenio"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setId_convenio(e.target.value);
            }}
          />

          <p />
          <TextField
            autofocus
            margin="dense"
            id="nombre_convenio_descuento"
            label="nombre convenio descuento"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setNombre_convenio(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="fecha_ingreso"
            variant="outlined"
            size="medium"
            type="date"
            onChange={(e) => {
              setFecha_ingreso(e.target.value);
            }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={agregarConvenio} color="primary">
            Agregar Convenio
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
