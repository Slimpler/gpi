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


// imports para material table
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

import { useState } from "react";
import Axios from "axios";
import MaterialTable from "material-table";



const columns = [
  {
    title: "Deuda total",
    field: "deuda_total",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Remanente deuda",
    field: "remanente_deuda",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Cuotas Totales",
    field: "cuotas_totales",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Cuotas pagadas",
    field: "cuotas_pagadas",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Descripcion",
    field: "descripcion",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
];

export default function FormDialog() {
  
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenTwo = () => {
    setOpenTwo(true);
  };

  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  //Ubicación del botón
  const mystyle = {
    height: 80,
    width: "100%",
    padding: "0px",
    margin: "80px 15px 15px 0px",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // Estados para datos de tabla convenios
  const [rut_afiliado, setRut_afiliado] = useState("");
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [id_deuda, setDeuda] = useState("");
  const [listDeuda, setListDeuda] = useState([]);
  const [listAfiliados, setListAfiliados] = useState([]);

  //estados
  const [estado, setEstado] = useState("");

  const cambioEstado = (event) => {
    setEstado(event.target.value);
  };

  const agregarPagos = () => {
    Axios.post("http://localhost:3001/createIngresoAfiliado", {
      monto: monto,
      fecha: fecha,
      estado: estado,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  const agregarPagosAfiliados = () => {
    Axios.post("http://localhost:3001/createIngresosAfiliados", {
      rut_afiliado: rut_afiliado,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  const agregarIngresosDeudas = () => {
    Axios.post("http://localhost:3001/createIngresosDeudas", {
      id_deuda: id_deuda,
    }).then(() => {
      console.log("Exitoso");
      handleClose();
    });
  };

  const getDeudas = async () => {
    await Axios.get(`http://localhost:3001/getDeudas/${rut_afiliado}`)
      .then((response) => {
        setListDeuda(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarDeuda = async (id) => {
    Axios.put("http://localhost:3001/actualizarDeuda", {
      id_deuda: id_deuda,
      monto: monto,
    })
      .then(() => {
        setListDeuda(
          listDeuda.map((val) => {
            return val.id_deuda === id_deuda
              ? {
                  monto: monto,
                }
              : val;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RutsAfiliados = async () => {
    await Axios.get("http://localhost:3001/GetRUTafiliados")
      .then((response) => {
        setListAfiliados(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const obtenerId = async () => {
    listDeuda.map((deuda) => {
      id_deuda === deuda.id_deuda && setDeuda(id_deuda);
    });
  };

  
  const comprobarRUT = () => {
    listAfiliados.map((afiliado) => {
      if(rut_afiliado !== afiliado.rut_afiliado){
        alert("RUT no existe")
      }
      handleClose();
    });
  };

  return (
    <div>
      <div style={mystyle}>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={5}>
            <Button
              style={{ backgroundColor: "#23BB77" }}
              variant="contained"
              onClick={() =>{
                RutsAfiliados();
                handleClickOpen();
              }}
              color="primary"
              >
              Agregar pago
            </Button>
          </Box>
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar pago</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un pago de un afiliado llenar los siguientes campos:
          </DialogContentText>
          <p> Datos Personales </p>

          <TextField
            autofocus
            margin="dense"
            id="rut_afiliado"
            label="rut_afiliado"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRut_afiliado(e.target.value);
            }}
          />

          <p> Datos de Pago </p>
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
          <p />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              handleClickOpenTwo();
              comprobarRUT();
              getDeudas();
            }}
            color="primary"
          >
            Siguiente
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="form-dialog-title"
      >
        <MaterialTable
          data={listDeuda}
          title="Deudas"
          columns={columns}
          actions={[
            {
              tooltip: "Agregar pago",
              icon: "Add",
              onClick: () => {
                obtenerId();
                agregarPagos();
                agregarPagosAfiliados();
                agregarIngresosDeudas();
                actualizarDeuda();
                alert("Pago agregado");
                handleCloseTwo();
                handleClose();
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
                setDeuda(rowData.id_deuda);
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
        <Button
          onClick={(e) => {
            handleCloseTwo();
            handleClose();
          }}
        >
          Cerrar
        </Button>
      </Dialog>
    </div>
  );
}
