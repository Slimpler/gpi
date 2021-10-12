//En este componente está la tabla con info de los pagos de afiliados + CRUD; Pertenece al perfil de Directiva.
import React, { useState, useEffect } from "react";
/* import { DataGrid } from "@material-ui/data-grid";
 */ import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import MaterialTable from "material-table";
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
    title: "id convenio",
    field: "id_convF",
    headerStyle: {
      backgroundColor: "#3374FF",
    },
  },
  {
    title: "Nombre Convenio",
    field: "nombre_convF",
    headerStyle: {
      backgroundColor: "#3374FF",
    },
  },
  {
    title: "Fecha de ingreso",
    field: "fecha_convF",
    type: "date",
    dateSetting: {
      format: "dd/MM/yyyy",
    },
    headerStyle: {
      backgroundColor: "#3374FF",
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


  const [listConvenioF, setListConvenioF] = useState([]);
/*   const [id_convF, setid_convF = useState([]); */
  const [convenioFSelect, setConvenioFSelect] = useState({
    id_convF: "",
    nombre_convF: "",
    fecha_convF: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvenioFSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionGet = async () => {
    await Axios.get("http://localhost:3001/showsConvenioF")
      .then((response) => {
        setListConvenioF(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className={styles.container}>
      <MaterialTable
        title="Lista de Convenios"
        data={listConvenioF}
        columns={columns}
        
        options={{
          actionsColumnIndex: -1,
          search: true,
          exportButton: true,
          headerStyle: {
            backgroundColor: "#3374FF",
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

export default ConvenioFinanciero;

/*

//Mostrar convenios financieros
app.get("/showsConvenioF", (req, res) => {
    db.query("SELECT * FROM convenio_financiero", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });  


//Mostrar convenios comercial
 app.get("/showsConvenioC", (req, res) => {
    db.query("SELECT * FROM convenio_comercial", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });  


//Mostrar convenios Descuento
 app.get("/showsConvenioD", (req, res) => {
    db.query("SELECT * FROM convenio_descuento", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });  

  */