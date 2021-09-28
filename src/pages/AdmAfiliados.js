import React, { useState } from "react";
import DropDown from "../componentsPagos/DropDown";
import InfoSectionAdministracion from "../componentsAddAfiliados/componentsAdministracion/InfoSectionAdministracion";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
import { InfoDataFive } from "../componentsPagos/dataPagos/InfoData";
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