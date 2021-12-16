//Diálogo que aparece al agregar un nuevo pago
import { makeStyles } from "@material-ui/core/styles";
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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const columns = [
  {
    title: "monto",
    field: "monto",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "estado",
    field: "estado",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "descripcion",
    field: "descripcion",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Rut directiva",
    field: "rut_dir",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
];


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openFour, setOpenFour] = React.useState(false);
  const [openFive, setOpenFive] = React.useState(false);

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

  const handleClickOpenThree = () => {
    setOpenThree(true);
  };

  const handleCloseThree = () => {
    setOpenThree(false);
  };

  const handleClickOpenFour = () => {
    setOpenFour(true);
  };

  const handleCloseFour = () => {
    setOpenFour(false);
  };

  const handleClickOpenFive = () => {
    setOpenFive(true);
  };

  const handleCloseFive = () => {
    setOpenFive(false);

  }

  const styles = makeStyles((theme) => ({
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    iconos: {
      cursor: "pointer",
    },
    inputMaterial: {
      width: "100%",
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: "1%",
      margin: "3%",
      marginBottom: "0",
      marginTop: "0",
    },
  }));

  // Estados para datos de tabla convenios
  const [modalEditar, setModalEditar] = useState(false);
  const [rut_afiliado, setRut_afiliado] = useState("");
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [listAfiliados, setListAfiliados] = useState([]);
  const [rut_dir, setRut_dir] = useState("");
  const [listDirectiva, setListDirectiva] = useState([]);
  const [actualDate, setActualDate] = useState(new Date())
  const [listBonos, setListBonos] = useState([]);
  const [idBono, setIdBono] = useState([]);

  //estados
  const [estado, setEstado] = useState("");

  const [descripcion, setDescripcion] = useState("");

  const cambioEstado = (event) => {
    setEstado(event.target.value);
  };

  const cambioDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  /*   const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [rutAfiliado, setRutafiliado] = useState(0);
  const [estado, setEstado] = useState("");

  const cambioEstado = (e) => {
    setEstado(e.target.value);
  }; */

  //--------------------------------
  const agregarEgreso = () => {
    Axios.post("http://localhost:3001/agregarEgreso", {
      monto: monto,
      fecha: fecha,
      estado: estado,
      descripcion: descripcion,
      rut_dir: rut_dir,
    }).then((result) => {
        console.log(result)
        console.log("Bono agregado exitosamente");
        handleClose();
    })
    .catch((error) => {
      console.log(error);
    });;
  };

  const agregarEgresoAfiliado = (rut_afiliado, monto_egreso) => {
    Axios.post(`http://localhost:3001/agregarEgresoAfiliado/${rut_afiliado}/${monto_egreso}`) 
  }

  const Afiliados = async () => {
    await Axios.get("http://localhost:3001/getRUTAntafiliados")
      .then((response) => {
        console.log(response.data)
        setListAfiliados(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const difference = (date, actualDate) => {  
    const date1utc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const date2utc = Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate());
      var day = 1000*60*60*24;
    return((date2utc - date1utc)/day)/30
  }

  const porFecha = (montoReal, diff) => {
    var aux = 0
    if(diff < 6){
      aux = montoReal*0
      return aux;
    } else 
    if(diff > 6 && diff < 12){
      aux = montoReal/2
      return aux;
    } else 
    if(diff > 12)
      aux = montoReal
      return aux;
  }

  const asignarBonos = async () => {
    var montoReal = monto
    for(const afiliado of listAfiliados){
      var date = new Date(afiliado.antiguedad_afiliado)
      var diff = difference(date, actualDate)
      var montoBono = porFecha(montoReal,diff)
      agregarEgresoAfiliado(afiliado.rut_afiliado,montoBono)
    }
  } 

  const eliminarEgreso = async () => {
    await Axios.delete(`http://localhost:3001/eliminarEgreso`)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const desactivarEgreso = async () => {
    Axios.put("http://localhost:3001/desactivarEgreso", {
      id: idBono,
    })
    .then(() => {
      handleClose();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getDirectiva = async () => {
    await Axios.get("http://localhost:3001/getDirectiva")
    .then((response) => {
      console.log(response.data)
      setListDirectiva(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const comprobarDirectiva = () => {
    var x = false;
    listDirectiva.map((directiva) => {
      if (rut_dir === directiva.rut_dir) {
        x = true;
      }
    });
    
    if (x === false) {
      alert("RUT no existe");
      handleClose();
    }
    return x;
  };


   // Obtener todos los bonos
   const getBonos = async () => {
    await Axios.get("http://localhost:3001/getBonos")
    .then((response) => {
      console.log(response.data)
      setListBonos(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
   // Editar bono
   const actualizarBono = async () => {
    Axios.put("http://localhost:3001/editBono", {
      id: idBono,
      estado: estado,
      rut_dir: rut_dir,
    })
      .then(() => {
        setListBonos(
          listBonos.map((bono) => {
            return bono.id === idBono
              ? {
                  estado: estado,
                  rut_dir: rut_dir
                }
              : bono;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  //tests
  

  return (
    <div>
      <div>
        <h1 style={{ marginInline: "4%", marginTop: "3%" }}>Bonos</h1>
        <h3 style={{ marginInline: "4%" }}>
          Dinero que se asigna desde la asociacion a un afiliado
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
              handleClickOpenThree();
              getBonos();
              getDirectiva();
            }}
          >
            Lista de bonos
          </Button>

          <Button
            style={{ backgroundColor: "#23BB77" }}
            variant="contained"
            color="primary"
            onClick={() => {
              handleClickOpen();
              Afiliados();
              getDirectiva();
          }}
          >
            Agregar bono
          </Button>
        </Box>
      </div>
{/* -------------------------------------------------------- handleclick 1 ------------------------------------------------------ */}  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar bono</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un bono llenar los siguientes campos:
          </DialogContentText>

          <p> Datos del bono </p>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="monto_pago"
            label="monto_bono"
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
            id="fecha_bono"
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
              Descripcion
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={descripcion}
              onChange={cambioDescripcion}
            >
              <MenuItem value={1}> Bono Fiestas Patrias </MenuItem>
              <MenuItem value={2}> Bono Navidad </MenuItem>
            </Select>
          </FormControl>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="rut_directiva"
            label="rut_directiva"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRut_dir(e.target.value);
            }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              agregarEgreso();
              handleClickOpenTwo();
              handleClose();
            }}
            color="primary"
          >
            Agregar bono
          </Button>
        </DialogActions>
      </Dialog>
{/* -------------------------------------------------------- handleclick 2 ------------------------------------------------------ */}
      <Dialog
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Asignar bono</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Desea asignar el bono a todos los afiliados disponibles?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => {
              eliminarEgreso();
              handleCloseTwo();
            }} 
            color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              asignarBonos();
              handleCloseTwo();
              handleClose();
            }}
            color="primary"
          >
            Si
          </Button>
        </DialogActions>
      </Dialog>
{/* -------------------------------------------------------- handleclick 3 ------------------------------------------------------ */}
      <Dialog
        open={openThree}
        onClose={handleCloseThree}
        aria-labelledby="form-dialog-title"
      >
        <MaterialTable
          data={listBonos}
          title="Bonos"
          columns={columns}
          /* actions={[
            {
              tooltip: "Seleccionar bono",
              icon: "Add",
              onClick: () => {
                handleClickOpenFour();
              },
            },
          ]} */
          actions={[
            {
              icon: EditIcon,
              tooltip: "Editar bono",
              onClick: (event, rowData) => {
                setIdBono(rowData.id);
                handleClickOpenFour()
              },
              iconProps: {
                style: { backgroundColor: "#33ACFF" },
              },
            },
            {
              icon: DeleteIcon,
              tooltip: "Eliminar bono",
              onClick: (event, rowData) => {
                setIdBono(rowData.id);
                handleClickOpenFive()
              },
            },
          ]}

          options={{
            actionsColumnIndex: -1,
            search: true,
            headerStyle: {
              backgroundColor: "#23BB77",
              color: "#FFF",
              fontSize: "14px",
            }
          }}
          localization={{
            header: {
              actions: "Acciones",
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
          onClick={() => {
            handleCloseThree();
          }}
        >
          Cerrar
        </Button>
      </Dialog>
{/* -------------------------------------------------------- handleclick 4 ------------------------------------------------------ */}
      <Dialog
        open={openFour}
        onClose={handleCloseFour}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Asignar bono</DialogTitle>
        <DialogActions>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Estado
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select"
              value={estado}
              onChange={cambioEstado}
            >
              <MenuItem value={2}> Aprobado </MenuItem>
              <MenuItem value={3}> Rechazado </MenuItem>
            </Select>
          </FormControl>
          <p />
          <TextField
            autofocus
            margin="dense"
            id="rut_dir"
            label="rut_directiva"
            variant="outlined"
            size="medium"
            onChange={(e) => {
              setRut_dir(e.target.value);
            }}
          />
          <p />
          <Button 
            onClick={() => {
              handleCloseFour();
            }} 
            color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              var y = comprobarDirectiva();
              console.log("aaaaaaa",y);
              if(y === true){
                actualizarBono();
                alert("Bono actualizado")
                handleCloseFour();
                handleCloseThree();
              }
              else {
                handleCloseFour();
              }
            }}
            color="primary"
          >
            Editar
          </Button>
        </DialogActions>
      </Dialog>
{/* ----------------------------------------- handleclick 5 -------------------------------------------------------- */}
      <Dialog
        open={openFive}
        onClose={handleCloseFive}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Eliminar bono</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Desea eliminar el bono?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => {
              handleCloseFive();
            }} 
            color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              desactivarEgreso();
              handleCloseFive();
            }}
            color="primary"
          >
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
