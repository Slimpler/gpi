//Esto es pagos de bonos desde directiva

import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import GlobalStyle from "../globalStyles";
import { makeStyles} from '@material-ui/core/styles';
//import AgregarPago from '../components/Buttons/Agregar';
import FormDialog from "../componentsPagos/componentsBono/AsignarBono";
import PagosBono from "../componentsPagos/componentsBono/PagosBono";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


  function PagoBonosPage() {
      
    const classes = useStyles();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle} />
            <FormDialog/>
            <PagosBono/>
        </>
    );
}

export default PagoBonosPage;