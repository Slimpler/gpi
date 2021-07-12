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
  width: "55%",
  //padding: "10px",
  margin: '0px 20px 0px',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0px 100px 0px',
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'nombreIngreso', headerName: 'Nombre', width: 180 },
  { field: 'montoIngreso', headerName: 'Monto', type: 'number', width: 180 },
  { field: 'fechaIngreso', headerName: 'Fecha', width: 180, type: 'date'},
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
  { id: '1', nombreIngreso: 'Subvencion Municipal', montoIngreso: '500000', fechaIngreso: '01/03/2021'},
  { id: '2', nombreIngreso: 'Subvencion Municipal', montoIngreso: '500000', fechaIngreso: '01/04/2021'},
  { id: '3', nombreIngreso: 'Subvencion Municipal', montoIngreso: '500000', fechaIngreso: '01/05/2021'},
  { id: '4', nombreIngreso: 'Subvencion Municipal', montoIngreso: '500000', fechaIngreso: '01/08/2021'},
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
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <div style={mystyle}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </Box>
      </div>
  );
  
}


export default PagosBono;

