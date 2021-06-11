//Diálogo que aparece al agregar un nuevo pago

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


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
//Constantes del drop-down con los tipos de pagos que se puede ingresar
  const classes = useStyles();
  const [tipo, setTipo] = React.useState('');
  
  const handleChange = (event) => {
    setTipo(event.target.value);
  };
//-----------------------------------------//
//Ubicación del botón
const mystyle = {
  height: 500,
  width: "40%",
  padding: "100px",
  margin: '0em',
};

  return (
    <div>
      <div style={{width: '75%'}}>
        <Box display="flex" justifyContent="flex-end" m={0.5} p={5}>
          <Box p={5}>
            <Button variant="contained" color="primary" onClick={handleClickOpen} placement="right-start">
                Agregar
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Agregar Pago</DialogTitle>
      <DialogContent>
          <DialogContentText>
              Para agregar un pago de un afiliado llenar los siguientes campos:
          </DialogContentText>
          <p> Datos personales </p>
          <TextField autofocus margin="dense" id="rut" label="Rut" variant="outlined" size="medium"/>
          <p>  </p>
          <TextField autofocus margin="dense" id="rut" label="Nombre" variant="outlined" size="medium"/>
          <TextField autofocus margin="dense" id="rut" label="Apellido" variant="outlined" size="medium"/>
          
          <p> Datos del pago</p>            
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                  <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={tipo}
                  onChange={handleChange}
                  label="tipo"
                  width="100%"
                  >
                      <MenuItem value="">
                          <em> Seleccionar </em>
                      </MenuItem>
                      <MenuItem value={10}>Cuota Membresía</MenuItem>
                      <MenuItem value={20}>Cuota Gremial</MenuItem>
                      <MenuItem value={30}>Convenio Óptica</MenuItem>
                      <MenuItem value={30}>Convenio Caja Los Andes</MenuItem>
                  </Select>
          </FormControl>
          <p> </p>
          <TextField autofocus margin="dense" id="rut" label="Cuotas" variant="outlined" size="small" />
          <TextField autofocus margin="dense" id="rut" label="Monto de la Cuota" variant="outlined" size="medium" />

        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Cancelar
        </Button>
        <Button onClick={handleClose} color="primary">
            Agregar pago
        </Button>
        </DialogActions>
      </Dialog>
        
    </div>
  );
}