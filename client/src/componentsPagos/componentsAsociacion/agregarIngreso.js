//Diálogo que aparece al agregar un nuevo pago

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Axios from "axios";

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
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");

  //estados
  const [estado, setEstado] = useState("");

  const cambioEstado = (event) => {
    setEstado(event.target.value);
  };

  const [descripcion, setDescripcion] = useState("");

  const cambioDescripcion = (event) => {
    setDescripcion(event.target.value);
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
    Axios.post("http://localhost:3001/createIngresoExterno", {
      monto: monto,
      fecha: fecha,
      estado: estado,
      descripcion: descripcion,
    }).then(() => {
      console.log("exitoso");
      handleClose();
    });
  };

  return (
    <div>
      <div style={mystyle}>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={5}>
            <Button
              style={{ backgroundColor: "#23BB77" }}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Agregar pago a la asociacion
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar pago</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un pago a la asociacion debe llenar los siguientes
            campos:
          </DialogContentText>
          <p> Datos del pago </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="monto"
            label="monto"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setMonto(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="fecha"
            variant="outlined"
            size="medium"
            type="date"
            onChange={(e) => {
              setFecha(e.target.value);
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
              value={estado}
              onChange={cambioEstado}
            >
              <MenuItem value={1}> Pendiente </MenuItem>
              <MenuItem value={2}> Aceptado </MenuItem>
              <MenuItem value={3}> Rechazado </MenuItem>
            </Select>
          </FormControl>

          <p />

          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Descripcion
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={descripcion}
              onChange={cambioDescripcion}
            >
              <MenuItem value={4}> Subvencion </MenuItem>
              <MenuItem value={5}> Convenio </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={(e) => {
              agregarPagos();
              handleClose();
            }}
            color="primary"
          >
            agregar pago
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
