//Diálogo que aparece al agregar un nuevo pago

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Axios from "axios";
import MaterialTable from "material-table";

//imports para material table - icons

import Add from "@material-ui/icons/Add";
import Search from "@material-ui/icons/Search";
import ResetSearch from "@material-ui/icons/Clear";
import Filter from "@material-ui/icons/FilterList";
import Export from "@material-ui/icons/SaveAlt";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import NextPage from "@material-ui/icons/ChevronRight";
import PreviousPage from "@material-ui/icons/ChevronLeft";
import SortArrow from "@material-ui/icons/ArrowUpward";

const columns = [
  {
    title: "Nombre",
    field: "nombre_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Descripcion",
    field: "descripcion_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [openConvenio, setOpenConvenio] = useState(false);
  const [listConvenio, setListConvenio] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenConvenio = () => {
    setOpenConvenio(true);
  };

  const handleCloseConvenio = () => {
    setOpenConvenio(false);
  };

  //-----------------------------------------//
  //Ubicación del botón
  const mystyle = {
    height: 80,
    width: "100%",
    padding: "0px",
    margin: "80px 15px 15px 0px",
  };

  // Estados para datos de tabla convenios
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [id_convenio, setId_Convenio] = useState("");

  //estados
  const [estado, setEstado] = useState("");

  const cambioEstado = (event) => {
    setEstado(event.target.value);
  };

  const agregarPagos = () => {
    Axios.post("http://localhost:3001/createIngresoExterno", {
      monto: monto,
      fecha: fecha,
      estado: estado,
    }).then((response) => {
      console.log("exitoso");
      handleClose();
    });
  };

  const getConvenios = async () => {
    await Axios.get("http://localhost:3001/getConvenios")
      .then((response) => {
        setListConvenio(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const agregarIngresosConvenios = () => {
    Axios.post("http://localhost:3001/agregarIngresoConvenio", {
      id_conv: id_convenio,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  return (
    <div>
      <div>
        <h1 style={{ marginInline: "4%", marginTop: "3%" }}>
          Pagos de asociacion
        </h1>
        <h3 style={{ marginInline: "4%" }}>
          En esta tabla se ingresan los pagos hechos a la asociación, distintos a los pagos hechos por afiliados. Por ejemplo: pago de subvención municipal
        </h3>
        <Box
          display="flex"
          justifyContent="right"
          marginTop="3%"
          marginX="3%"
          paddingX="1%"
        >
          <Button
            style={{ backgroundColor: "#23BB77" }}
            variant="contained"
            color="primary"
            onClick={() => {
              handleOpenConvenio();
              getConvenios();
            }}
          >
            Agregar pago a la asociacion
          </Button>
        </Box>
      </div>

      {/* tabla para ver los convenios y seleccionarlos */}
      <Dialog
        open={openConvenio}
        onClose={handleCloseConvenio}
        aria-labelledby="form-dialog-title"
      >
        <MaterialTable
          data={listConvenio}
          title="Convenios"
          columns={columns}
          actions={[
            {
              tooltip: "Agregar pago",
              icon: "Add",
              onClick: () => {{
                  // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                }
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            search: true,
            selection: true,
            headerStyle: {
              backgroundColor: "#009966",
              color: "#FFF",
              fontSize: "14px",
            },
            selectionProps: (rowData) => ({
              onClick: () => {
                setId_Convenio(rowData.id_conv);
              },
              color: "primary",
            }),
          }}
          localization={{
            header: {
              backgroundColor: "#23BB77",
            },
            pagination: {
              labelRowsSelect: "Filas",
              labelDisplayedRows: "{count} de {from}-{to}",
              firstTooltip: "Primera página",
              previousTooltip: "Página anterior",
              nextTooltip: "Próxima página",
              lastTooltip: "Última página",
            },
            toolbar: {
              searchTooltip: "Busqueda",
              searchPlaceholder: "Buscar",
            },
          }}
          icons={{
            Search: Search,
            ResetSearch: ResetSearch,
            Filter: Filter,
            Export: Export,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: NextPage,
            PreviousPage: PreviousPage,
            SortArrow: SortArrow,
            Add: Add,
          }}
        />
        <Button onClick={handleCloseConvenio}>Cerrar</Button>
        <Button
          onClick={() => {
            handleClickOpen();
          }}
        >
          Siguiente
        </Button>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar pago</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un pago a la asociacion debe llenar los siguientes
            campos:
          </DialogContentText>
          <p> Datos del pago </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="monto"
            label="monto"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setMonto(e.target.value);
            }}
          />
          <p />
          <TextField
            autofocus
            margin="dense"
            id="fecha"
            variant="outlined"
            size="medium"
            type="date"
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
          <p />
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Estado de pago
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={estado}
              onChange={cambioEstado}
            >
              <MenuItem value={1}> Pendiente </MenuItem>
              <MenuItem value={2}> Aceptado </MenuItem>
              <MenuItem value={3}> Rechazado </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={(e) => {
              agregarPagos();
              agregarIngresosConvenios();
              alert("Pago Ingresado")
              handleClose();
              handleCloseConvenio();
            }}
            color="primary"
          >
            Agregar pago
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
