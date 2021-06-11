//Esto es pagos de afiliados; visto por afiliados
import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import GlobalStyle from "../globalStyles";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
//import AgregarPago from '../components/Buttons/Agregar';
import FormDialog from "../componentsPagos/TestAgregar";
import PagosBono from "../componentsPagos/componentsBono/PagosBono";
import PagosAfiliados from "../componentsPagos/componentsAfiliado/PagosAfiliados";
 
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


  function PagosUsuarioPage() {
      
    const classes = useStyles();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <DropDown isOpen={isOpen} toggle={toggle} />
            <PagosAfiliados/>
        </>
    );
}

export default PagosUsuarioPage;