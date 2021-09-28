//Esto es prestamos a los afilados; directiva>prestamos

import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import GlobalStyle from "../globalStyles";
import PagosPrestamo from "../componentsPagos/componentsPrestamo/PagosPrestamo";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
//import AgregarPago from '../components/Buttons/Agregar';
import FormDialog from "../componentsPagos/TestAgregar";
import Navbar from "../componentsAdministrador/Navbar/Navbar";


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const positioningStyle = {
  margin: '150px 400px 10px',
};


function PagoPrestamosPage() {
      
    const classes = useStyles();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle = {toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle} />
            <div style={positioningStyle}>
            <PagosPrestamo/>
            </div>
        </>
    );
}

export default PagoPrestamosPage;