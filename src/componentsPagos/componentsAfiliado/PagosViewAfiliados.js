//En este componente está la tabla con info de los pagos de afiliados + CRUD; Pertenece al perfil de Directiva.
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AgregarPago from '../../components/Buttons/Agregar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const columns = [
  { field: 'id', headerName: 'RUT', width: 130 },
  { field: 'firstName', headerName: 'Nombre', width: 150 },
  { field: 'lastName', headerName: 'Apellido', width: 150 },
  { field: 'deudas', headerName: 'Deuda Total', type: 'number', width:  180 },
  { field: 'cuotas', headerName: 'Cuotas', type: 'number', width: 150 },
  { field: 'montoCuota', headerName: 'Monto Cuota', type: 'number', width: 180 },
  { field: 'fechaPago', headerName: 'Fecha último pago', width: 210, type: 'date'},
  { field: 'tipo', headerName: 'Tipo', width: 130 }
];
const rows = [
  { id: '19817247-2', firstName: 'Ana', lastName: 'Muñoz', deudas: '25.000', cuotas: '5' , montoCuota: '5.000', fechaPago: '08/06/2021', tipo: 'convenio óptica', },
  { id: '19772624-5', firstName: 'Alejandro', lastName: 'Oliveros', deudas: '100.000', cuotas: '1', montoCuota: '100.000', fechaPago: '01/06/2021', tipo: 'préstamo'},
  { id: '19490110-0', firstName: 'Alejandro', lastName: 'Rudolphy', deudas: '350.000', cuotas: '5', montoCuota: '70.000', fechaPago: '05/06/2021', tipo: 'préstamo'},
];

const mystyle = {
  height: 400,
  width: "80%",
  //padding: "60px",
  margin: '30px 80px 10px',
};
const textStyle = {
  width: '100%',
  margin: '10px 100px 10px',
};

function PagosAfiliados() {
  
  //const classes = useStyles();
  return (
    <div >
        <div style={textStyle}>
          <Typography variant="h4" gutterBottom>
            TEST DE TÍTULO
          </Typography>
          <Typography variant="body1" gutterBottom>
            Test de descripcion tipo body1
          </Typography>
        </div>
        <div >
    <Box display="flex" justifyContent="center" m={1} p={0} >
        <div style={mystyle}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    </Box>
    </div>
    </div>

  );
  
}
export default PagosAfiliados;


