//Bonos vistos desde el afiliado
/*------------------------------*/
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { BorderAll } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'Nombre', width: 150 },
  { field: 'lastName', headerName: 'Apellido', width: 150 },
  { field: 'tipoBono', headerName: 'Bono', width: 150},
  { field: 'estado', headreName: 'Estado', width: 150},
  { field: 'montoBono', headerName: 'Monto', type: 'number', width: 150}
];

const rows = [
  { id: '1', firstName: 'José', lastName: 'Coronado', tipoBono: 'Navidad',  estado: 'Disponible', montoBono: '100000'},
  { id: '2', firstName: 'José', lastName: 'Coronado', tipoBono: 'Fiestas Patrias',  estado: 'Disponible', montoBono: '100000'},
  { id: '3', firstName: 'José', lastName: 'Coronado', tipoBono: 'Navidad',  estado: 'Disponible', montoBono: '100000'},
  { id: '4', firstName: 'José', lastName: 'Coronado', tipoBono: 'Fiestas Patrias',  estado: 'Disponible', montoBono: '100000'},
  { id: '5', firstName: 'José', lastName: 'Coronado', tipoBono: 'Navidad',  estado: 'Disponible', montoBono: '100000'},
  { id: '6', firstName: 'José', lastName: 'Coronado', tipoBono: 'Fiestas Patrias',  estado: 'Disponible', montoBono: '100000'},

];

const mystyle = {
  height: 400,
  width: "100%",
  //padding: "10px",
  margin: '20px 0px 0px',
};
const textStyle = {
  width: '100%',
  margin: '0px 100px 0px',
};

function PagosBonos() {
  return (
      <div >
        <div style={textStyle}>
          <Typography variant="h4" gutterBottom>
            Mis Bonos
          </Typography>
          <Typography variant="body1" gutterBottom>
            En esta tabla se pueden ver los bonos que se le han sido asignados con sus respectivos montos y disponibilidad.
          </Typography>
        </div>
        <div >
    <Box display="center" justifyContent="center" m={1} p={1} >     
    <div style={mystyle}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </Box>
    </div>
    </div>
  );
}

export default PagosBonos;

