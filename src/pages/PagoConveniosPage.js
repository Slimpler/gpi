import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import Hero from "../componentsPerfil/Hero";
import InfoSection from "../componentsAdmin/InfoSection";
import Navbar from "../componentsAdmin/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsAdmin/dataAdmin/InfoData";
import { SliderData } from "../componentsAdmin/dataAdmin/SliderData";
import GlobalStyle from "../globalStyles";
import PagosAdmin from "../componentsAdmin/dataAdmin/PagosAdmin";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, purple } from '@material-ui/core/colors';
import AgregarPago from '../components/Buttons/Agregar';


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


function PagoConveniosPage() {
      
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
            <div>
            <Button variant = "contained"
            color = "primary"
            onClick={() => setButtonPopup(true)}> 
            Agregar</Button>
            <AgregarPago trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Aqui va el formulario</h3>
            </AgregarPago>

            <ColorButton variant = "contained"
             color = "primary">
            Actualizar </ColorButton>

            <Button variant = "contained"
            color = "secondary">
            Eliminar </Button>
            </div>

            <PagosAdmin/>
        </>
    );
}

export default PagoConveniosPage;