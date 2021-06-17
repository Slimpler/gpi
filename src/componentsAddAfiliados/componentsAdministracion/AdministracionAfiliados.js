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

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  fab: {
    margin: theme.spacing(2)
  },
}));
const columns = [
  { field: 'id', headerName: 'RUT', width: 130 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  { field: 'Telefono', headerName: 'Telefono', type: 'number', width:  140 },
  { field: 'Direccion', headerName: 'Direccion', width: 130 },
  { field: 'CorreoElectronico', headerName: 'Correo Electronico', width: 170 },
  { field: 'Departamento', headerName: 'Departamento En La Municipalidad', width: 130},
  { field: 'Contrato', headerName: 'Tipo De Contrato', width: 130 },
  { field: 'action', headerName: 'Accion', width: 120, renderCell: (params: GridCellParams)=> (
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
  { id: '19614333-2', firstName: 'Miguel', lastName: 'Herrera', Telefono: '2737540', Direccion: 'Los Alamos #359' , CorreoElectronico: 'Miguel_he@hotmail.com', Departamento: 'Tesoreria', Contrato: 'Codigo', },
  { id: '14576623-5', firstName: 'Francisca', lastName: 'Yañez', Telefono: '2737540', Direccion: 'Las Azucenas #890', CorreoElectronico: 'Francisca_my@hotmail.com', Departamento: 'Aseo', Contrato: 'Contrato'},
];

const mystyle = {
  height: 400,
  width: "90%",
  padding: "10px",
  margin: '0.5em',
};


function AdministracionAfiliados() {
  
  //const classes = useStyles();
  return (
  <div style={mystyle}>
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  </div>
  );
  
}
export default AdministracionAfiliados;