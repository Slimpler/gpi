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
    title: "Rut Afiliado",
    field: "rut_afiliado",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Nombre",
    field: "nombre",
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
    field: "antiguedad_afiliado",
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

function Afiliados() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [listAfiliado, setListAfiliado] = useState([]);
  const [nombre, setNombre] = useState("");
  const [afiliado, setAfiliado] = useState("");
  const [celular, setCelular] = useState("");
  const [telefono, setTelefono] = useState("");
  const [antiguedad_afiliado, setAntiguedadAfiliado] = useState("");
  // const [rutAfiliado, setRutAfiliado] = useState("");

  const [afiliadoSelect, setAfiliadoSelect] = useState({
    rut_afiliado: "",
    nombre: "",
    celular: "",
    telefono: "",
    antiguedad_afiliado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAfiliadoSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getAfiliados = async () => {
    await Axios.get("http://localhost:3001/getAfiliados")
      .then((response) => {
        setListAfiliado(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarAfiliado = async (id) => {
    Axios.put("http://localhost:3001/editAfiliado", {
      rut_afiliado: afiliadoSelect.rut_afiliado,
      // rutAfiliado: rutAfiliado,
      nombre: afiliadoSelect.nombre,
      celular: afiliadoSelect.celular,
      telefono: afiliadoSelect.telefono,
      antiguedad_afiliado: afiliadoSelect.antiguedad_afiliado.substring(0,10).toString(),
    })
      .then(() => {
        setListAfiliado(
          listAfiliado.map((val) => {
            return val.rut_afiliado === afiliadoSelect.rut_afiliado
              ? {
                  // rutAfiliado: rutAfiliado,
                  celular: afiliadoSelect.celular,
                  nombre: afiliadoSelect.nombre,
                  telefono: afiliadoSelect.telefono,
                  antiguedad_afiliado: afiliadoSelect.antiguedad_afiliado.substring(0,10).toString(),
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

  const eliminarAfiliado = async () => {
    await Axios.delete(`http://localhost:3001/eliminarAfiliado/${afiliado}`)
      .then((response) => {
        setListAfiliado(
          listAfiliado.filter((val) => {
            return val.rut_afiliado !== afiliado;
          })
        );
        OCModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectAfiliado = (rut_afiliado, caso) => {
    setAfiliadoSelect(rut_afiliado);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    getAfiliados();
  }, []);

  //Interfaz de modal editar
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Afiliado</h3>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Rut Afiliado"
        name="rut_afiliado"
        onChange={handleChange}
        value={afiliadoSelect && afiliadoSelect.rut_afiliado }
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        name="nombre"
        label="Nombre"
        onChange={handleChange}
        value={afiliadoSelect && afiliadoSelect.nombre}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Celular"
        name="celular"
        onChange={handleChange}
        value={afiliadoSelect && afiliadoSelect.celular}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Teléfono"
        name="telefono"
        onChange={handleChange}
        value={afiliadoSelect && afiliadoSelect.telefono}
      />
      <TextField
        className={styles.inputMaterial}
        label="Antiguedad"
        name="antiguedad_afiliado"
        onChange={handleChange}
        type="date"
        value={afiliadoSelect && afiliadoSelect.antiguedad_afiliado.substring(0,10).toString()}
      />
      <div align="right">
        <Button
          color="primary"
          onClick={() => { 
            actualizarAfiliado(); 
            alert("Afiliado actualizado")
            OCModalEditar();
            getAfiliados();
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
          eliminarAfiliado();
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
        title="Lista de Afiliados"
        data={listAfiliado}
        columns={columns}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Editar Afiliado",
            onClick: (event, rowData) => {
              getAfiliados(rowData.rut_afiliado);
              // setRutAfiliado(rowData.rutAfiliado);
              setNombre(rowData.nombre);
              setCelular(rowData.celular);
              setTelefono(rowData.telefono);
              setAntiguedadAfiliado(rowData.antiguedad_afiliado.substring(0,10).toString());
              SelectAfiliado(rowData, "Editar")
            },
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Eliminar Afiliado",
            onClick: (event, rowData) => {
              getAfiliados(rowData.rut_afiliado);
              setAfiliado(rowData.rut_afiliado);
              SelectAfiliado(rowData, "Eliminar")
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
export default Afiliados;
