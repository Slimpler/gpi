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
  height: 100,
  width: "40%",
  //padding: "100px",
  margin: '45px 0px 0px 700px',
};

  return (
    <div>
      <div style={mystyle}>
        <Box display="flex" justifyContent="flex-end" m={1} p={1}>
          <Box p={5}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Agregar Ingreso
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">agregar pago</DialogTitle>
      <DialogContent>          
          <p>Tipo de ingreso</p>            
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
                      <MenuItem value={10}>Subvencion Municipal</MenuItem>
                      <MenuItem value={20}>Convenio 1</MenuItem>
                      <MenuItem value={30}>Convenio 2</MenuItem>
                      <MenuItem value={30}>Convenio 3</MenuItem>
                  </Select>
          </FormControl>
          <p> Monto a ingresar </p>
          <TextField autofocus margin="dense" id="monto_ingreso" label="Monto" variant="outlined" size="medium"/>

        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Cancelar
        </Button>
        <Button onClick={handleClose} color="primary">
            agregar pago
        </Button>
        </DialogActions>
      </Dialog>
        
    </div>
  );
}