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
    title: "Nombre Convenio",
    field: "nombre_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },

  {
    title: "Descripción",
    field: "descripcion_conv",
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
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },
  {
    title: "N° máximo de cuotas",
    field: "numero_max_cuotas_f",
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

function ConvenioF() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [listConvenioF, setListConvenioF] = useState([]);
/*   const [id_convF, setid_convF = useState([]); */
  const [convenioFSelect, setConvenioFSelect] = useState({
    afiliado_rut_afiliado: "", 
    convenio_id_conv: "",
    nombre_convenio: "",
    comentario_postulacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvenioFSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showConvenioDisponiblesF")
      .then((response) => {
        setListConvenioF(response.data);
        console.log(response.data);
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

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
      Estás seguro que deseas postular al siguiente Convenio:{" "}
        <b>{convenioFSelect && convenioFSelect.id_conv}</b>{" "}
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
        <div>
        <h1 style={{ marginInline: "4%", marginTop: "3%" }}>
         Lista de convenios disponibles
         
        </h1>
        <h3 style={{ marginInline: "4%" }}>
        A continuación se muestran los convenios disponibles, tanto financieros, comerciales y de descuento.
        Ud como afiliado podrá postular a ellos, luego en la sección "Mis convenios" ud podrá ver si se aprueba o se rechaza su solicitud.
        
        </h3>
        <h3>

        </h3>
        </div>
      
      <MaterialTable
        title="Lista de convenios financieros"
        data={listConvenioF}
        columns={columns}
        actions={[
          {
            icon: AddCircleIcon,
            tooltip: "Postular al convenio",
            onClick: (event, rowData) => SelectConvenioF(rowData, "Eliminar"),
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
            actions: "     Postular    ",
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
export default ConvenioF;