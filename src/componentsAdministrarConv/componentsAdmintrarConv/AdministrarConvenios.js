//En este componente está la tabla con info de los convenios de afiliados
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormDialog from "../../componentsPagos/TestAgregar";
import PlanillaMes from "../../documentos/planilla.xlsx";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from "styled-components";


const columns = [
  { field: 'id', headerName: 'Rut empresa', width: 175 },
  { field: 'firstName', headerName: 'Nombre', width: 150 },
  { field: 'Socio', headerName: 'Socio', width: 150 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
  { field: 'teléfono', headerName: 'Teléfono', type: 'number', width: 180 },
  { field: 'cuotas', headerName: 'Cuotas permitidas', type: 'number', width: 207, textAlign: 'center', alignSelf: 'stretch' },
  
  { field: 'action', headerName: 'Acción', width: 145, renderCell: (params: GridCellParams)=> (
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
/*   { id: '76.815.247-2', firstName: 'Optica Viña del Mar', Socio: 'Carlos Donoso', tipo: 'Salud', teléfono: '(32) 271 3543', Precio: '80.000', cuotas: '6', Dirección: 'Calle Valparaíso 436, Viña del Mar', fecha: '08/06/2021'},
  { id: '88.454.234-5', firstName: 'Coopeuch', Socio: 'Esteban González', tipo: 'Crédito',teléfono: '+569 67580912', Precio: '300.000', cuotas: '12', Dirección: 'Villanelo N° 166, Viña del mar.', fecha: '01/06/2021'},
  { id: '90.343.332-k', firstName: 'Bahia Salud', Socio: 'Pilar Muñoz', tipo: 'Hogar', teléfono: '+569 7893 2551', Precio: '60.000', cuotas: '6',  Dirección: 'Arturo Prat 1836, Quintero', fecha: '05/06/2021'},
  { id: '76.815.247-1', firstName: 'Optica Viña del Mar', Socio: 'Carlos Donoso', tipo: 'Salud', teléfono: '(32) 271 3543', Precio: '80.000', cuotas: '6', Dirección: 'Calle Valparaíso 436, Viña del Mar', fecha: '08/06/2021'},
  { id: '88.454.234-7', firstName: 'Coopeuch', Socio: 'Esteban González', tipo: 'Crédito',teléfono: '+569 67580912', Precio: '300.000', cuotas: '12', Dirección: 'Villanelo N° 166, Viña del mar.', fecha: '01/06/2021'}
   */
];

const DldPlanillaBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #7cf1b6;
  white-space: nowrap;
  padding: 10px 25px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #90ee90;
    color: #010606;
  }
`;


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  boton: {
    margin: '30px 600px 10px'
  },
}));

const tableStyle = {
  height: 400,
    width: "100%",
    //padding: "10px",
    margin: '20px 0px 0px',
};
const textStyle = {
  width: '100%',
  margin: '0px 100px 0px'
};

function AdministrarConvenios() {
    const classes = useStyles();
  return (

    <div>
      <div style={textStyle}>
      <br></br>
        <Typography variant="h4" gutterBottom>
            Administrar convenios
        </Typography>
        <br></br>
        {/*  <Typography variant="body1" gutterBottom>
            Test de descripcion tipo body1
  </Typography>*/}
      </div>
      <Box display="center" justifyContent="center" m={0,1}>    
        <div style={tableStyle}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      </Box>


    </div>


  );
  
}
export default AdministrarConvenios;