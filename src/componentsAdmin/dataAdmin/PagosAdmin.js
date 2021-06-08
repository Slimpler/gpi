//En este componente está la tabla con info de los pagos de afiliados.
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AgregarPago from '../../components/Buttons/Agregar';
import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const columns = [
  { field: 'id', headerName: 'RUT', width: 70 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  { field: 'deudas', headerName: 'Deuda Total', type: 'number', width:  70},
  { field: 'cuotas', headerName: 'Cuotas', type: 'number', width: 70 },
  { field: 'montoCuota', headerName: 'Monto Cuota', type: 'number', width: 130 },
  { field: 'fechaPago', headerName: 'Fecha último pago', width: 130 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
];

const rows = [
  { id: '19817247-2', firstName: 'Ana', lastName: 'Muñoz', deudas: '25.000', cuotas: '5' , montoCuota: '5.000', fechaPago: '08/06/2021', tipo: 'convenio óptica', },
  { id: '19772624-5', firstName: 'Alejandro', lastName: 'Oliveros', deudas: '100.000', cuotas: '1', montoCuota: '100.000', fechaPago: '01/06/2021', tipo: 'préstamo'},
  { id: '19490110-0', firstName: 'Alejandro', lastName: 'Rudolphy', deudas: '350.000', cuotas: '5', montoCuota: '70.000', fechaPago: '05/06/2021', tipo: 'préstamo'},
];

function PagosAdmin() {
  
  const classes = useStyles();
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      <Button variant = "contained"
     color = "primary"
     onClick={() => setButtonPopup(true)}> 
     Agregar</Button>
    <AgregarPago trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h3>Aqui va el formulario</h3>
    </AgregarPago>

    <ColorButton variant = "contained"
    color = "primary">
    Actualizar </ColorButton>

    <Button variant = "contained"
    color = "secondary">
    Eliminar </Button>
    </div>
  );
}



export default PagosAdmin;

