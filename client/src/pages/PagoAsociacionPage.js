import React, { useState } from "react";
<<<<<<< HEAD
 
import Hero from "../componentsPerfil/Hero";
=======
>>>>>>> 9187fe67ed12301d86ebbcf81c377c75565310c3
import GlobalStyle from "../globalStyles";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
//import AgregarPago from '../components/Buttons/Agregar';
import FormDialog from "../componentsPagos/componentsAsociacion/agregarIngreso";
import PagosAsociacion from "../componentsPagos/componentsAsociacion/PagoAsociacion";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
  
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function PagoAsociacionPage() {
      
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
            <FormDialog/>
            <PagosAsociacion/>
            
        </>
    );
}

export default PagoAsociacionPage;