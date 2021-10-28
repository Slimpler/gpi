import React, { useState } from "react";

import GlobalStyle from "../globalStyles";
import PagosDeudas from "../componentsPagos/componentsDeudas/pagoDeudas";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormDialog from "../componentsPagos/componentsDeudas/agregarDeudas";
import Navbar from "../componentsAdministrador/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function PagoDeudasPage() {
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
      <PagosDeudas />
    </>
  );
}

export default PagoDeudasPage;
