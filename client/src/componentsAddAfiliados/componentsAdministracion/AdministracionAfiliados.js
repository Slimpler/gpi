// import * as React from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import AgregarPago from "../../components/Buttons/Agregar";
// import { useState } from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import { orange, purple } from "@material-ui/core/colors";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import FormDialog from "../TestAgregar";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   fab: {
//     margin: theme.spacing(2),
//   },
// }));
// const columns = [
//   { field: "id", headerName: "RUT", width: 130 },
//   { field: "firstName", headerName: "Nombre", width: 150, background: "black" },
//   { field: "lastName", headerName: "Apellido", width: 150 },
//   { field: "Telefono", headerName: "Teléfono", type: "number", width: 155 },
//   { field: "Direccion", headerName: "Dirección", width: 160 },
//   { field: "CorreoElectronico", headerName: "Correo Electrónico", width: 210 },
//   {
//     field: "Departamento",
//     headerName: "Departamento en la Municipalidad",
//     width: 300,
//   },
//   { field: "Contrato", headerName: "Tipo De Contrato", width: 200 },
//   {
//     field: "action",
//     headerName: "Acción",
//     width: 150,
//     renderCell: (params: GridCellParams) => (
//       <strong>
//         <IconButton aria-label="delete">
//           <DeleteIcon />
//         </IconButton>
//         <IconButton aria-label="edit">
//           <EditIcon />
//         </IconButton>
//       </strong>
//     ),
//   },
// ];
// const rows = [
//   {
//     id: "19614333-2",
//     firstName: "Miguel",
//     lastName: "Herrera",
//     Telefono: "2737540",
//     Direccion: "Los Alamos #359",
//     CorreoElectronico: "Miguel_he@hotmail.com",
//     Departamento: "Tesoreria",
//     Contrato: "Codigo",
//   },
//   {
//     id: "14576623-5",
//     firstName: "Francisca",
//     lastName: "Yañez",
//     Telefono: "2737540",
//     Direccion: "Las Azucenas #890",
//     CorreoElectronico: "Francisca_my@hotmail.com",
//     Departamento: "Aseo",
//     Contrato: "Contrato",
//   },
// ];

// const mystyle = {
//   height: 400,
//   width: "60%",
//   margin: "10px",
// };

// function AdministracionAfiliados() {
//   return (
//     <div style={{ paddingTop: "10%" }}>
//       <h1
//         style={{
//           paddingLeft: "20%",
//           fontSize: "30px",
//           fontFamily: "'Roboto', sans-serif",
//         }}
//       >
//         Lista de Afiliados
//       </h1>
//       <Box display="flex" justifyContent="center" m={1} p={1}>
//         <div style={mystyle}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//           />
//         </div>
//       </Box>
//       <Box>
//         <div style={{ justifyContent: "center", display: "flex" }}>
//           <FormDialog />
//         </div>
//       </Box>
//     </div>
//   );
// }
// export default AdministracionAfiliados;
