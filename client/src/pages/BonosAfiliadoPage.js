//Esto es bonos desde afiliados
/*----------------------------*/


import React, { useState } from "react";
 
import GlobalStyle from "../globalStyles";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
//import AgregarPago from '../components/Buttons/Agregar';
import FormDialog from "../componentsPagos/TestAgregar";
import PagosBonos from "../componentsPagos/componentsBono/PagosBonoAfiliado";
import Navbar from "../componentsAfiliados/Navbar/Navbar";

  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


  function BonosAfiliadoPage() {
      
    const classes = useStyles();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle ={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle} />
            <PagosBonos/>
        </>
    );
}

export default BonosAfiliadoPage;