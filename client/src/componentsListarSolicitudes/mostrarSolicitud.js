import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Modal, TextField, Button } from "@material-ui/core";
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
    title: "Rut Funcionario",
    field: "rut_func",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Nombre",
    field: "nombre_func",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Celular",
    field: "celular",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Teléfono",
    field: "telefono",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Antiguedad",
    field: "antiguedad_func",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Estado",
    field: "estado_sa",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
];

const useStyles = makeStyles((theme) => ({
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

function Solicitud() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  
  const [listSolicitud, setListSolicitud] = useState([]);
  const [nombre_func, setNombre] = useState("");
  
  const [solicitud, setSolicitud] = useState("");
  const [celular, setCelular] = useState("");
  const [telefono, setTelefono] = useState("");
  const [antiguedad_func, setAntiguedadFunc] = useState("");
  const [estado_sa, setEstadoFunc] = useState("");
  // const [rutAfiliado, setRutAfiliado] = useState("");

  const [solicitudSelect, setSolicitudSelect] = useState({
    rut_func: "",
    nombre_func: "",
    celular: "",
    telefono: "",
    antiguedad_func: "",
    estado_sa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSolicitudSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getSolicitud = async () => {
    await Axios.get("http://localhost:3001/getSolicitud")
      .then((response) => {
        setListSolicitud(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarSolicitud = async (id) => {
    Axios.put("http://localhost:3001/editSolicitud", {
      rut_func: solicitudSelect.rut_func,
      nombre_func: solicitudSelect.nombre_func,
      celular: solicitudSelect.celular,
      telefono: solicitudSelect.telefono,
      antiguedad_func: solicitudSelect.antiguedad_func.substring(0,10).toString(),
      estado_sa: solicitudSelect.estado_sa,
    })
      .then(() => {
        setListSolicitud(
          listSolicitud.map((val) => {
            return val.rut_func === solicitudSelect.rut_func
              ? {
                  // rutAfiliado: rutAfiliado,
                  celular: solicitudSelect.celular,
                  nombre_func: solicitudSelect.nombre_func,
                  telefono: solicitudSelect.telefono,
                  antiguedad_func: solicitudSelect.antiguedad_func.substring(0,10).toString(),
                  estado_sa: solicitudSelect.estado_sa,
                }
              : val;
          })
        );
        OCModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarSolicitud = async () => {
    await Axios.delete(`http://localhost:3001/eliminarSolicitud/${solicitud}`)
      .then((response) => {
        setListSolicitud(
          listSolicitud.filter((val) => {
            return val.rut_func !== solicitud;
          })
        );
        OCModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectSolicitud = (rut_func, caso) => {
    setSolicitudSelect(rut_func);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    getSolicitud();
  }, []);

  //Interfaz de modal editar
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Estado</h3>
      <h5>Estados: Pendiente, Rechazado, Revision</h5>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado Solicitud"
        name="estado_sa"
        onChange={handleChange}
        value={solicitudSelect && solicitudSelect.estado_sa}
        
      />
      <h5>Datos no modificables</h5>
      <TextField
        className={styles.inputMaterial}
        label="Rut Funcionario"
        name="rut_func"
        onChange={handleChange}
        value={solicitudSelect && solicitudSelect.rut_func}
        inputProps={
          {readOnly:true, }
        }
      />
      
      <TextField
        className={styles.inputMaterial}
        name="nombre_func"
        label="Nombre"
        onChange={handleChange}
        value={solicitudSelect && solicitudSelect.nombre_func}
        inputProps={
          {readOnly:true, }
        }
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Celular"
        name="celular"
        onChange={handleChange}
        value={solicitudSelect && solicitudSelect.celular}
        inputProps={
          {readOnly:true, }
        }
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Teléfono"
        name="telefono"
        onChange={handleChange}
        value={solicitudSelect && solicitudSelect.telefono}
        inputProps={
          {readOnly:true, }
        }
      />
      <TextField
        className={styles.inputMaterial}
        label="Antiguedad"
        name="antiguedad_func"
        onChange={handleChange}
        type="date"
        value={solicitudSelect && solicitudSelect.antiguedad_func.substring(0,10).toString()}
        inputProps={
          {readOnly:true, }
        }
      />
      <div align="right">
        <Button
          color="primary"
          onClick={() => { 
            actualizarSolicitud(); 
            alert("Afiliado actualizado")
            OCModalEditar();
            getSolicitud();
          }
        }
        >
          Editar
        </Button>
        <Button onClick={() => OCModalEditar()}> Cancelar </Button>
      </div>
    </div>
  );

  //interfaz de model eliminar
  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        ¿Estas seguro que quieres eliminar al afiliado?
      </p>
      <div align="right">
        <Button color="secondary" 
        onClick={() => { 
          eliminarSolicitud();
          alert("Afiliado eliminado")
        }}>
          Sí
        </Button>
        <Button onClick={() => OCModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de Solicitudes"
        data={listSolicitud}
        columns={columns}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Editar Solicitud",
            onClick: (event, rowData) => {
              getSolicitud(rowData.rut_func);
              // setRutAfiliado(rowData.rutAfiliado);
              setNombre(rowData.nombre_func);
              setCelular(rowData.celular);
              setTelefono(rowData.telefono);
              setAntiguedadFunc(rowData.antiguedad_func.substring(0,10).toString());
              setEstadoFunc(rowData.estado_sa);
              SelectSolicitud(rowData, "Editar")
            },
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Eliminar Solicitud",
            onClick: (event, rowData) => {
              getSolicitud(rowData.rut_func);
              setSolicitud(rowData.rut_func);
              SelectSolicitud(rowData, "Eliminar")
          },
          iconProps: {
            style: { backgroundColor: "#33ACFF" },
          },
        },
        ]}
        options={{
          actionsColumnIndex: -1,
          search: true,
          exportButton: true,
          headerStyle: {
            backgroundColor: "#009966",
            color: "#FFF",
            fontSize: "14px",
          },
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
            // exportTitle: "Exportar",
            // exportName: "Exportar a CSV",
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
        }}
      />

      <Modal open={modalEditar} onClose={OCModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={OCModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>
  );
}
export default Solicitud;
