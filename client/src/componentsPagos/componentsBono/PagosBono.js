//En este componente está la tabla con info de los pagos de afiliados + CRUD; Pertenece al perfil de Directiva.
import React, { useState, useEffect } from "react";
/* import { DataGrid } from "@material-ui/data-grid";
 */ import { makeStyles } from "@material-ui/core/styles";
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
    title: "Rut afiliado",
    field: "rut_afiliado",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Nombre afiliado",
    field: "nombre",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Monto",
    field: "monto_egreso",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Fecha",
    field: "fecha",
    type: "date",
    dateSetting: {
      format: "dd/MM/yyyy",
    },
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Estado",
    field: "estado",
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
  {
    title: "Directiva",
    field: "rut_dir",
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

function Egresos() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [listEgresos, setListEgresos] = useState([]);
  const [egresoSelect, setEgresoSelect] = useState({
    rut_afiliado: "",
    nombre:"",
    monto_egreso: "",
    id: "",
    monto: "",
    fecha: "",
    estado: "",
    descripcion: "",
    rut_dir: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEgresoSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getBonosAfiliados = async () => {
    await Axios.get("http://localhost:3001/showEgresosAfiliados")
      .then((response) => {
        setListEgresos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectEgreso = (id, caso) => {
    setEgresoSelect(id);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    getBonosAfiliados();
  }, []);

  //Interfaz de modal editar
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar egreso</h3>
        <TextField
          className={styles.inputMaterial}
          label="Rut afiliado"
          name="rut_afiliado"
          onChange={handleChange}
          value={egresoSelect && egresoSelect.rut_afiliado}
        />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Monto"
        name="monto"
        onChange={handleChange}
        value={egresoSelect && egresoSelect.monto}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        name="fecha"
        type="date"
        format="yyyy-MM-dd"
        onChange={handleChange}
        value={egresoSelect && egresoSelect.fecha}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado"
        name="estado"
        onChange={handleChange}
        value={egresoSelect && egresoSelect.estado}
      />
       <br />
      <TextField
        className={styles.inputMaterial}
        label="Rut directiva"
        name="rut_dit"
        onChange={handleChange}
        value={egresoSelect && egresoSelect.rut_dir}
      />
      <br />
      <div align="right">
        <Button
          color="primary"
          onClick={(e) => {
            OCModalEditar();
          }}
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
        Estás seguro que deseas eliminar el pago seleccionado?
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => OCModalEditar()}>
          Sí
        </Button>
        <Button onClick={() => OCModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de egresos"
        data={listEgresos}
        columns={columns}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Editar egreso",
            onClick: (event, rowData) => SelectEgreso(rowData, "Editar"),
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Eliminar egreso",
            onClick: (event, rowData) => SelectEgreso(rowData, "Eliminar"),
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
            exportTitle: "Exportar",
            exportName: "Exportar a CSV",
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
export default Egresos;
