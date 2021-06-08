import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import Hero from "../componentsPerfil/Hero";
import InfoSection from "../componentsPerfil/InfoSection";
import Navbar from "../componentsAdmin/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsAdmin/dataAdmin/InfoData";
import { SliderData } from "../componentsPerfil/dataPerfil/SliderData";
import GlobalStyle from "../globalStyles";

function FuncionariosPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} />
      <InfoSection {...InfoDataFour} />
    </>
  );
}

export default FuncionariosPage;