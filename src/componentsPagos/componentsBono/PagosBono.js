//En este componente está la tabla con info de los pagos de afiliados.
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { BorderAll } from '@material-ui/icons';
import Box from '@material-ui/core/Box';

const columns = [
  { field: 'id', headerName: 'RUT', width: 150 },
  { field: 'firstName', headerName: 'Nombre', width: 200 },
  { field: 'lastName', headerName: 'Apellido', width: 200 },
];

const rows = [
  { id: '19817247-2', firstName: 'Ana', lastName: 'Muñoz' },
  { id: '19772624-5', firstName: 'Alejandro', lastName: 'Oliveros'},
  { id: '19490110-0', firstName: 'Alejandro', lastName: 'Rudolphy'},
];

const mystyle = {
  height: 400,
  width: "100%",
  //padding: "10px",
  margin: '0px 450px 10px',
};

function PagosBonos() {
  return (
    <Box display="flex" justifyContent="flex-end" m={1} p={0} > 
    <div style={mystyle}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </Box>
  );
}

export default PagosBonos;

