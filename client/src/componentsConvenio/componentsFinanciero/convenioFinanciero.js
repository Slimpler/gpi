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
    title: "Id convenio",
    field: "id_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Nombre convenio",
    field: "nombre_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Fecha de ingreso",
    field: "fecha_conv",
    type: "date",
    dateSetting: {
      format: "dd/MM/yyyy",
    },
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Descripción",
    field: "descripcion_conv",
    type: "date",
    dateSetting: {
      format: "dd/MM/yyyy",
    },
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Monto máximo de crédito",
    field: "monto_max_credito_f",
    type: "date",
    dateSetting: {
      format: "dd/MM/yyyy",
    },
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "N° máximo de cuotas",
    field: "numero_max_cuotas_f",
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

function ConvenioFinanciero() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [listConvenioF, setListConvenioF] = useState([]);
  
  
  const [convenioFSelect, setConvenioFSelect] = useState({
    id_conv: "",
    nombre_conv: "",
    fecha_conv: "",
    descripcion_conv: "",
    tipo_conv: "",
    monto_max_credito_f: "",
    numero_max_cuotas_f: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvenioFSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showConvenioF")
      .then((response) => {
        setListConvenioF(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionPut = async (id) => {
     await Axios.put("http://localhost:3001/editConvenioF", {
      id_conv: convenioFSelect.id_conv,
      nombre_conv: convenioFSelect.nombre_conv,
      descripcion_conv: convenioFSelect.descripcion_conv,
      monto_max_credito_f: convenioFSelect.monto_max_credito_f,
      numero_max_cuotas_f: convenioFSelect.numero_max_cuotas_f,
      estado: convenioFSelect.estado,
    })
      .then(() => {
        setListConvenioF(
          listConvenioF.filter((val) => {
            return val.id_conv === convenioFSelect.id_conv
              ? {
                id_conv: convenioFSelect.id_conv,
                nombre_conv: convenioFSelect.nombre_conv,
                descripcion_conv: convenioFSelect.descripcion_conv,
                monto_max_credito_f: convenioFSelect.monto_max_credito_f,
                numero_max_cuotas_f: convenioFSelect.numero_max_cuotas_f,
                estado: convenioFSelect.estado,  
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

  const SelectConvenioF = (id_conv, caso) => {
    setConvenioFSelect(id_conv);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const peticionDelete = async () => {
    await Axios.delete(`http://localhost:3001/deleteConvenioF/${convenioFSelect.id_conv}`)
      .then((response) => {
        setListConvenioF(
          listConvenioF.filter((val) => {
            return val.id_conv != convenioFSelect.id_conv;
          })
        );
        OCModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    peticionGet();
  }, []);

  //Interfaz de modal editar
  const bodyEditar = (
    <div className={styles.modal}>

      <h3>Editar Convenio</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre del convenio"
        name="nombre_conv"
        variant= "standard"
        onChange={handleChange}
        value={convenioFSelect && convenioFSelect.nombre_conv}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Descripcion"
        name="descripcion_conv"
        variant= "standard"
        onChange={handleChange}
        value={convenioFSelect && convenioFSelect.descripcion_conv}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Monto máximo de crédito"
        name="monto_max_credito_f"
        variant= "standard"
        onChange={handleChange}
        value={convenioFSelect && convenioFSelect.monto_max_credito_f}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Número máximo de cuotas"
        name="numero_max_cuotas_f"
        variant= "standard"
        onChange={handleChange}
        value={convenioFSelect && convenioFSelect.numero_max_cuotas_f}
      />

      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado convenio"
        name="estado"
        variant= "standard"
        onChange={handleChange}
        value={convenioFSelect && convenioFSelect.Estado_conv_d}
      />

      <br />
      <div align="right">
        <Button 
        color="primary"
        onClick={(e) => {
          peticionPut();
          OCModalEditar();
        }}>
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
      Estás seguro que deseas eliminar el siguiente Convenio:{" "}
        <b>{convenioFSelect && convenioFSelect.id_conv}</b>{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() =>{peticionDelete();OCModalEliminar()}}>
          SI
        </Button>
        <Button onClick={() => OCModalEliminar()}>
          NO
        </Button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de Convenios"
        data={listConvenioF}
        columns={columns}
        actions={[
          {
            icon: EditIcon,
            tooltip: "Editar Convenio",
            onClick: (event, rowData) => SelectConvenioF(rowData, "Editar"),
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },
        /*   {
            icon: DeleteIcon,
            tooltip: "Eliminar Convenio",
            onClick: (event, rowData) => SelectConvenioF(rowData, "Eliminar"),
          },
           */
        
        ]}
        options={{
          actionsColumnIndex: -1,
          search: true,
          exportButton: true,
          headerStyle: {
            backgroundColor: "#009966",
            color: "#FFF",
            fontSize: "15px",
          },
        }}
        localization={{
          header: {
            actions: "   Editar   ",
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
export default ConvenioFinanciero;
 