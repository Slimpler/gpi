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
    title: "Monto del pago",
    field: "monto",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Fecha de pago",
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
    title: "Estado del pago",
    field: "estado",
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

function PagosAsociacion() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [listPagos, setListpagos] = useState([]);
  const [ingresoSelect, setIngresoSelect] = useState({
    id_ingreso: "",
    monto: "",
    fecha: "",
    tipo: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIngresoSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showPagosAsociacion")
      .then((response) => {
        setListpagos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async (id) => {
    await Axios.put("http://localhost:3001/editPagosAsociacion", {
      id_ingreso: ingresoSelect.id_ingreso,
      monto: ingresoSelect.monto,
      fecha: ingresoSelect.fecha,
      tipo: ingresoSelect.tipo,
      estado: ingresoSelect.estado,
    })
      .then((response) => {
        setListpagos(
          listPagos.map((val) => {
            return val.id_ingreso === ingresoSelect.id_ingreso
              ? {
                  monto: ingresoSelect.monto,
                  fecha: ingresoSelect.fecha,
                  tipo: ingresoSelect.tipo,
                  estado: ingresoSelect.estado,
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

  const peticionDelete = async (id) => {
    await Axios.delete(`http://localhost:3001/deletePagos/${id}`, {
      id_ingreso: ingresoSelect.id_ingreso,
    })
      .then((response) => {
        setListpagos(
          listPagos.filter((val) => {
            return val.id_ingreso !== ingresoSelect.id_ingreso;
          })
        );
        OCModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectPago = (id_ingreso, caso) => {
    setIngresoSelect(id_ingreso);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  //Interfaz de modal editar
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Pago</h3>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Monto de pago"
        name="monto"
        onChange={handleChange}
        value={ingresoSelect && ingresoSelect.monto}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        name="fecha_pago"
        type="date"
        format="yyyy-MM-dd"
        onChange={handleChange}
        value={ingresoSelect && ingresoSelect.fecha}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado del pago"
        name="estado_pago"
        onChange={handleChange}
        value={ingresoSelect && ingresoSelect.estado}
      />
      <div align="right">
        <Button
          color="primary"
          onClick={() => {
            peticionPut();
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
        Estás seguro que deseas eliminar el siguiente pago:{" "}
        <b>{ingresoSelect && ingresoSelect.monto}</b>?{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>
          Sí
        </Button>
        <Button onClick={() => OCModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de pagos"
        data={listPagos}
        columns={columns}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Editar Pago",
            onClick: (event, rowData) => SelectPago(rowData, "Editar"),
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Eliminar Pago",
            onClick: (event, rowData) => SelectPago(rowData, "Eliminar"),
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
export default PagosAsociacion;
