import React, { useState } from "react";
import DropDown from "../componentsConvenioAdmin/DropDown";
import Navbar from "../componentsAdministrador/Navbar/Navbar";  
import GlobalStyle from "../globalStyles";
import AdministrarConvenios from "../componentsAdministrarConv/componentsAdmintrarConv/AdministrarConvenios";

function ConveniosPageAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <AdministrarConvenios/>
  
    </>
  );
}

export default ConveniosPageAdmin;