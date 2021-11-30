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
    title: "Deuda Total",
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
    title: "Descripcion",
    field: "descripcion",
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
    title: "Rut afiliado",
    field: "rut_afiliado",
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

function Deudas() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [listDeuda, setListDeuda] = useState([]);

  const [deudaSelect, setDeudaSelect] = useState({
    id_deuda: "",
    deuda_total: "",
    remanente_deuda: "",
    cuotas_totales: "",
    cuotas_pagadas: "",
    descripcion: "",
    rut_afiliado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeudaSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getDeudasAfiliados = async () => {
    await Axios.get("http://localhost:3001/getDeudas")
      .then((response) => {
        setListDeuda(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectDeuda = (id_deuda, caso) => {
    setDeudaSelect(id_deuda);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  useEffect(() => {
    getDeudasAfiliados();
  }, []);

  //Interfaz de modal editar
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar deuda</h3>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Deuda Total"
        name="deuda_total"
        onChange={handleChange}
        value={deudaSelect && deudaSelect.deuda_total}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        name="remanente_deuda"
        label="remanente deuda"
        onChange={handleChange}
        value={deudaSelect && deudaSelect.remanente_deuda}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Descripcion"
        name="descripcion"
        onChange={handleChange}
        value={deudaSelect && deudaSelect.descripcion}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Rut afiliado"
        name="rut_afiliado"
        onChange={handleChange}
        value={deudaSelect && deudaSelect.rut_afiliado}
      />
      <div align="right">
        <Button
          color="primary"
          onClick={() => {
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
        Estás seguro que deseas eliminar la siguiente deuda?
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => OCModalEliminar()}>
          Sí
        </Button>
        <Button onClick={() => OCModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de deudas"
        data={listDeuda}
        columns={columns}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Editar deuda",
            onClick: (event, rowData) => SelectDeuda(rowData, "Editar"),
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Eliminar deuda",
            onClick: (event, rowData) => SelectDeuda(rowData, "Eliminar"),
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
export default Deudas;
