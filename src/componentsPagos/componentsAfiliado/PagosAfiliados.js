//En este componente está la tabla con info de los pagos de afiliados + CRUD; Pertenece al perfil de Directiva.
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
import FormDialog from "../../componentsPagos/TestAgregar";
import PlanillaMes from "../../documentos/planilla.xlsx";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from "styled-components";


const columns = [
  { field: 'id', headerName: 'RUT', width: 130 },
  { field: 'firstName', headerName: 'Nombre', width: 150 },
  { field: 'lastName', headerName: 'Apellido', width: 150 },
  { field: 'deudas', headerName: 'Deuda Total', type: 'number', width:  175 },
  { field: 'cuotas', headerName: 'Cuotas', type: 'number', width: 145 },
  { field: 'montoCuota', headerName: 'Monto Cuota', type: 'number', width: 180 },
  { field: 'fechaPago', headerName: 'Fecha último pago', width: 207, type: 'date'},
  { field: 'tipo', headerName: 'Tipo', width: 130 },
  { field: 'action', headerName: 'Accion', width: 145, renderCell: (params: GridCellParams)=> (
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
  { id: '19817247-2', firstName: 'Ana', lastName: 'Muñoz', deudas: '25.000', cuotas: '5' , montoCuota: '5.000', fechaPago: '08/06/2021', tipo: 'convenio óptica', },
  { id: '19772624-5', firstName: 'Alejandro', lastName: 'Oliveros', deudas: '100.000', cuotas: '1', montoCuota: '100.000', fechaPago: '01/06/2021', tipo: 'préstamo'},
  { id: '19490110-0', firstName: 'Alejandro', lastName: 'Rudolphy', deudas: '350.000', cuotas: '5', montoCuota: '70.000', fechaPago: '05/06/2021', tipo: 'préstamo'},
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
    margin: '0px 20px 0px',
};
const textStyle = {
  width: '100%',
  margin: '0px 100px 0px'
};

function PagosAfiliados() {
    const classes = useStyles();
  return (

    <div>
      <div style={textStyle}>
        <Typography variant="h4" gutterBottom>
            TEST DE TÍTULO
          </Typography>
          <Typography variant="body1" gutterBottom>
            Test de descripcion tipo body1
          </Typography>
      </div>
      <Box display="flex" justifyContent="center" m={0,1}>    
        <div style={tableStyle}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      </Box>

      
          <div className={classes.boton}>
          <DldPlanillaBtn href= {PlanillaMes} download="planilla.xlsx"> Descargar Planilla </DldPlanillaBtn>
          </div>


    </div>


  );
  
}
export default PagosAfiliados;


