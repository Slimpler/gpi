import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Axios from "axios";


export default function FormDialog() {

  const [open, setOpen] = React.useState(false);
  //Estados para ingreso de afiliado
  const url = "http://localhost:3001/ingresarAfiliado"
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [celular, setCelular] = useState("");
  const [pass_afi, setPassAfi] = useState("");
  // const [sueldo_afiliado, setSueldoAfiliado] = useState("");
  const [antiguedad_afiliado, setAntiguedadAfiliado] = useState("");

  const [rut_afiliado, setRutAfiliado] = useState("");
  // const [digito, setDVIngresado] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  //agregar un afiliado al sistema
  const ingresarUnAfiliado = () => {
      Axios.post(url, {
        rut_afiliado: rut_afiliado,
        nombre: nombre,
        telefono: telefono,
        celular: celular,
        pass_afi: pass_afi,
        antiguedad_afiliado: antiguedad_afiliado.substring(0,10).toString(),
      }).then(() => {
        console.log('Afiliado ingresado con exito');
        handleClose();
      });
  };

  return (
    <div>
      <div>
        <h1 style={{ marginInline: "4%", marginTop: "3%" }}>Lista de Afiliados</h1>
        <h3 style={{ marginInline: "4%" }}>
          Administración de afiliados (Ingresar, eliminar, listar)
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
            Agregar Afiliados
          </Button>
        </Box>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar Afiliado</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un afiliado debe ingresar los siguientes
            datos:
          </DialogContentText>

          <TextField
            autofocus
            margin="dense"
            id="rut_afiliado"
            label="rut afiliado"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRutAfiliado(e.target.value);
            }}
          />

          <p />
          <TextField
            autofocus
            margin="dense"
            id="nombre"
            label="Nombre"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="celular"
            label="celular"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setCelular(e.target.value);
            }}
          />
          <p />

          <TextField
            autofocus
            margin="dense"
            id="telefono"
            label="teléfono"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          <p />

          <TextField
            autofocus
            margin="dense"
            id="antiguedad_afiliado"
            label="Antiguedad afiliado"
            variant="outlined"
            type="date"
            size="medium"
            onChange={(e) => {
              setAntiguedadAfiliado(e.target.value.substring(0,10).toString());
            }}
          />
          <p />

          <TextField
          autofocus
          margin="dense"
          id="clave"
          label="Clave de afiliado"
          variant="outlined"
          size="medium"
          onChange={(e) => {
            setPassAfi(e.target.value);
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
              ingresarUnAfiliado();
              alert('Afiliado ingresado con exito');
              handleClose();
              window.location.reload();
            }}
            color="primary"
          >
            Agregar afiliado
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}