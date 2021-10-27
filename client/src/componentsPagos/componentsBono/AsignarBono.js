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

  // Estados para datos de tabla convenios

  const [rut_afiliado, setRut_afiliado] = useState(0);
  const [monto_pago, setMonto_pago] = useState(0);
  const [fecha_pago, setFecha_pago] = useState("");

  //estados
  const [estado_pago, setEstado_pago] = useState("");

  const cambioEstado = (event) => {
    setEstado_pago(event.target.value);
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
    Axios.post("http://localhost:3001/createPagoAfiliado", {
      monto_pago: monto_pago,
      fecha_pago: fecha_pago,
      estado_pago: estado_pago,
      descripcion: descripcion,
    }).then(() => {
      console.log("Bono agregado exitosamente");
      handleClose();
    });
  };

  const agregarPagosAfiliados = () => {
    Axios.post("http://localhost:3001/createPagosAfiliados", {
      rut_afiliado: rut_afiliado,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  return (
    <div>
      <div>
        <h1 style={{ marginInline: "4%", marginTop: "3%" }}>Bonos</h1>
        <h3 style={{ marginInline: "4%" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris
        </h3>
        <Box
          display="flex"
          justifyContent="right"
          marginTop="3%"
          marginX="3%"
          paddingX="1%"
        >
          <Button
            style={{ backgroundColor: "#23BB77" }}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Agregar bono
          </Button>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar bono</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un bono a un afiliado llenar los siguientes campos:
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

          <p> Datos del bono </p>
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
              Estado del bono
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={estado_pago}
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
              <MenuItem value={6}> Bono Fiestas Patrias </MenuItem>
              <MenuItem value={7}> Bono navidad </MenuItem>
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
              agregarPagosAfiliados();
              handleClose();
            }}
            color="primary"
          >
            Agregar bono
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
