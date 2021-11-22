//En este componente está la tabla con info de los pagos de afiliados + CRUD; Pertenece al perfil de Directiva.
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import MaterialTable from "material-table";
import Search from "@material-ui/icons/Search";
import ResetSearch from "@material-ui/icons/Clear";
import Filter from "@material-ui/icons/FilterList";
import Export from "@material-ui/icons/SaveAlt";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import NextPage from "@material-ui/icons/ChevronRight";
import PreviousPage from "@material-ui/icons/ChevronLeft";
import SortArrow from "@material-ui/icons/ArrowUpward";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal, TextField, Button } from "@material-ui/core";

const columns = [ 

  {
    title: "Nombre convenio",
    field: "nombre_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },

  {
    title: "Descripción",
    field: "descripcion_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "Monto máximo de compra",
    field: "monto_max_compra_c",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "N° máximo de cuotas",
    field: "numero_max_cuotas_c",
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

  

   // Estados para datos de tabla convenios


   /* const [afiliado_rut_afiliado, setafiliado_rut_afiliado] = useState(0);
   const [convenio_id_conv, setconvenio_id_conv] = useState(0);
   const [nombre_convenio, setnombre_convenio] = useState("");
   const [comentario_postulacion, setcomentario_postulacion] = useState(0);
  */

  /* const agregarConvenioC = () => {
    setOpen(false);
    Axios.post("http://localhost:3001/createConvenioC", {
      afiliado_rut_afiliado: afiliado_rut_afiliado, 
      convenio_id_conv: convenio_id_conv,
      nombre_convenio: nombre_convenio,
      comentario_postulacion: comentario_postulacion,

    }).then(() => {
      console.log("exitoso");
    });
  }; */

function ConvenioC() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [listConvenioC, setListConvenioC] = useState([]);
/*   const [id_convC, setid_convC = useState([]); */
  const [convenioCSelect, setConvenioCSelect] = useState({
    afiliado_rut_afiliado: "", 
    convenio_id_conv: "",
    nombre_convenio: "",
    comentario_postulacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvenioCSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showConvenioDisponiblesC")
      .then((response) => {
        setListConvenioC(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SelectConvenioC = (id_conv, caso) => {
    setConvenioCSelect(id_conv);
    caso === "Editar" ? OCModalEditar() : OCModalEliminar();
  };

  const OCModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const OCModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const [afiliado_rut_afiliado, setafiliado_rut_afiliado] = useState(0);
  const [convenio_id_conv, setconvenio_id_conv] = useState(0);
  const [nombre_convenio, setnombre_convenio] = useState("");
  const [comentario_postulacion, setcomentario_postulacion] = useState(0);

  const peticionPostulacion = async () => {
    Axios.post(`http://localhost:3001/createPostulacion`, {
    afiliado_rut_afiliado: afiliado_rut_afiliado, 
    convenio_id_conv: convenio_id_conv,
    nombre_convenio: nombre_convenio,
    comentario_postulacion: comentario_postulacion,
  }).then((response) => {
        setListConvenioC(
          listConvenioC.filter((val) => {
            return val.id_conv != convenioCSelect.id_conv;
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

  //interfaz de model eliminar
  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
      Estás seguro que deseas postular al siguiente Convenio:{" "}
        <b>{convenioCSelect && convenioCSelect.id_conv}</b>{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => {peticionPostulacion();OCModalEliminar()}}>
          SI
        </Button>
        <Button onClick={() => OCModalEliminar()}>No</Button>
      </div>
    </div>
  );


  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de convenios comerciales"
        data={listConvenioC}
        columns={columns}
        actions={[
          {
            icon: AddCircleIcon,
            tooltip: "Postular al convenio",
            onClick: (event, rowData) => SelectConvenioC(rowData, "Eliminar"),
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
            actions: "    Postular",
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
      <Modal open={modalEliminar} onClose={OCModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>
  );
}
export default ConvenioC;
