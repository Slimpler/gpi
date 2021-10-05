//Aquí se muestra todo lo que tiene que ver con los ingresos
//de la asociación distintos de los pagos que hacen los afiliados
//Ejemplo: Subvenciones.
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AgregarPago from '../../components/Buttons/Agregar';
import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'nombreIngreso', headerName: 'Nombre', width: 200 },
  { field: 'montoIngreso', headerName: 'Monto', type: 'number', width: 150 },
  { field: 'fechaIngreso', headerName: 'Fecha', width: 150, type: 'date'},
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
  { id: '4', nombreIngreso: 'Subvencion Municipal', montoIngreso: '500000', fechaIngreso: '01/06/2021'},
];
const mystyle = {
  height: 400,
  width: "60%",
  //padding: "10px",
  margin: '0px 20px 0px',
};

const textStyle = {
  width: '100%',
  margin: '0px 100px 0px',
}

function PagosAsociacion() {
  
  return (
      
      <div >
        <div style={textStyle}>
          <Typography variant="h4" gutterBottom>
            Pagos a la asociación
          </Typography>
          <Typography variant="body1" gutterBottom>
            En esta tabla se pueden ver los pagos que llegan a la asociación y que son distintos a los hechos por afiliados (ejemplo: subvenciones).
          </Typography>
        </div>
        
        <div>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <div style={mystyle}>
              <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
          </Box>
        </div>
      </div>
  );
    
      
  
}


export default PagosAsociacion;

