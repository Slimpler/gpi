import React, { useState } from "react";
import DropDown from "../componentsPagos/DropDown";
import InfoSectionAfiliado from "../componentsConvenio/componentsAfiliado/InfoSectionAfiliado";
import InfoSectionAsociacion from "../componentsConvenio/componentsAsociacion/InfoSectionAsociacion";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsPagos/dataPagos/InfoData";
import GlobalStyle from "../globalStyles";

function Convenios() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} /> 
      <InfoSectionAfiliado {...InfoData} />
      <InfoSectionAsociacion {...InfoDataTwo} />
    </>
  );
}

export default Convenios;