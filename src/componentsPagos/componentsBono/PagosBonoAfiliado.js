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
  { field: 'estado', headreName: 'Estado', width: 200},
  { field: 'montoBono', headerName: 'Monto', type: 'number', width: 150}
];

const rows = [
  { id: '1', firstName: 'Ana', lastName: 'Muñoz', tipoBono: 'Navidad',  estado: 'Disponible', montoBono: '100000'},
  { id: '2', firstName: 'Ana', lastName: 'Muñoz', tipoBono: 'Fiestas Patrias',  estado: 'Disponible', montoBono: '100000'},
  { id: '3', firstName: 'Ana', lastName: 'Muñoz', tipoBono: 'Navidad',  estado: 'Disponible', montoBono: '100000'},
  { id: '4', firstName: 'Ana', lastName: 'Muñoz', tipoBono: 'Fiestas Patrias',  estado: 'Disponible', montoBono: '100000'},
  { id: '5', firstName: 'Ana', lastName: 'Muñoz', tipoBono: 'Navidad',  estado: 'Disponible', montoBono: '100000'},
  { id: '6', firstName: 'Ana', lastName: 'Muñoz', tipoBono: 'Fiestas Patrias',  estado: 'Disponible', montoBono: '100000'},

];

const mystyle = {
  height: 400,
  width: "100%",
  //padding: "10px",
  margin: '0px 250px 10px',
};
const textStyle = {
  width: '100%',
  margin: '10px 100px 10px',
};

function PagosBonos() {
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

export default PagosBonos;

