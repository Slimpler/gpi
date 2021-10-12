//Esto es pagos de afiliados; vista desde la directiva
import React, { useState } from "react";
import GlobalStyle from "../globalStyles";
import AgregarConvenioDescuento from "../componentsConvenio/componentsDescuento/convenioDescuento";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormDialog from "../componentsConvenio/AgregarConvenioDescuento";
import Navbar from "../componentsAdministrador/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function AdministrarConvenioDescuento() {
  const classes = useStyles();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    </*  style={{ backgroundColor: "#eee", height: "100v" }} */>
      <GlobalStyle />
      <Navbar toggle={toggle} />   
      <FormDialog />
      <AgregarConvenioDescuento />
    </>
  );
}

export default AdministrarConvenioDescuento;
