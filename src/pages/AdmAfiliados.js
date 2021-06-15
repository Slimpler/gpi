import React, { useState } from "react";
import DropDown from "../componentsPagos/DropDown";
import Hero from "../componentsPagos/Hero";
import InfoSectionAfiliado from "../componentsPagos/componentsAfiliado/InfoSectionAfiliado";
import InfoSectionAsociacion from "../componentsPagos/componentsAsociacion/InfoSectionAsociacion";
import InfoSectionBono from "../componentsPagos/componentsBono/InfoSectionBono";
import InfoSectionPrestamo from "../componentsPagos/componentsPrestamo/InfoSectionPrestamo";
import InfoSectionAdministracion from "../componentsAddAfiliados/componentsAdministracion/InfoSectionAdministracion";
import Navbar from "../componentsPagos/Navbar";
import { InfoDataFive } from "../componentsPagos/dataPagos/InfoData";
import { SliderData } from "../componentsPagos/dataPagos/SliderData";
import GlobalStyle from "../globalStyles";

function AdmAfiliados() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

const style = {
  background: 'black',

}  
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} /> 
      <InfoSectionAdministracion {...InfoDataFive} />

    </>
  );
}

export default AdmAfiliados;