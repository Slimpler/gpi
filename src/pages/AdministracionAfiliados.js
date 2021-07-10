import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import GlobalStyle from "../globalStyles";
import AdmninistracionAfiliados from "../componentsAddAfiliados/componentsAdministracion/AdministracionAfiliados";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
//import AgregarPago from '../components/Buttons/Agregar';
import Navbar from "../componentsPagos/Navbar";


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


function AdministracionAfiliados() {
      
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <DropDown isOpen={isOpen} toggle={toggle} />
            <AdmninistracionAfiliados/>        
        </>
    );
}

export default AdministracionAfiliados;