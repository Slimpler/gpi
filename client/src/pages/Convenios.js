import React, { useState } from "react";
import InfoSectionConvenioFinanciero from "../componentsConvenio/componentsFinanciero/InfoSectionConvenioFinanciero";
import InfoSectionAsociacion from "../componentsConvenio/componentsComercial/InfoSectionConvenioComercial";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
import { InfoData, InfoDataTwo } from "../componentsConvenio/dataConvenios/InfoData";
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
      <InfoSectionConvenioFinanciero {...InfoData} />
      <InfoSectionAsociacion {...InfoDataTwo} />
    </>
  );
}

export default Convenios;