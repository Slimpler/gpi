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

export default function FormDialog1() {
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
 
  const agregarConvenioC = () => {
    setOpen(false);
    Axios.post("http://localhost:3001/createConvenioC", {
      id_conv: id_conv,
      nombre_conv: nombre_conv,
      fecha_conv: fecha_conv,
      descripcion_conv: descripcion_conv,
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
              Agregar Convenio Comercial
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar convenio Comercial</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un convenio llenar los siguientes campos:
          </DialogContentText>
          <p> Datos del Convenio </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="nombre_conv"
            label="nombre convenio"
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
            autofocus
            margin="dense"
            id="descripcion_conv"
            label="descripcion"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setdescripcion_conv(e.target.value);
            }}
          />
          <p />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={agregarConvenioC} color="primary">
            Agregar Convenio
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
