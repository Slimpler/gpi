//Esto es pagos de afiliados; vista desde la directiva
import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import GlobalStyle from "../globalStyles";
import PagosAfiliados from "../componentsPagos/componentsAfiliado/PagosAfiliados";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
//import AgregarPago from '../components/Buttons/Agregar';
import FormDialog from "../componentsPagos/TestAgregar";
import Navbar from "../componentsPagos/Navbar";


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


function PagoAfiliadosPage() {
      
    const classes = useStyles();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <DropDown isOpen={isOpen} toggle={toggle} />
            <FormDialog/>
            <PagosAfiliados/>
            
        </>
    );
}

export default PagoAfiliadosPage;