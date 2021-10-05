import React, { useState } from "react";
import InfoSectionAfiliado from "../componentsConvenio/componentsFinanciero/InfoSectionAfiliado";
import InfoSectionAsociacion from "../componentsConvenio/componentsComercial/InfoSectionAsociacion";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
import { InfoData, InfoDataTwo } from "../componentsConvenio/dataPagos/InfoData";
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
      <InfoSectionAfiliado {...InfoData} />
      <InfoSectionAsociacion {...InfoDataTwo} />
    </>
  );
}

export default Convenios;