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
  const [deuda_total, setDeuda_total] = useState(0);
  const [remanente_deuda, setRemanente_deuda] = useState(0);
  const [descripcion, setDescripcion] = useState(0);
  const [rut_afiliado, setRut_afiliado] = useState("");
  const [cuotas_totales, setCuotas_totales] = useState(0);
  const [cuotas_pagadas, setCuotas_pagadas] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cambioDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const agregarDeuda = () => {
    Axios.post("http://localhost:3001/createDeudaAfiliado", {
      deuda_total: deuda_total,
      remanente_deuda: remanente_deuda,
      cuotas_totales: cuotas_totales,
      cuotas_pagadas: cuotas_pagadas,
      descripcion: descripcion,
      rut_afiliado: rut_afiliado,
    }).then(() => {
      console.log("Exitoso");

      handleClose();
    });
  };

  return (
    <div>
      <div>
        <h1 style={{ marginInline: "4%", marginTop: "3%" }}>Lista de deudas</h1>
        <h3 style={{ marginInline: "4%" }}>
          En esta tabla se ingresa el monto que debe pagar un afiliado por un tipo de convenio (por ejemplo)
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
            Agregar deuda
          </Button>
        </Box>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar deuda</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar una deuda de afiliado debe llenar los
            siguientes campos:
          </DialogContentText>

          <TextField
            autofocus
            margin="dense"
            id="deuda_total"
            label="deuda total"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setDeuda_total(e.target.value);
              setRemanente_deuda(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="cuotas_totales"
            label="cuotas totales"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setCuotas_totales(e.target.value);
            }}
          />
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
              <MenuItem value={1}> Pago convenio </MenuItem>
              <MenuItem value={2}> Pago prestamo </MenuItem>
              <MenuItem value={3}> Cuota incorporacion </MenuItem>
              <MenuItem value={4}> Cuota membresía </MenuItem>
            </Select>
          </FormControl>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="rut_afiliado"
            label="rut afiliado"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRut_afiliado(e.target.value);
            }}
          />
          <p />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              agregarDeuda();
              handleClose();
            }}
            color="primary"
          >
            Agregar deuda
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
