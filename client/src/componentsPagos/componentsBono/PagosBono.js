//Aquí se muestran los pagos de bonos visto desde la directiva

import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AgregarPago from '../../components/Buttons/Agregar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const mystyle = {
  height: 400,
  width: "100%",
  //padding: "10px",
  margin: '20px 0px 0px',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0px 100px 0px',
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'rut', headerName: 'RUT', width: 180 },
  { field: 'firstName', headerName: 'Nombre', width: 150 },
  { field: 'lastName', headerName: 'Fecha', width: 180, type: 'date'},
  { field: 'action', headerName: 'Accion', width: 180, renderCell: (params: GridCellParams)=> (
    <strong>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </strong>
  )}
];

const rows = [
  { id: '1', rut: '12345678-9', firstName: 'José', lastName: 'Coronado'},
  { id: '2', rut: '14523698-7', firstName: 'Julia', lastName: 'Guzman'},
  { id: '3', rut: '11549632-1', firstName: 'Luisa', lastName: 'Perez'},
  { id: '4', rut: '9654039-4', firstName: 'Jorge', lastName: 'González'},
];


function PagosBono() {
    const classes = useStyles();
    return (
      
      <div>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Pagos y Asignación de Bonos
        </Typography>
        <Typography variant="body1" gutterBottom>
        En esta tabla se pueden asignar distintos bonos a los afiliados.
      </Typography>
      </div>
        <Box display="center" justifyContent="center" m={1} p={1}>
          <div style={mystyle}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </Box>
      </div>
  );
  
}


export default PagosBono;

