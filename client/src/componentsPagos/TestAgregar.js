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
  const [tipo_pago, setTipo_pago] = useState(0);
  const [rut_afiliado, setRut_afiliado] = useState(0);
  const [monto_pago, setMonto_pago] = useState(0);
  const [fecha_pago, setFecha_pago] = useState("");

  //estados
  const [estado_pago, setEstado_pago] = useState("");

  const cambioEstado = (event) => {
    setEstado_pago(event.target.value);
  };

  const cambioTipoPago = (event) => {
    setTipo_pago(event.target.value);
  };

  /*   const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [rutAfiliado, setRutafiliado] = useState(0);
  const [estado, setEstado] = useState("");

  const cambioEstado = (e) => {
    setEstado(e.target.value);
  }; */

  //--------------------------------
  const agregarPagos = () => {
    Axios.post("http://localhost:3001/createPagos", {
      rut_afiliado: rut_afiliado,
      monto_pago: monto_pago,
      fecha_pago: fecha_pago,
      estado_pago: estado_pago,
      tipo_pago: tipo_pago,
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
              agregar pago
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
            Para agregar un pago de un afiliado llenar los siguientes campos:
          </DialogContentText>
          <p> Datos Personales </p>

          <TextField
            autofocus
            margin="dense"
            id="rut_afiliado"
            label="rut_afiliado"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRut_afiliado(e.target.value);
            }}
          />

          <p> Datos de Pago </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="monto_pago"
            label="monto_pago"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setMonto_pago(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="fecha_pago"
            variant="outlined"
            size="medium"
            type="date"
            onChange={(e) => {
              setFecha_pago(e.target.value);
            }}
          />

          <p />

          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Estado de pago
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={estado_pago}
              onChange={cambioEstado}
              width="100%"
            >
              <MenuItem value={1}> Pendiente </MenuItem>
              <MenuItem value={2}> Aceptado </MenuItem>
              <MenuItem value={3}> Rechazado </MenuItem>
            </Select>
          </FormControl>

          <p />

          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Estado de pago
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={tipo_pago}
              onChange={cambioTipoPago}
              width="100%"
            >
              <MenuItem value={1}> pago_convenio </MenuItem>
              <MenuItem value={2}> pago_asociacion </MenuItem>
              <MenuItem value={3}> pago_prestamo </MenuItem>
              <MenuItem value={4}> cuota_incorporacion </MenuItem>
              <MenuItem value={5}> cuota_mensual </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={agregarPagos} color="primary">
            agregar pago
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
