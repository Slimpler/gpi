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
    title: "Rut del afiliado",
    field: "rut_afiliado",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Monto del pago",
    field: "monto_pago",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Fecha de pago",
    field: "fecha_pago",
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
    field: "estado_pago",
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
  },
}));

function PagosAfiliados() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [listPagos, setListpagos] = useState([]);
  const [rutAfiliado, setRutAfiliado] = useState([]);
  const [pagoSelect, setPagoSelect] = useState({
    id_pago: "",
    rut_afiliado: "",
    monto_pago: "",
    fecha_pago: "",
    estado_pago: "",
    descripcion: "",
    tipo_pago: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPagoSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showPagosAfiliados")
      .then((response) => {
        setListpagos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async (id) => {
    await Axios.put("http://localhost:3001/editPagoAfiliado", {
      id_pago: pagoSelect.id_pago,
      monto_pago: pagoSelect.monto_pago,
      fecha_pago: pagoSelect.fecha_pago,
      estado_pago: pagoSelect.estado_pago,
      tipo_pago: pagoSelect.tipo_pago,
      descripcion: pagoSelect.descripcion,
    })
      .then((response) => {
        setListpagos(
          listPagos.map((val) => {
            return val.id_pago === pagoSelect.id_pago
              ? {
                  monto_pago: pagoSelect.monto_pago,
                  fecha_pago: pagoSelect.fecha_pago,
                  estado_pago: pagoSelect.estado_pago,
                  tipo_pago: pagoSelect.tipo_pago,
                  descripcion: pagoSelect.descripcion,
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

  const peticionPutAfiliado = async (id) => {
    await Axios.put("https://localhost:3001/editPagosAfiliados", {
      id_pago: pagoSelect.id_pago,
      rut_afiliado: pagoSelect.rut_afiliado,
    })
      .then((response) => {
        setRutAfiliado(
          rutAfiliado.map((val) => {
            return val.id_pago == pagoSelect.id_pago
            ? {
              rut_afiliado: pagoSelect.rut_afiliado,
            }
            : val;
          })
        );
        OCModalEditar();
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const peticionDelete = async (id) => {
    await Axios.delete(`http://localhost:3001/deletePagos/${id}`, {
      id_pago: pagoSelect.id_pago,
    })
      .then((response) => {
        setListpagos(
          listPagos.filter((val) => {
            return val.id_pago !== pagoSelect.id_pago;
          })
        );
        OCModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectPago = (id_pago, caso) => {
    setPagoSelect(id_pago);
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
      {<TextField
        className={styles.inputMaterial}
        label="Rut afiliado"
        name="rut_afiliado"
        onChange={handleChange}
        value={pagoSelect && pagoSelect.rut_afiliado}
      />}
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Monto de pago"
        name="monto_pago"
        onChange={handleChange}
        value={pagoSelect && pagoSelect.monto_pago}
      /> 
      <br />
      <TextField 
        className={styles.inputMaterial}
        name="fecha_pago"
        type="date"
        format="yyyy-MM-dd"
        onChange={handleChange}
        value={pagoSelect && pagoSelect.fecha_pago}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado del pago"
        name="estado_pago"
        onChange={handleChange}
        value={pagoSelect && pagoSelect.estado_pago}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Descripcion"
        name="descripcion"
        onChange={handleChange}
        value={pagoSelect && pagoSelect.tipo_pago}
      />
      <br />
      <div align="right">
        <Button color="primary" onClick={(e) => {peticionPutAfiliado();peticionPut()}}>
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
        <b>{pagoSelect && pagoSelect.monto_pago}</b>?{" "}
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
export default PagosAfiliados;
