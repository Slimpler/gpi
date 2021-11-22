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
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';



const columns = [ 
  
  {
    title: "Rut afiliado",
    field: "afiliado_rut_afiliado",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },

  {
    title: "Id convenio",
    field: "convenio_id_conv",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },

  {
    title: "Nombre Convenio",
    field: "nombre_convenio",
    headerStyle: {
      backgroundColor: "#23BB77",
    },
  },

  {
    title: "Comentario",
    field: "comentario_postulacion",
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

function AdmPostulaciones1() {
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [listConvenioC, setListConvenioC] = useState([]);
/*   const [id_convC, setid_convC = useState([]); */
  const [convenioCSelect, setConvenioCSelect] = useState({
    id_convC: "",
    nombre_convC: "",
    fecha_convC: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvenioCSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showPostulaciones")
      .then((response) => {
        setListConvenioC(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 style={{ marginInline: "4%", marginTop: "2%" }}>
        Postulaciones
         
        </h1>
        <h3 style={{ marginInline: "4%" }}>
        A continuación se muestran las postulaciones realizadas por los afiliados.
        Ud como administrador podrá aceptarlas o rechazarlas, luego de revisar si el afiliado cumple o no con los requisitos para optar a un convenio. 
        
        </h3>
        <h3>

        </h3>
        </div>

      <MaterialTable
        title="Lista de postulaciones"
        data={listConvenioC}
        columns={columns}
        actions={[
          {
            icon: CheckIcon,
            tooltip: "Aceptar",
            /* onClick: (event, rowData) => SelectConvenioC(rowData, "Eliminar"), */
            iconProps: {
              style: { backgroundColor: "#33ACFF" },
            },
          },

          {
            icon: ClearIcon,
            tooltip: "Rechazar",
            /* onClick: (event, rowData) => SelectConvenioC(rowData, "Eliminar"), */
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
    </div>
  );
}
export default AdmPostulaciones1;