import React, { useState } from "react";

import GlobalStyle from "../globalStyles";
import TestAgregar from "../componentsAddAfiliados/añadirAfiliado";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormDialog from "../componentsAddAfiliados/TestAgregar";
import Navbar from "../componentsAdministrador/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function AdmAfiliados() {
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
      <TestAgregar />
    </>
  );
}

export default AdmAfiliados;